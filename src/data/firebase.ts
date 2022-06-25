import { initializeApp, getApps } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getStorage, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { getFunctions, httpsCallable } from "firebase/functions";
import { CareersFormData } from "@/components/careers";
import { ContactUsFormData } from "@/components/contact-us";

const firebaseConfig = {
  apiKey: "AIzaSyC9vj7QK2fHVVn8QjY-FQ5I4dXYExNDbus",
  authDomain: "vincetechnosoft.firebaseapp.com",
  databaseURL: "https://vincetechnosoft-default-rtdb.firebaseio.com",
  projectId: "vincetechnosoft",
  storageBucket: "vincetechnosoft.appspot.com",
  messagingSenderId: "220339496499",
  appId: "1:220339496499:web:2d0be84f78a6f99115e546",
};

function init() {
  const app = initializeApp(firebaseConfig);
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(
      "6LeGJIUgAAAAAJsCxpFuraQLeovfTVvP3HBJtSfP"
    ),
    isTokenAutoRefreshEnabled: true,
  });
  return app;
}

const app = getApps()[0] ?? init();
const apkStorage = getStorage(app, "gs://vincetechnosoft-applications");
const publicStorage = getStorage(app, "gs://vincetechnosoft-public-info");
const functions = getFunctions(app, "asia-south1");

export function getDownloadUrl(apkName: string) {
  return getDownloadURL(ref(apkStorage, apkName + ".apk"));
}

const _onCareersFormSubmit = httpsCallable<
  { [key in keyof CareersFormData]: string },
  void
>(functions, "PUBLICcareers");
export const _onContactUsFormSubmit = httpsCallable<
  { [key in keyof ContactUsFormData]: string },
  void
>(functions, "PUBLICcontactUs");

const fileref: Map<File, string> = new Map();

function getPath(file: File, id: string) {
  let path = fileref.get(file);
  if (!path) {
    path =
      new Date().toISOString().substring(0, 10) +
      "/" +
      id +
      "-" +
      ("" + Math.random()).substring(2);
    fileref.set(file, path);
  }
  return path;
}

export async function onCareersFormSubmit(data: CareersFormData) {
  const d: { [k in keyof CareersFormData]: string } = {
    ...data,
    cv: "",
    portfolio: "",
  };
  if (data.cv) {
    d.cv = getPath(data.cv, data.phoneNumber);
    await uploadBytes(ref(publicStorage, d.cv), data.cv);
  }
  if (data.portfolio) {
    d.portfolio = getPath(data.portfolio, data.phoneNumber);
    await uploadBytes(ref(publicStorage, d.portfolio), data.portfolio);
  }
  await _onCareersFormSubmit(d);
}

export async function onContactUsFormSubmit(data: ContactUsFormData) {
  await _onContactUsFormSubmit(data);
}
