import careersData from "@/data/careers";
import Button from "@/components/button";
import { ChangeEvent, FormEvent, useCallback, useRef, useState } from "react";
import Message from "@/components/messages";
import { onCareersFormSubmit } from "@/data/firebase";

interface FormData {
  email: string;
  fullName: string;
  phoneNumber: string;
  city: string;
  department: string;
  portfolio: File | undefined;
  cv: File | undefined;
}

export type CareersFormData = FormData;

type State = {
  loading: boolean;
  success?: boolean;
  errorMessage?: JSX.Element;
  error?: { [key in keyof FormData]: string | null };
};

const className = {
  div: "mb-2 mr-2",
  inputErr(err?: string | null) {
    return err
      ? "border-feedback-error"
      : err === null
      ? "border-feedback-success"
      : "";
  },
};

export default function CareersForm() {
  const formData = useRef<FormData>({
    email: "",
    fullName: "",
    phoneNumber: "",
    city: "",
    department: careersData[0].serviceName,
    cv: undefined,
    portfolio: undefined,
  });
  const [{ loading, error, errorMessage, success }, setState] = useState<State>(
    { loading: false }
  );
  const onChange = useCallback(function ({
    target: { id, value, files },
  }: ChangeEvent<HTMLInputElement & HTMLSelectElement>) {
    if (
      id === "email" ||
      id === "fullName" ||
      id === "phoneNumber" ||
      id === "city" ||
      id === "department"
    ) {
      formData.current[id] = value;
    } else if (id === "portfolio" || id === "cv") {
      formData.current[id] = files?.item(0) ?? undefined;
    }
  },
  []);
  const onSubmit = useCallback(function (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const error: State["error"] = {
      city: null,
      cv: null,
      department: null,
      email: null,
      fullName: null,
      phoneNumber: null,
      portfolio: null,
    };
    const { email, city, department, cv, portfolio } = formData.current;
    const phoneNumber = formData.current.phoneNumber.replaceAll(" ", "");
    const fullName = formData.current.fullName.trim();
    if (!email) {
      error.email = "Email is Required";
    } else if (
      !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
        email
      )
    ) {
      error.email = "Given input is not valid (eg: example@abc.xyz)";
    }
    if (!phoneNumber) {
      error.phoneNumber = "Phone Number is Required";
    } else if (!phoneNumber.startsWith("+91")) {
      error.phoneNumber =
        "We are currently accepting Indian Candidates only (+91 XXXXX XXXXX)";
    } else if (!/^\+[1-9]\d{10,14}$/.test(phoneNumber)) {
      error.phoneNumber = "Given input is not valid (eg: +91 XXXXX XXXXX)";
    }
    if (!city) {
      error.city = "City is Required";
    } else if (city.length < 3) {
      error.city = "Enter a complete city name";
    }
    if (!department) {
      error.department = "Choose a Department to work in";
    }
    if (!fullName) {
      error.fullName = "Name is Required";
    } else {
      const a = fullName.split(" ");
      if (a.length !== 2 || !a[0] || !a[1]) {
        error.fullName = 'Formate: "FirstName<space>LastName"';
      }
    }

    if (!cv) {
      error.cv = "CV is Required";
    } else if (cv.type !== "application/pdf") {
      error.cv = "File must be in .pdf formate";
    } else if (cv.size / (1024 * 1024) > 5) {
      error.cv = "File size must be less then 5MB";
    }

    if (portfolio) {
      if (portfolio.size / (1024 * 1024) > 5) {
        error.portfolio = "File size must be less then 5MB";
      } else if (portfolio.type !== "application/pdf") {
        error.portfolio = "File must be in .pdf formate";
      }
    }
    if (Object.values(error).find((x) => typeof x === "string") === undefined) {
      console.log(formData.current);
      setState({ error, loading: true });
      onCareersFormSubmit({
        city,
        cv,
        department,
        email,
        fullName,
        phoneNumber,
        portfolio,
      }).then(
        function () {
          setState({ error, loading: false, success: true });
        },
        function () {
          setState({
            error,
            loading: false,
            errorMessage: (
              <Message
                showDismissButton
                type="danger"
                title="Error While Submitting Form"
              >
                Something went wrong. Try re-submitting the form, or come back
                later and try-again
              </Message>
            ),
          });
        }
      );
    } else {
      setState({ error, loading: false });
    }
  }, []);
  return (
    <form
      onSubmit={onSubmit}
      className="card m-5 mt-9 rounded-xl py-5 px-10 lg:mx-24"
    >
      <h3 className="mb-9 text-3xl">Join our team</h3>
      {success ? (
        <Message type="success" title="Form Submited Successfully">
          Our team will contact you with in 3 to 5 business day.
          <br /> Till then check out our #Solution, #Tutorials and follow us on
          Other Platforms for new Updates!
        </Message>
      ) : (
        errorMessage
      )}
      <div
        className={`grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-6 ${
          loading && "opacity-25"
        }`}
      >
        <div className={className.div}>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            disabled={loading || success}
            required
            className={"input " + className.inputErr(error?.email)}
            id="email"
            placeholder="eg. abc@xyz.com"
            type="email"
            inputMode="email"
            onChange={onChange}
          />
          <p className="italic text-feedback-error">{error?.email}</p>
        </div>
        <div className={className.div}>
          <label className="label" htmlFor="fullName">
            Full Name
          </label>
          <input
            disabled={loading || success}
            required
            className={"input " + className.inputErr(error?.fullName)}
            id="fullName"
            placeholder="Full Name"
            type="text"
            onChange={onChange}
          />
          <p className="italic text-feedback-error">{error?.fullName}</p>
        </div>
        <div className={className.div}>
          <label className="label" htmlFor="phoneNumber">
            Contact Number
          </label>
          <input
            disabled={loading || success}
            required
            className={"input " + className.inputErr(error?.phoneNumber)}
            placeholder="eg. XXXXX XXXXX"
            id="phoneNumber"
            type="text"
            onChange={onChange}
          />
          <p className="italic text-feedback-error">{error?.phoneNumber}</p>
        </div>
        <div className={className.div}>
          <label className="label" htmlFor="city">
            City of Residence
          </label>
          <input
            disabled={loading || success}
            required
            className={"input " + className.inputErr(error?.city)}
            placeholder="City"
            id="city"
            type="text"
            onChange={onChange}
          />
          <p className="italic text-feedback-error">{error?.city}</p>
        </div>
        <div className={className.div}>
          <label className="label" htmlFor="department">
            Department
          </label>
          <select
            defaultValue=""
            disabled={loading || success}
            required
            placeholder="Select Department"
            className={"input " + className.inputErr(error?.department)}
            id="department"
            onChange={onChange}
          >
            <option value="" disabled hidden>
              * Choose here
            </option>
            {careersData.map(({ serviceName }, i) => (
              <option key={i} value={serviceName}>
                {serviceName}
              </option>
            ))}
          </select>
          <p className="italic text-feedback-error">{error?.department}</p>
        </div>
        <div className={className.div}>
          <label className="label" htmlFor="cv">
            Your CV
          </label>
          <input
            disabled={loading || success}
            required
            onChange={onChange}
            className={"input " + className.inputErr(error?.cv)}
            id="cv"
            type="file"
            accept="application/pdf"
          />
          <p className="italic text-feedback-error">{error?.cv}</p>
        </div>
        <div className={className.div}>
          <label className="label" htmlFor="portfolio">
            Your Portfolio
            <span className="ml-2 text-sm font-semibold underline underline-offset-2">
              Optional
            </span>
          </label>
          <input
            disabled={loading || success}
            onChange={onChange}
            className={"input " + className.inputErr(error?.department)}
            id="portfolio"
            type="file"
            accept="application/pdf"
          />
          <p className="italic text-feedback-error">{error?.portfolio}</p>
          <p className="text-sm italic">Attach your previous projects</p>
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          loading={loading}
          disabled={success}
          type="submit"
          className="flex w-52 justify-center"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
let i = 0;
