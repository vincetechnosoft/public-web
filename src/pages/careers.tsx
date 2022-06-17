import HomeLayout from "layouts/home-layout";
import { NextPageWithLayout } from "types";
import careersData from "data/careers.json";
import Button from "@/components/button";
import { ChangeEvent, FormEvent, useCallback, useRef, useState } from "react";
import Message from "@/components/messages";

const Careers: NextPageWithLayout = () => {
  const [selectedID, setID] = useState(0);
  const selectedInfo = careersData[selectedID];
  return (
    <div className="py-7 md:mt-0 md:min-h-[calc(80vh_-_4rem)]">
      <h2 className="px-5 text-5xl font-extrabold md:px-24 md:text-6xl">
        Careers
      </h2>
      <div className="mt-5 flex flex-wrap px-5 md:px-24">
        {careersData.map(({ serviceName }, id) => (
          <Button
            key={id}
            className="mr-2 mb-2"
            variant={selectedID === id ? "outline" : "secondery"}
            onClick={() => (selectedID === id ? null : setID(id))}
          >
            {serviceName}
          </Button>
        ))}
      </div>
      <CareersInfo selectedInfo={selectedInfo} />
      <CareersForm />
    </div>
  );
};

Careers.getLayout = (page) => <HomeLayout>{page}</HomeLayout>;

export default Careers;
function CareersInfo({
  selectedInfo,
}: {
  selectedInfo: {
    id: number;
    serviceName: string;
    position: string;
    asking: string[];
    bring: string[];
    image: string;
  };
}) {
  return (
    <div className="m-5 mt-9 rounded bg-white py-5 px-10 shadow-md  md:mx-24">
      <h3 className="text-2xl font-bold">About the position</h3>
      <p className="ml-5 mt-5 text-base md:text-lg">{selectedInfo.position}</p>
      <h2 className="mt-9 text-3xl">What we are asking of you:</h2>
      <ul className="ml-10 mt-5 list-disc text-base md:text-lg">
        {selectedInfo.asking.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
      <h2 className="mt-9 text-3xl">What you bring to the table:</h2>
      <ul className="mt-5 ml-10 list-disc text-base md:text-lg">
        {selectedInfo.bring.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
      <h3 className="mt-9 text-2xl font-bold">What we offer:</h3>
      <p className="mt-5 ml-5 text-base md:text-lg">
        Be prepared to grow with Vince Techno Soft. Interning with us is in your
        interest as we provide a top-tier holistic experience. Our idea is to
        catalyze and reform one’s concept of professional freedom by placing
        them in our robust new start-up. It’s not just an internship that will
        look good on your resume, but one that will actually help you build
        skills and streamline your interests. We will also provide a certificate
        and a letter of recommendation on the successful completion of your
        Vince Techno Soft Internship. We recognize and furbish your skills to
        your advantage and facilitate your growth alongside ours.
      </p>
    </div>
  );
}

interface FormData {
  email: string;
  name: string;
  phoneNumber: string;
  city: string;
  department: string;
  portfolio?: File;
  cv?: File;
}

interface State {
  loading: boolean;
  success?: boolean;
  errorMessage?: JSX.Element | null;
  error?: {
    email: string | null;
    name: string | null;
    phoneNumber: string | null;
    city: string | null;
    department: string | null;
    portfolio: string | null;
    cv: string | null;
  };
}

const className = {
  div: "mb-2 mr-2",
  lable: "mb-2 block text-base font-bold uppercase tracking-wide text-gray-700",
  input(err?: string | null) {
    return `
    mb-3 block rounded border-2 
    ${
      err
        ? "border-red-500"
        : `focus:border-indigo-500 ${err === null && "border-green-500"}`
    } 
    ${err !== null && "bg-gray-200"} 
    py-3 px-4 w-full leading-tight text-gray-700 focus:bg-white focus:outline-none`;
  },
  select(err?: string | null) {
    return this.input(err);
  },
  fileInput(err?: string | null) {
    return `
    ${err === undefined && "border-black"}
      ${this.input(err)}
      pl-1 pt-1 pb-1 file:h-15 file:text-white file:py-2 file:px-6 file:rounded file:bg-black file:border-none
    `;
  },
  err(err?: string | null) {
    return <p className="text-base italic text-red-500">{err}</p>;
  },
};

function CareersForm() {
  const formData = useRef<FormData>({
    email: "",
    name: "",
    phoneNumber: "",
    city: "",
    department: careersData[0].serviceName,
  });
  const [{ loading, error, errorMessage, success }, setState] = useState<State>(
    { loading: false }
  );
  const onChange = useCallback(function ({
    target: { id, value, files },
  }: ChangeEvent<HTMLInputElement & HTMLSelectElement>) {
    switch (id as keyof FormData) {
      case "email": {
        formData.current.email = value;
        break;
      }
      case "name": {
        formData.current.name = value;
        break;
      }
      case "phoneNumber": {
        formData.current.phoneNumber = value;
        break;
      }
      case "city": {
        formData.current.city = value;
        break;
      }
      case "department": {
        formData.current.department = value;
        break;
      }
      case "portfolio": {
        formData.current.portfolio = files?.item(0) ?? undefined;
        break;
      }
      case "cv": {
        formData.current.cv = files?.item(0) ?? undefined;
        break;
      }
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
      name: null,
      phoneNumber: null,
      portfolio: null,
    };
    const { email, city, department, cv, portfolio } = formData.current;
    const phoneNumber = formData.current.phoneNumber.replaceAll(" ", "");
    const name = formData.current.name.trim();
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
    } else if (!/^\+[1-9]\d{10,14}$/.test(phoneNumber)) {
      error.phoneNumber = "Given input is not valid (eg: +91 55555 00000)";
    }
    if (!city) {
      error.city = "City is Required";
    } else if (city.length < 3) {
      error.city = "Enter a complete city name";
    }
    if (!department) {
      error.department = "Choose a Department to work in";
    }
    if (!name) {
      error.name = "Name is Required";
    } else {
      const a = name.split(" ");
      if (a.length !== 2 || !a[0] || !a[1]) {
        error.name = 'Formate: "FirstName<space>LastName"';
      }
    }

    if (!cv) {
      error.cv = "CV is Required";
    } else if (cv.size / (1024 * 1024) > 5) {
      error.cv = "File size must be less then 5MB";
    }

    if (portfolio && portfolio.size / (1024 * 1024) > 5) {
      error.portfolio = "File size must be less then 5MB";
    }
    if (Object.values(error).find((x) => typeof x === "string") === undefined) {
      console.log(formData.current);
      setState({ error, loading: true });
      sendData({
        city,
        cv: cv!,
        department,
        email,
        name,
        phoneNumber,
        portfolio: portfolio,
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
    <div className="relative">
      <form
        onSubmit={onSubmit}
        className="m-5 mt-9 rounded-lg bg-white py-5 px-10 shadow-lg md:mx-24"
      >
        <h3 className="mb-9 text-3xl">Join our team</h3>
        {errorMessage}
        {success && (
          <Message type="success" title="Form Submited Successfully">
            Our team will contact you with in 3 to 5 business day.
            <br /> Till then check out our #Solution, #Tutorials and follow us
            on Other Platforms for new Updates!
          </Message>
        )}
        <div
          className={`grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-6 ${
            loading && "opacity-25"
          }`}
        >
          <div className={className.div}>
            <label className={className.lable} htmlFor="email">
              Email
            </label>
            <input
              disabled={loading || success}
              required
              className={className.input(error?.email)}
              id="email"
              placeholder="Active Email Address"
              type="email"
              inputMode="email"
              onChange={onChange}
            />
            {className.err(error?.email)}
          </div>
          <div className={className.div}>
            <label className={className.lable} htmlFor="name">
              Name
            </label>
            <input
              disabled={loading || success}
              required
              className={className.input(error?.name)}
              id="name"
              placeholder="Your Good Name"
              type="text"
              onChange={onChange}
            />
            {className.err(error?.name)}
          </div>
          <div className={className.div}>
            <label className={className.lable} htmlFor="phoneNumber">
              Contact Number
            </label>
            <input
              disabled={loading || success}
              required
              className={className.input(error?.phoneNumber)}
              placeholder="Your Active Phone Number"
              inputMode="numeric"
              id="phoneNumber"
              type="text"
              onChange={onChange}
            />
            {className.err(error?.phoneNumber)}
          </div>
          <div className={className.div}>
            <label className={className.lable} htmlFor="city">
              City of Residence
            </label>
            <input
              disabled={loading || success}
              required
              className={className.input(error?.city)}
              placeholder="City"
              id="city"
              type="text"
              onChange={onChange}
            />
            {className.err(error?.city)}
          </div>
          <div className={className.div}>
            <label className={className.lable} htmlFor="department">
              Department
            </label>
            <select
              defaultValue=""
              disabled={loading || success}
              required
              placeholder="Select Department"
              className={className.select(error?.department)}
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
            {className.err(error?.department)}
          </div>
          <div className={className.div}>
            <label className={className.lable} htmlFor="cv">
              Your CV
            </label>
            <input
              disabled={loading || success}
              required
              onChange={onChange}
              className={className.fileInput(error?.cv)}
              id="cv"
              type="file"
              accept="application/pdf"
            />
            {className.err(error?.cv)}
            <p className="-mt-1 text-sm italic text-gray-600">
              <b className="uppercase">CV</b> File should only be in PDF format.
            </p>
          </div>
          <div className={className.div}>
            <label className={className.lable} htmlFor="portfolio">
              Your Portfolio
            </label>
            <input
              disabled={loading || success}
              onChange={onChange}
              className={className.fileInput(error?.department)}
              id="portfolio"
              type="file"
              accept="application/pdf"
            />
            {className.err(error?.portfolio)}
            <p className="-mt-1 text-sm italic text-gray-600">
              Attach your previous projects
              <br />
              <b className="uppercase">Portfolio</b> File should only be in PDF
              format
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <Button loading={loading} disabled={success} type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

function sendData(data: {
  email: string;
  name: string;
  phoneNumber: string;
  city: string;
  department: string;
  portfolio?: File;
  cv: File;
}) {
  return new Promise<void>((resolve, reject) =>
    setTimeout(Math.random() < 0.5 ? resolve : reject, 1000)
  );
}
