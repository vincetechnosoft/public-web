import HomeLayout from "layouts/home-layout";
import { Zap, Clock, Map } from "react-feather";
import React from "react";
import { NextPage } from "next";
import ContactUs from "@/components/contact-us";
import { buttonClass } from "@/components/button";
import Link from "next/link";

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
    <div className="banner-div h-[calc(100vh-5rem-5px)] items-center justify-between bg-banner bg-right-bottom bg-no-repeat px-5 md:flex md:h-[calc(100vh-4rem)]">
      <div className="space-y-7 md:space-y-10 md:px-10">
        <h2 className="mt-5 text-3xl font-extrabold text-base2 sm:text-4xl md:text-5xl lg:text-6xl">
          Problems with Inventory management?
          <br />
          <span className="mt-5  text-xl uppercase text-accent1 sm:text-2xl md:text-4xl">
            Just a knock away!
          </span>
        </h2>
        <div className="flex min-w-full justify-center lg:hidden" />
        <p className="pb-5 font-mono md:w-[50vw] md:text-lg">
          One-Stop Solution to your inventory management, get Vince Technosoft
          services to help you with your day to day task hassle free.
        </p>
        <Link href="/#contact-us">
          <a className={buttonClass.filled}>
            Let&apos;s start the conversation
          </a>
        </Link>
      </div>
    </div>
  );
}
