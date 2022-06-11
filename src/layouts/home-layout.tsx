import React from "react";
import Navbar from "components/navbar";

interface Props {
  children: React.ReactNode;
}

const HomeLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="mx-auto min-h-screen min-w-full max-w-7xl bg-stone-100">
      <Navbar />
      {children}
    </div>
  );
};

export default HomeLayout;
