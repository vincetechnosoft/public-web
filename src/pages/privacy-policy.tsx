import HomeLayout from "layouts/home-layout";
import { NextPage } from "next";
import React from "react";
import data from "data/privacy-policy";

const AboutUs: NextPage = () => {
  return (
    <HomeLayout>
      <div className="py-7 md:mt-0">
        <h2 className="mx-5 text-5xl font-extrabold md:text-6xl lg:mx-24">
          Privacy Policy
        </h2>
        <div className="typography">
          <p>Last updated 10/10/21</p>
          {data.map(({ title, content, list }, i) => (
            <React.Fragment key={i}>
              <h1>{title}</h1>
              <p>
                {content.map((x, i) => (
                  <span key={i}>
                    {typeof x === "string"
                      ? x
                      : x.map((y, i) =>
                          i % 2 ? (
                            <b className="underline underline-offset-1" key={i}>
                              {y}
                            </b>
                          ) : (
                            <React.Fragment key={i}>
                              {" " + y + " "}
                            </React.Fragment>
                          )
                        )}
                    <br />
                    <br />
                  </span>
                ))}
              </p>
              {list && (
                <>
                  <ul className="mb-10">
                    {list.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </HomeLayout>
  );
};

export default AboutUs;
