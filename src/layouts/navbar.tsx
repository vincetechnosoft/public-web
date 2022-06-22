import React, { useEffect, useRef, useState } from "react";
import { buttonClass } from "../components/button";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { Send, Menu } from "react-feather";

const links = [
  {
    path: "/solutions",
    label: "Solutions",
  },
  {
    path: "/careers",
    label: "Careers",
  },
  {
    path: "/about-us",
    label: "About Us",
  },
];

function getContactUsLink({ pathname }: NextRouter) {
  if (["/solutions", "/distributor"].includes(pathname))
    return pathname + "#contact-us";
  return "/#contact-us";
}

const Navbar: React.FC = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const contactUsLink = getContactUsLink(router);
  useEffect(
    function () {
      const html = document.getElementsByTagName("html").item(0);
      if (!html) return;
      if (open) {
        html.style.overflowY = "hidden";
      } else {
        html.style.overflowY = "auto";
      }
    },
    [open]
  );
  return (
    <>
      <div id="nev" />
      <nav className="base2-page">
        <div className="mx-auto flex h-16 w-full items-center justify-between px-8 md:max-w-7xl">
          <div className="flex w-2/3 md:w-auto md:justify-center">
            <Link href="/" passHref>
              <a className="focus:underline focus:underline-offset-2 focus:outline-none">
                Logo
              </a>
            </Link>
          </div>
          <div className="hidden items-center justify-between md:flex">
            <ul className="mr-7 space-x-6 md:flex">
              {links.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} passHref>
                    <a
                      className={`${
                        router.pathname.startsWith(link.path) &&
                        "underline underline-offset-2"
                      } focus:outline-none`}
                    >
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="justify-center md:flex">
              <Link href={contactUsLink}>
                <a className={buttonClass.filled + " flex items-center"}>
                  <Send className="mr-2 h-[17px] w-auto" />
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
          <button className="block md:hidden" onClick={() => setOpen(true)}>
            <Link href="#nev" passHref>
              <Menu className="h-6 w-auto" />
            </Link>
          </button>
        </div>
        <div
          onClick={() => setOpen(false)}
          className={`${
            open ? "absolute" : "hidden"
          } top-0 left-0 z-[5] block h-full w-full bg-base2 opacity-90 md:hidden`}
        />
        <div
          className={`absolute left-[0] top-0 z-10 block h-full ${
            open ? "translate-x-0" : "-translate-x-96"
          } overflow-auto bg-drawer -text-drawer duration-300 md:hidden`}
        >
          <div className="my-10 ml-10">
            <Link href="/" passHref>
              <a
                onClick={() => setOpen(false)}
                className="focus:underline focus:underline-offset-2 focus:outline-none"
              >
                Logo
              </a>
            </Link>
          </div>
          {links.map((link) => (
            <Link href={link.path} key={link.path} passHref>
              <a
                onClick={() => setOpen(false)}
                className={`${
                  router.pathname.startsWith(link.path) &&
                  "underline underline-offset-2"
                } ml-5 mr-32 mt-5 block focus:outline-none`}
              >
                {link.label}
              </a>
            </Link>
          ))}
          <div className="mt-5 ml-4 pr-10">
            <Link href={contactUsLink}>
              <a
                onClick={() => setOpen(false)}
                className={buttonClass.filled + " flex items-center"}
              >
                <Send className="mr-2 h-[17px] w-auto" />
                Contact Us
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
