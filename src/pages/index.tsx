import HomeLayout from "layouts/home-layout";
import React, { useState } from "react";
import { NextPage } from "next";
import ContactUs from "@/components/contact-us";
import { buttonClass } from "@/components/button";
import Link from "next/link";
import TypingAnimation from "@/components/typeingComponent";
import { AnimatePresence, motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <Starters />
      {/* <YouMightNeed /> */}
      <ContactUs />
    </HomeLayout>
  );
};

export default Home;

// Need to
const typeData = [
  "manage inventory",
  "accept orders",
  "manage payments",
  "calculate profit",
  "create website",
];

function Starters() {
  return (
    <div className="banner-div h-[calc(100vh-4rem)] items-center justify-between bg-banner bg-right-bottom bg-no-repeat px-5 md:flex">
      <div className="space-y-7 md:space-y-10 md:px-10">
        <h2 className="pt-10 text-3xl font-extrabold text-base2 sm:text-4xl md:text-5xl lg:text-6xl">
          Need to
          <TypingAnimation
            style={{ fontSize: "75%" }}
            typeData={typeData}
            className="text-accent1"
          />
        </h2>
        <p className="pb-5 font-mono md:w-[50vw] md:text-lg">
          One-Stop Solution to your inventory management, get Vince Technosoft
          services to help you with your day to day task hassle free.
        </p>
        <Link href={{ hash: "contact-us" }}>
          <a className={buttonClass.filled}>
            Let&apos;s start the conversation
          </a>
        </Link>
      </div>
    </div>
  );
}

const whatWeCanDoSrc = [
  {
    title: "Public Websites",
    component: <>We Make Public Websites</>,
  },
  {
    title: "Integrate with",
    component: (
      <>We Integrate with your existing business modal and equipments</>
    ),
  },
  {
    title: "Manage process",
    component: <>Manage your entire production flow</>,
  },
  {
    title: "Customization",
    component: <>Need additional things? Just a knock away!</>,
  },
];
const variants = {
  hidden: { opacity: 0, y: 200, x: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 100, y: 0 },
};

function YouMightNeed() {
  const [currentDisplay, setDisplay] = useState(0);
  return (
    <div className="base2-page min-h-[101vh] p-5 pt-2 md:px-24">
      <h2 className="pt-10 text-3xl font-extrabold sm:text-4xl md:text-5xl">
        You might need?
      </h2>
      <div className="flex">
        <ul className="mt-5 border-r-2 -border-base2/50 py-3">
          {whatWeCanDoSrc.map(function ({ title }, index) {
            return (
              <li key={title}>
                <button
                  onClick={() => setDisplay(index)}
                  className={`rounded-lg py-1 px-2 underline-offset-1 duration-150 ${
                    currentDisplay === index ? "text-accent1 underline" : ""
                  }`}
                >
                  {title}
                </button>
              </li>
            );
          })}
        </ul>
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.div
            variants={variants} // Pass the variant object into Framer Motion
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: "linear" }} // Set the transition to linear
            className="mt-8 ml-5"
            key={currentDisplay}
          >
            {whatWeCanDoSrc[currentDisplay].component}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
