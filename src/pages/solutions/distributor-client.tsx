import { NextPage } from "next";
import SolutionData from "data/solutions";
import SolutionInfo from "@/components/solutionInfo";
import HomeLayout from "@/layouts/home-layout";
import ContactUs from "@/components/contact-us";
import ErrorPage from "@/components/error-page";

const PublicAvalableSolution: NextPage = () => {
  const id = "distributor-client";
  const info = Object.values(SolutionData).find((x) => x.id === id);
  if (!info) return <ErrorPage status={404} title="No Such App Available" />;
  return (
    <HomeLayout seoData={info}>
      <SolutionInfo {...info} />
      <ContactUs />
    </HomeLayout>
  );
};

export default PublicAvalableSolution;
