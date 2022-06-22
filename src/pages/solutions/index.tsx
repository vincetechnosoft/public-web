import HomeLayout from "@/layouts/home-layout";
import { NextPage } from "next";
import { distributor, distributorClient } from "data/solutions";
import Link from "next/link";
import { Link as LinkIcon } from "react-feather";
import ContactUs from "@/components/contact-us";
import Button from "@/components/button";

const Solutions: NextPage = () => {
  return (
    <HomeLayout>
      <div id="distributors-solution" />
      <div className="min-h-[100vh] py-10">
        <h1 className="mx-5 mb-10 flex items-center text-4xl underline-offset-2 hover:underline md:mx-24">
          <LinkIcon className="mr-3" />
          <Link href="/solutions#distributors-solution">
            <a>Distributor's Solution</a>
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
      <ContactUs />
    </HomeLayout>
  );
};

export default Solutions;
