import HomeLayout from "layouts/home-layout";
import { Zap, Clock, Map } from "react-feather";
import React from "react";
import { NextPage } from "next";
import ContactUs from "@/components/contact-us";

const highlights = [
  {
    icon: (
      <Map className="h-[26px] w-auto fill-accent1 -stroke-accent1 stroke-1" />
    ),
    label: "India Based",
  },
  {
    icon: <Clock className="h-7 w-auto fill-accent1 -stroke-accent1" />,
    label: "Zero Downtime",
  },
  {
    icon: <Zap className="h-6 w-auto fill-accent1 text-accent1" />,
    label: "Super Fast",
  },
];

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <Starters />
      <SoftwareInfo />
      <ContactUs />
    </HomeLayout>
  );
};

export default Home;

function Starters() {
  return (
    <div className="mx-5 mb-12 flex min-h-[95vh] items-center justify-between md:mb-24 md:flex">
      <div className="self-centrer mx-auto w-full space-y-7 text-center md:space-y-10 md:px-10 lg:w-2/3">
        <h2 className="mt-5 text-5xl font-extrabold lg:text-6xl">
          Problems with Inventory management?
          <br />
          <span className="mt-5 text-3xl uppercase text-accent1 md:text-4xl">
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
        <ul className="flex w-full justify-between lg:mx-24 lg:pr-24">
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
const softwareData = [
  {
    title: "Web Development",
    content:
      "Using UI/UX designed by our designing team, or provided by the clients, we develop websites that are highly secured and developed using the best coding practices. The end-result is a product that is responsive and easy-to-use, which gives quality and affordability. An SEO friendly, scalable, and secure website is Vince Technosoft’s assurance.",
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

function SoftwareInfo() {
  return (
    <div className="base2-page min-h-[105vh] py-24">
      <div className="mx-5 flex items-center justify-between md:mt-0 md:flex lg:mx-24">
        <div className="hidden w-1/2 lg:block">
          <img
            src="/software.png"
            alt="software"
            className="aspect-square max-h-96"
          />
        </div>
        <div className="self-centrer mx-auto w-full space-y-7 text-center md:space-y-10  lg:w-1/2">
          <h3 className="flex justify-center text-4xl md:text-5xl">Software</h3>
          <div className="flex min-w-full justify-center lg:hidden">
            <img src="/software.png" alt="software" className="max-h-96" />
          </div>
          <p className="mx-4 mt-5 md:text-lg lg:mx-24">
            What customers see on the Internet is what they expect to be met
            with. Vince Technosoft understands the importance of a first
            impression, and the need for it to be a lasting one. Leveraging
            design and technicalities is our specialty, leaving our clients with
            the best UI/UX and compatible websites and applications.
          </p>
        </div>
      </div>
      <div className="mx-5 mt-5 grid gap-4 lg:mx-24 lg:grid-cols-3">
        {softwareData.map(({ title, content }, i) => (
          <div className="card" key={i}>
            <div className="flex justify-center rounded-t-lg bg-accent2 px-2 pt-3 pb-1 -text-accent2 lg:h-24 xl:h-auto">
              <h3 className="mb-5 text-2xl md:text-3xl">{title}</h3>
            </div>
            <div className="">
              <p className="p-4 text-sm first-letter:text-4xl md:text-base">
                {content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
