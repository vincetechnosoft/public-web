import { initializeApp, getApps } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getStorage, getDownloadURL, ref } from "firebase/storage";

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
const storage = getStorage(app, "gs://vincetechnosoft-applications");

export default function getDownloadUrl(apkName: string) {
  return getDownloadURL(ref(storage, apkName + ".apk"));
}
