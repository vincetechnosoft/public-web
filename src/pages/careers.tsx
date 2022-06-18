import HomeLayout from "layouts/home-layout";
import careersData from "data/careers.json";
import Button, { buttonClass } from "@/components/button";
import { ChangeEvent, FormEvent, useCallback, useRef, useState } from "react";
import Message from "@/components/messages";
import { NextPage } from "next";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const Careers: NextPage = () => {
  const [selectedID, setID] = useState(0);
  const selectedInfo = careersData[selectedID];
  return (
    <HomeLayout>
      <div className="py-7 md:mt-0 md:min-h-[calc(80vh_-_4rem)]">
        <h2 className="mx-5 text-5xl font-extrabold md:text-6xl lg:mx-24">
          Careers
        </h2>
        <div className="mx-5 mt-5 sm:hidden">
          <label htmlFor="careers" className="block text-2xl">
            Select DEPARTMENT
          </label>
          <select
            id="careers"
            className={"mt-2"}
            onChange={(e) => setID(parseInt(e.target.value))}
          >
            {careersData.map(({ serviceName }, id) => (
              <option value={id} key={serviceName} className="mr-2 mb-2">
                {serviceName}
              </option>
            ))}
          </select>
        </div>
        <div className="mx-5 mt-5 hidden flex-wrap sm:flex lg:mx-24">
          {careersData.map(({ serviceName }, id) => (
            <Link href="/careers#position" key={id}>
              <a
                className={
                  (selectedID === id
                    ? buttonClass.outline
                    : buttonClass.secondery) + " mr-2 mb-2"
                }
                onClick={() => (selectedID === id ? null : setID(id))}
              >
                {serviceName}
              </a>
            </Link>
          ))}
        </div>
        <div id="position" />
        <AnimatePresence exitBeforeEnter initial={false}>
          <CareersInfo key={selectedInfo.id} selectedInfo={selectedInfo} />
        </AnimatePresence>
        <CareersForm />
      </div>
    </HomeLayout>
  );
};

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 100, y: 0 },
};

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
    <motion.main
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: "linear" }} // Set the transition to linear
      className="m-5 mt-9 rounded bg-white py-5 px-10 shadow-md lg:mx-24"
    >
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
    </motion.main>
  );
}

interface FormData {
  email: string;
  fullName: string;
  phoneNumber: string;
  city: string;
  department: string;
  portfolio?: File;
  cv?: File;
}

interface State {
  loading: boolean;
  success?: boolean;
  errorMessage?: JSX.Element;
  error?: {
    email: string | null;
    fullName: string | null;
    phoneNumber: string | null;
    city: string | null;
    department: string | null;
    portfolio: string | null;
    cv: string | null;
  };
}

const className = {
  div: "mb-2 mr-2",
  lable: "",
  inputErr(err?: string | null) {
    return err
      ? "border-red-500"
      : `focus:border-indigo-500 ${err === null && "border-green-500"}`;
  },
  err(err?: string | null) {
    return <p className="text-base italic text-red-500 duration-150">{err}</p>;
  },
};

function CareersForm() {
  const formData = useRef<FormData>({
    email: "",
    fullName: "",
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
      sendData({
        city,
        cv: cv!,
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
      className="m-5 mt-9 rounded-lg bg-white py-5 px-10 shadow-lg lg:mx-24"
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
          <label className={className.lable} htmlFor="email">
            Email
          </label>
          <input
            disabled={loading || success}
            required
            className={className.inputErr(error?.email)}
            id="email"
            placeholder="Active Email Address"
            type="email"
            inputMode="email"
            onChange={onChange}
          />
          {className.err(error?.email)}
        </div>
        <div className={className.div}>
          <label className={className.lable} htmlFor="fullName">
            Full Name
          </label>
          <input
            disabled={loading || success}
            required
            className={className.inputErr(error?.fullName)}
            id="fullName"
            placeholder="Your Good Name"
            type="text"
            onChange={onChange}
          />
          {className.err(error?.fullName)}
        </div>
        <div className={className.div}>
          <label className={className.lable} htmlFor="phoneNumber">
            Contact Number
          </label>
          <input
            disabled={loading || success}
            required
            className={className.inputErr(error?.phoneNumber)}
            placeholder="Your Active Phone Number"
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
            className={className.inputErr(error?.city)}
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
            className={className.inputErr(error?.department)}
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
            className={className.inputErr(error?.cv)}
            id="cv"
            type="file"
            accept="application/pdf"
          />
          {className.err(error?.cv)}
          <p className="text-sm italic text-gray-600">
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
            className={className.inputErr(error?.department)}
            id="portfolio"
            type="file"
            accept="application/pdf"
          />
          {className.err(error?.portfolio)}
          <p className="text-sm italic text-gray-600">
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
  );
}
let i = 0;

function sendData(data: {
  email: string;
  fullName: string;
  phoneNumber: string;
  city: string;
  department: string;
  portfolio?: File;
  cv: File;
}) {
  return new Promise<void>((resolve, reject) =>
    setTimeout(i++ % 2 ? resolve : reject, 1000)
  );
}
