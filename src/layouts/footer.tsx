import React from "react";
import { Mail, PhoneCall } from "react-feather";
import contactUsData from "@/data/contactUs";
import Link from "next/link";

const actions = [
  { text: "About Us", to: "/about-us" },
  { text: "FAQs", to: "/faq" },
  { text: "Privacy Policy", to: "/privacy-policy" },
  { text: "Contect Us", to: "/#contact-us" },
  { text: "Terms & Conditions", to: "/t&c" },
  { text: "Careers", to: "/careers" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-base2 -text-base2">
      <div className="mx-auto w-full grid-cols-2 justify-between p-5 py-16 md:grid md:py-24 md:px-24 lg:flex">
        <div>
          <div>Logo</div>
          <div className="mt-5 hidden text-left md:block lg:hidden">
            <h4 className="md:text-lg">
              Be a part of the <br />
              Vince Technosoft community.
            </h4>
            <div className="mt-3 mb-5 flex space-x-4 md:space-x-6">
              {contactUsData.socialMedia.map(({ Icon, link }, y) => (
                <a rel="noreferrer" target="_blank" key={y} href={link}>
                  <Icon className="h-5 -stroke-base2-dim md:h-auto" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-20 gap-y-3 md:mt-0">
          {actions.map(({ text, to }) => (
            <Link key={text} href={to}>
              <a className="text-sm">{text}</a>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-left md:mt-0 md:hidden lg:block">
          <h4 className="md:text-lg">
            Be a part of the <br />
            Vince Technosoft community.
          </h4>
          <div className="mt-3 mb-5 flex space-x-4 md:space-x-6">
            {contactUsData.socialMedia.map(({ Icon, link }, y) => (
              <a rel="noreferrer" target="_blank" key={y} href={link}>
                <Icon className="h-5 -stroke-base2-dim md:h-auto" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="text-white border-t-2 py-5 text-center">
        Copyright 2022 © Vince Technosoft. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
