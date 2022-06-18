import HomeLayout from "layouts/home-layout";
import {
  Zap,
  Clock,
  Map,
  ChevronDown,
  ChevronUp,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  PhoneCall,
} from "react-feather";
import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useRef,
  useState,
} from "react";
import Button, { buttonClass } from "@/components/button";
import Link from "next/link";
import Message from "@/components/messages";
import { NextPage } from "next";

const highlights = [
  {
    icon: (
      <Map className="h-[26px] w-auto fill-indigo-400 stroke-white stroke-1" />
    ),
    label: "India Based",
  },
  {
    icon: <Clock className="h-7 w-auto fill-indigo-400 stroke-white" />,
    label: "Zero Downtime",
  },
  {
    icon: <Zap className="h-6 w-auto fill-indigo-400 text-indigo-400" />,
    label: "Super Fast",
  },
];

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <div className="pb-10">
        <Starters />
        <SoftwareInfo />
        <ContactUs />
      </div>
    </HomeLayout>
  );
};

export default Home;

const softwareData = [
  {
    title: "Web Development",
    content:
      "Using UI/UX designed by our designing team, or provided by the clients, we develop websites that are highly secured and developed using the best coding practices. The end-result is a product that is responsive and easy-to-use, which gives quality and affordability. An SEO friendly, scalable, and secure website is Grownited’s assurance.",
  },
  {
    title: "Application Development",
    content:
      "Share your ideas with us and get outstanding services with us, for both single and cross-platform applications. We yield mobile apps that integrate machine learning analytics, API integration, and personalization. We ensure economies of scale without sacrificing greater performance.",
  },
  {
    title: "Maintenance and upgrades",
    content:
      "Just creating websites and apps for our clients is not enough! We provide maintenance and upgrades for them to guarantee that the clients’ digital products stay relevant to the customers’ needs, remain bug-free and are constantly authentic. As the market evolves and newer technologies pour in, the products can be upgraded to stay on top of the market.",
  },
];

function Starters() {
  return (
    <div className="mx-5 mt-7 flex items-center justify-between md:mt-0 md:flex md:min-h-[calc(80vh_-_4rem)]">
      <div className="self-centrer mx-auto w-full space-y-7 text-center md:space-y-10 md:px-10 lg:w-2/3">
        <h2 className="mt-5 text-5xl font-extrabold md:text-6xl">
          Problems with Inventory management?
          <br />
          <span className="mt-5 text-3xl uppercase text-indigo-500 md:text-4xl">
            Just a knock away!
          </span>
        </h2>
        <div className="flex min-w-full justify-center lg:hidden">
          <img
            src="/graphic-tablet.png"
            alt="Graphic Desk"
            className="max-h-96"
          />
        </div>
        <p className="md:text-lg lg:mx-24">
          One-Stop Solution to your inventory management, get Vince Technosoft
          services to help you with your day to day task hassle free.
        </p>
        <ul className="flex w-full justify-between lg:mx-24">
          {highlights.map((item) => (
            <li key={item.label} className="flex items-center">
              <span className="mr-2">{item.icon}</span>
              <span className="sm:text-lg  md:text-xl">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden w-1/3 lg:block">
        <img
          src="/graphic-tablet.png"
          alt="Graphic Desk"
          className="aspect-square max-h-96"
        />
      </div>
    </div>
  );
}

function SoftwareInfo() {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <div className="mx-5 mt-7 flex items-center justify-between md:mt-0 md:flex lg:mx-24">
        <div className="hidden  w-1/2 lg:block">
          <img
            src="/software.png"
            alt="software"
            className="aspect-square max-h-96"
          />
        </div>
        <div className="self-centrer mx-auto w-full space-y-7 text-center md:space-y-10  lg:w-1/2">
          <h3
            id="software"
            className="flex justify-center text-4xl md:text-5xl"
          >
            <Link href={showInfo ? "/#software" : "/#software-info"}>
              <a
                className={buttonClass.text}
                onClick={() => setShowInfo((x) => !x)}
              >
                Software{" "}
                {showInfo ? (
                  <ChevronUp className="ml-5 mt-2" />
                ) : (
                  <ChevronDown className="ml-5 mt-2" />
                )}
              </a>
            </Link>
          </h3>
          <div className="flex min-w-full justify-center lg:hidden">
            <img src="/software.png" alt="software" className="max-h-96" />
          </div>
          <p className="mx-4 mt-5 md:text-lg lg:mx-24">
            What customers see on the Internet is what they expect to be met
            with. Grownited understands the importance of a first impression,
            and the need for it to be a lasting one. Leveraging design and
            technicalities is our specialty, leaving our clients with the best
            UI/UX and compatible websites and applications.
          </p>
        </div>
      </div>
      <div
        id="software-info"
        className={`${
          showInfo ? "grid" : "hidden"
        } mx-5 mt-5 gap-4 lg:mx-24  lg:grid-cols-3`}
      >
        {softwareData.map(({ title, content }, i) => (
          <div className="rounded-lg bg-white shadow-lg" key={i}>
            <div className="flex justify-center rounded-t-lg bg-black px-2 pt-3 pb-1 lg:h-24 xl:h-auto">
              <h3 className="mb-5 text-2xl text-white md:text-3xl">{title}</h3>
            </div>
            <p className="p-4 text-sm text-black first-letter:text-4xl md:text-base">
              {content}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

const socialMedia = [
  { icons: Facebook, link: "https://www.facebook.com/" },
  { icons: Linkedin, link: "https://www.linkedin.com/" },
  { icons: Instagram, link: "https://www.instagram.com/" },
  { icons: Twitter, link: "https://twitter.com/" },
  { icons: Youtube, link: "https://www.youtube.com/" },
];

function ContactUs() {
  return (
    <>
      <h2 className="mt-7 w-full text-center text-5xl">
        Book Free Consultation
      </h2>
      <div className="mx-5 mt-7 grid rounded-2xl shadow-2xl md:grid-cols-2 lg:mx-24">
        <div className="rounded-t-2xl bg-[#00323F] py-9 pl-10 text-white md:rounded-l-2xl md:rounded-tr-none">
          <h4 className="mt-3 text-3xl">Contact Information</h4>
          <p className="mt-1">
            We are here for you in case any query or issue arises. Contact us
            at:
          </p>
          <div className="mt-6 flex space-x-3">
            <Mail className="h-[1.24rem] md:h-5" />
            <span>support@grownited.com</span>
          </div>
          <div className="mt-1 flex space-x-3">
            <PhoneCall className="h-[1.24rem] md:h-5" />
            <span>+91 91733 73578</span>
          </div>
          <h4 className="mt-6 text-3xl">Address</h4>
          <p className="mt-1">* Still looking for a location</p>
          <h4 className="mt-6 text-3xl">Connect With Us</h4>
          <div className="mt-3 mb-5 flex space-x-4 md:space-x-6">
            {socialMedia.map((x, y) => (
              <a rel="noreferrer" target="_blank" key={y} href={x.link}>
                <x.icons className="h-5 md:h-auto" />
              </a>
            ))}
          </div>
        </div>
        <ContactUsForm />
      </div>
    </>
  );
}

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

interface State {
  loading: boolean;
  success?: boolean;
  errorMessage?: JSX.Element;
  error?: {
    fullName: string | null;
    email: string | null;
    phoneNumber: string | null;
    message: string | null;
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

function ContactUsForm() {
  const formData = useRef<FormData>({
    email: "",
    message: "",
    fullName: "",
    phoneNumber: "",
  });
  const [{ loading, error, errorMessage, success }, setState] = useState<State>(
    { loading: false }
  );
  const onChange = useCallback(function ({
    target: { id, value },
  }: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) {
    if (
      id === "email" ||
      id === "fullName" ||
      id === "phoneNumber" ||
      id === "message"
    ) {
      formData.current[id] = value;
    }
  },
  []);
  const onSubmit = useCallback(function (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const error: State["error"] = {
      email: null,
      fullName: null,
      phoneNumber: null,
      message: null,
    };
    const { email, message } = formData.current;
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
    if (!message) {
      error.message = "Message is Required";
    } else if (message.length < 10) {
      error.message = "Elaborate you message a bit";
    }
    if (!fullName) {
      error.fullName = "Name is Required";
    } else {
      const a = fullName.split(" ");
      if (a.length !== 2 || !a[0] || !a[1]) {
        error.fullName = 'Formate: "FirstName<space>LastName"';
      }
    }

    if (Object.values(error).find((x) => typeof x === "string") === undefined) {
      console.log(formData.current);
      setState({ error, loading: true });
      sendData({
        email,
        fullName,
        phoneNumber,
        message,
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
      id="contact-us"
      onSubmit={onSubmit}
      className="rounded-b-2xl bg-white py-5 px-10 md:rounded-r-2xl md:rounded-bl-none"
    >
      {success ? (
        <Message type="success" title="Form Submited Successfully">
          Our team will contact you with in 3 to 5 business day.
          <br /> Till then check out our #Solution, #Tutorials and follow us on
          Other Platforms for new Updates!
        </Message>
      ) : (
        errorMessage
      )}
      <div className={loading ? "opacity-25" : ""}>
        <div>
          <label htmlFor="name">Name</label>
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
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Active Email Address"
            disabled={loading || success}
            required
            className={className.inputErr(error?.email)}
            onChange={onChange}
          />
          {className.err(error?.email)}
        </div>
        <div>
          <label htmlFor="phoneNumber">Contact Number</label>
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
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            disabled={loading || success}
            required
            className={className.inputErr(error?.phoneNumber)}
            placeholder="Message, explaining what you want from Us"
            onChange={onChange}
          />
          {className.err(error?.message)}
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <Button loading={loading} disabled={success} type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
}
let i = 0;

function sendData(data: FormData) {
  return new Promise<void>((resolve, reject) =>
    setTimeout(i++ % 2 ? resolve : reject, 1000)
  );
}
