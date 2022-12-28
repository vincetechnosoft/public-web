import HomeLayout from "@/layouts/home-layout";
import { NextPage } from "next";

const ErrorPage: NextPage<{ status: number; title: string }> = (props) => {
  return (
    <HomeLayout>
      <div className="relative h-[calc(100vh-4rem)]">
        <div className="absolute bottom-1/2 right-1/2 flex translate-x-1/2 translate-y-1/2 transform items-center">
          <h1 className="mr-4 border-r-2 pr-4 text-4xl">{props.status}</h1>
          <p>{props.title}</p>
        </div>
      </div>
    </HomeLayout>
  );
};

export default ErrorPage;
