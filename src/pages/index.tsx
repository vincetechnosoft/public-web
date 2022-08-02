import HomeLayout from "layouts/home-layout";
import React from "react";
import {NextPage} from "next";
import ContactUs from "@/components/contact-us";
import {buttonClass} from "@/components/button";
import Link from "next/link";
import TypingAnimation from "@/components/typeingComponent";

const Home: NextPage = () => {
    return (
        <HomeLayout>
            <Starters/>
            <ContactUs/>
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
        <div
            className="banner-div h-[calc(100vh-4rem)] items-center justify-between bg-banner bg-right-bottom bg-no-repeat px-5 md:flex">
            <div className="space-y-7 md:space-y-10 md:px-10">
                <h2 className="pt-10 text-3xl font-extrabold text-base2 sm:text-4xl md:text-5xl lg:text-6xl">
                    {/* Problems with Inventory management? */}
                    Need to
                    <TypingAnimation
                        style={{fontSize: "75%"}}
                        typeData={typeData}
                        className="text-accent1"
                    />
                    {/* <br />
          <span className="mt-5  text-xl uppercase text-accent1 sm:text-2xl md:text-4xl">
            Just a knock away!
          </span> */}
                </h2>
                <p className="pb-5 font-mono md:w-[50vw] md:text-lg">
                    One-Stop Solution to your inventory management, get Vince Technosoft
                    services to help you with your day to day task hassle free.
                </p>
                <Link href={{hash: "contact-us"}}>
                    <a className={buttonClass.filled}>
                        Let&apos;s start the conversation
                    </a>
                </Link>
            </div>
        </div>
    );
}
