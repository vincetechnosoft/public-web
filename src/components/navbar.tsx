import React from "react";
import Button from "./button";
import Link from "next/link";
import { Send, LogIn } from "react-feather";

const links = [
  {
    path: "/careers",
    label: "Careers",
  },
  {
    path: "/about-us",
    label: "About Us",
  },
  {
    path: "/solutions",
    label: "Solutions",
  },
  {
    path: "/tutorials",
    label: "Tutorials",
  },
];

const Navbar: React.FC = () => {
  const [load, setLoad] = React.useState(false);
  return (
    <nav className="flex h-16 w-full items-center justify-around px-7">
      <div className="w-40">
        <Link href="/" passHref>
          <a>Logo</a>
        </Link>
      </div>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.path}>
            <Link href={link.path} passHref>
              <a>{link.label}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex w-64 justify-between">
        <Button variant="outline" leadingIcon={<LogIn className="mr-2 h-[20px] w-auto" />}>
          Log In
        </Button>
        <Button
          loading={load}
          onClick={() => setLoad((x) => !x)}
          leadingIcon={<Send className="mr-2 h-[17px] w-auto" />}
        >
          Contact Us
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
