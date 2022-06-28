import { NextPage } from "next";
import { distributorClient } from "data/solutions";
import SolutionInfo from "@/components/solutionInfo";
import HomeLayout from "@/layouts/home-layout";
import ContactUs from "@/components/contact-us";

const Solution: NextPage = () => {
  return (
    <HomeLayout>
      <SolutionInfo {...distributorClient} />
      <ContactUs />
    </HomeLayout>
  );
};

export default Solution;
