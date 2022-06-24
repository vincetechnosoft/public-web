import HomeLayout from "@/layouts/home-layout";
import { NextPage } from "next";
import { distributor, distributorClient } from "data/solutions";
import Link from "next/link";
import { Link as LinkIcon } from "react-feather";
import ContactUs from "@/components/contact-us";
import Button from "@/components/button";
import { useState } from "react";
import { motion } from "framer-motion";

const Solutions: NextPage = () => {
  return (
    <HomeLayout>
      <div id="distributors-solution" />
      <div className="min-h-[100vh] py-10">
        <h1 className="mx-5 mb-10 flex items-center text-4xl underline-offset-2 hover:underline md:mx-24">
          <LinkIcon className="mr-3" />
          <Link href="/solutions#distributors-solution">
            <a>Distributor&apos;s Solution</a>
          </Link>
        </h1>
        <div className="mx-5 lg:mx-10">
          {[distributor, distributorClient].map(
            ({ capabalities, discription, iconPath, id, title }, i) => (
              <Link key={i} href={"/" + id}>
                <div id={id} className="clickable-card relative mb-10 sm:flex">
                  <img
                    src={iconPath}
                    alt={title}
                    className="h-52 w-52 rounded-lg rounded-l-lg p-2 outline outline-1"
                  />
                  <div className="p-5 md:w-72 lg:w-96">
                    <h3 className="mb-5 border-b pb-2 text-2xl font-bold underline-offset-1 sm:border-b-0 sm:underline md:w-72">
                      {title}
                    </h3>
                    <p className="mb-7 text-lg">{discription}</p>
                  </div>
                  <div className="ml-5 hidden p-5 md:block">
                    <h4 className="mb-5 border-b pb-2 text-2xl font-semibold">
                      Capabalities
                    </h4>
                    <ul className="ml-10 mt-5 list-disc">
                      {capabalities.slice(0, 3).map((x, i) => (
                        <li key={i} className="text-clip">
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="absolute bottom-2 right-5">
                    <Button variant="outline">See More</Button>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
      <SoftwareInfo />
      <ContactUs />
    </HomeLayout>
  );
};

export default Solutions;
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
  const [show, setShow] = useState(false);
  return (
    <div className="base2-page py-10">
      <div className="px-5 md:flex md:px-24">
        <div className=" md:w-[55vw]">
          <img
            src="/software.png"
            alt="codeing image"
            className="mb-5 h-52 w-auto rounded-lg rounded-l-lg p-2 outline outline-1"
          />
          <h3 className="mb-5 border-b pb-2 text-2xl font-bold underline-offset-1  md:w-72">
            Software Services
          </h3>
          <p className="mb-7 text-lg">
            What customers see on the Internet is what they expect to be met
            with. Vince Technosoft understands the importance of a first
            impression, and the need for it to be a lasting one. Leveraging
            design and technicalities is our specialty, leaving our clients with
            the best UI/UX and compatible websites and applications.
          </p>
        </div>
        <div className="md:ml-5">
          <h4 className="mb-5 border-b pb-2 text-2xl font-semibold">
            Capabalities
          </h4>
          <ul className="ml-10 mt-5 list-disc">
            {softwareData.map((x, i) => (
              <li key={i} className="text-clip">
                {x.title}
              </li>
            ))}
          </ul>
          <div className="flex justify-end pt-10">
            <Button variant="outline" onClick={() => setShow((x) => !x)}>
              {show ? "See Less" : "See More"}
            </Button>
          </div>
        </div>
      </div>
      <motion.div
        animate={show ? { height: "100%" } : { height: "0px" }}
        className="mx-5 mt-5 grid gap-4 overflow-hidden lg:mx-24 lg:grid-cols-3"
      >
        {softwareData.map(({ title, content }, i) => (
          <div key={i} className="card">
            <div className="flex justify-center rounded-t-lg bg-accent2 px-2 pt-3 pb-1 -text-accent2 lg:h-24 xl:h-auto">
              <h3 className="mb-5 text-2xl md:text-3xl">{title}</h3>
            </div>
            <p className="p-4 text-sm first-letter:text-4xl md:text-base">
              {content}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
