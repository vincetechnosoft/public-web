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
        <p className="font-mono md:text-lg lg:mx-24">
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
