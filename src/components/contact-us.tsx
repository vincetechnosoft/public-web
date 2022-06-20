import { Mail, PhoneCall } from "react-feather";
import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useRef,
  useState,
} from "react";
import Button from "@/components/button";
import Message from "@/components/messages";
import contactUsData from "@/data/contactUs";

export default function ContactUs({
  inverseStyle,
}: {
  inverseStyle?: boolean;
}) {
  return (
    <div id="contact-us" className="base1-page min-h-[105vh] py-24">
      <h2 className="w-full text-center text-5xl">Book Free Consultation</h2>
      <div className="mx-5 mt-7 grid rounded-2xl shadow-2xl md:grid-cols-2 lg:mx-24">
        <div className="base2-page  rounded-t-2xl p-10 py-9 md:rounded-l-2xl md:rounded-tr-none">
          <h4 className="mt-3 text-3xl">Contact Information</h4>
          <p className="mt-1">
            We are here for you in case any query or issue arises. Contact us
            at:
          </p>
          <div className="mt-6 flex space-x-3">
            <Mail className="h-[1.24rem] md:h-5" />
            <span>{contactUsData.contact.email}</span>
          </div>
          <div className="mt-1 flex space-x-3">
            <PhoneCall className="h-[1.24rem] md:h-5" />
            <span>{contactUsData.contact.phone}</span>
          </div>
          <h4 className="mt-6 text-3xl">Address</h4>
          <p className="mt-1">{contactUsData.address}</p>
          <h4 className="mt-6 text-3xl">Connect With Us</h4>
          <div className="mt-3 mb-5 flex space-x-4 md:space-x-6">
            {contactUsData.socialMedia.map(({ Icon, link }, y) => (
              <a rel="noreferrer" target="_blank" key={y} href={link}>
                <Icon className="h-5 -stroke-base2-dim md:h-auto" />
              </a>
            ))}
          </div>
        </div>
        <ContactUsForm />
      </div>
    </div>
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
  inputErr(err?: string | null) {
    return err
      ? "border-feedback-error"
      : err === null
      ? "border-feedback-success"
      : "";
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
    } else if (message.length < 10 || message.split(" ").length < 10) {
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
      onSubmit={onSubmit}
      className="card rounded-b-2xl py-5 px-10 md:rounded-r-2xl md:rounded-bl-none"
    >
      {success ? (
        <Message
          type="success"
          showDismissButton
          title="Form Submited Successfully"
        >
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
          <p className="text-base italic text-feedback-error duration-150">
            {error?.fullName}
          </p>
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
          <p className="text-base italic text-feedback-error duration-150">
            {error?.email}
          </p>
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
          <p className="text-base italic text-feedback-error duration-150">
            {error?.phoneNumber}
          </p>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            disabled={loading || success}
            required
            className={className.inputErr(error?.message)}
            placeholder="Message, explaining what you want from Us"
            onChange={onChange}
          />
          <p className="text-base italic text-feedback-error duration-150">
            {error?.message}
          </p>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
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

function sendData(data: FormData) {
  return new Promise<void>((resolve, reject) =>
    setTimeout(i++ % 2 ? resolve : reject, 1000)
  );
}