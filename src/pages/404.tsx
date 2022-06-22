import HomeLayout from "@/layouts/home-layout";
import { NextPage } from "next";

const Page404: NextPage = () => {
  return (
    <HomeLayout level={-1}>
      <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center">
        <h1 className="mr-4 border-r-2 pr-4 text-4xl">404</h1>
        <p>No Such Page Avalable</p>
      </div>
    </HomeLayout>
  );
};

export default Page404;
