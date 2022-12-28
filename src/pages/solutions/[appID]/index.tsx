import { NextPage } from "next";
import SolutionData from "data/solutions";
import SolutionInfo from "@/components/solutionInfo";
import HomeLayout from "@/layouts/home-layout";
import ContactUs from "@/components/contact-us";
import { useRouter } from "next/router";
import getTutorial from "@/data/tutorials";
import Tutorial from "@/components/tutorial";
import ErrorPage from "@/components/error-page";

const PublicAvalableSolution: NextPage = () => {
  const route = useRouter();
  const id = route.query.appID;
  const info = Object.values(SolutionData).find((x) => x.id === id);
  if (!info) return <ErrorPage status={404} title="No Such App Available" />;
  const tutorial = getTutorial(info.id);
  return (
    <HomeLayout seoData={info}>
      <SolutionInfo {...info} />
      <ContactUs />
      {tutorial && <Tutorial data={tutorial} />}
    </HomeLayout>
  );
};

export default PublicAvalableSolution;
