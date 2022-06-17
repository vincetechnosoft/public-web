import React from "react";
import Button from "./button";
import Link from "next/link";
import { Send, Menu, X } from "react-feather";

const links = [
  {
    path: "/tutorials",
    label: "Tutorials",
  },
  {
    path: "/solutions",
    label: "Solutions",
  },
  {
    path: "/about-us",
    label: "About Us",
  },
  {
    path: "/careers",
    label: "Careers",
  },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className="mx-auto flex h-16 w-full items-center justify-between px-16 md:max-w-7xl">
      <div className="flex w-2/3 md:w-auto md:justify-center">
        <Link href="/" passHref>
          <a className="focus:text-rose-500 focus:outline-none">Logo</a>
        </Link>
      </div>
      <div className="hidden items-center justify-between md:flex">
        <ul className="mr-7 space-x-6 md:flex">
          {links.map((link) => (
            <li key={link.path}>
              <Link href={link.path} passHref>
                <a className="focus:text-rose-500 focus:outline-none">
                  {link.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="justify-center md:flex">
          <Button leadingIcon={<Send className="mr-2 h-[17px] w-auto" />}>
            Contact Us
          </Button>
        </div>
      </div>
      <button className="block md:hidden" onClick={() => setOpen((x) => !x)}>
        {open ? <X className="h-6 w-auto" /> : <Menu className="h-6 w-auto" />}
      </button>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="absolute top-0 left-0 z-[5] block min-h-[100vh] w-[100vw] bg-slate-500 opacity-95 md:hidden"
        />
      )}
      <div
        className={`absolute left-[0] top-0 z-10 block h-full ${
          open ? "translate-x-0" : "-translate-x-96"
        } bg-stone-200 transition-all duration-300 md:hidden`}
      >
        {links.map((link) => (
          <Link href={link.path} key={link.path} passHref>
            <a className="ml-5 mr-32 mt-5 block">{link.label}</a>
          </Link>
        ))}
        <div className="mt-5 pr-10">
          <Button
            className="ml-5"
            leadingIcon={<Send className="mr-2 h-[18px] w-auto" />}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
