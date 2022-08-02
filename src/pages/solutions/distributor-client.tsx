import {NextPage} from "next";
import {distributorClient} from "data/solutions";
import SolutionInfo from "@/components/solutionInfo";
import HomeLayout from "@/layouts/home-layout";
import ContactUs from "@/components/contact-us";

const DistributorClientSolution: NextPage = () => {
    return (
        <HomeLayout seoData={distributorClient}>
            <SolutionInfo {...distributorClient} />
            <ContactUs/>
        </HomeLayout>
    );
};

export default DistributorClientSolution;
