import HomeLayout from "@/layouts/home-layout";
import { NextPage } from "next";

const Page404: NextPage = () => {
  return (
    <HomeLayout>
      <div className="relative h-[calc(100vh-4rem)]">
        <div className="absolute bottom-1/2 right-1/2 flex translate-x-1/2 translate-y-1/2 transform items-center">
          <h1 className="mr-4 border-r-2 pr-4 text-4xl">404</h1>
          <p>No Such Page Avalable</p>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Page404;
