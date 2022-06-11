import HomeLayout from "layouts/home-layout";
import { NextPageWithLayout } from "types";
import { Zap, Clock, Map } from "react-feather";

const highlights = [
  {
    icon: <Map className="h-[26px] w-auto fill-indigo-400 stroke-white stroke-1" />,
    label: "India Based",
  },
  {
    icon: <Clock className="h-7 w-auto fill-indigo-400 stroke-white" />,
    label: "Zero Downtime",
  },
  {
    icon: <Zap className="h-6 w-auto fill-indigo-400 text-indigo-400" />,
    label: "Super Fast",
  },
];

const Home: NextPageWithLayout = () => {
  return (
    <>
      <div className="mt-7 flex items-center justify-between px-5 md:mt-0 md:flex md:min-h-[calc(80vh_-_4rem)]">
        <div className="self-centrer mx-auto w-full space-y-7 text-center md:space-y-10 md:px-10 lg:w-2/3">
          <h2 className="mt-5 text-5xl font-extrabold md:text-6xl">
            Supercharge your app development.
          </h2>
          <div className="flex min-w-full justify-center lg:hidden">
            <img src="/graphic-tablet.png" alt="Graphic Desk" className="max-h-96" />
          </div>
          <p className="md:px-24">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at voluptatem sequi labore
            nulla omnis quis ea, quidem debitis quisquam deleniti veritatis molestias itaque ipsa
            nostrum esse repellendus illo magni.
          </p>
          <ul className="flex w-full justify-between md:px-24">
            {highlights.map((item) => (
              <li key={item.label} className="flex items-center">
                <span className="mr-2">{item.icon}</span>
                <span className="text-lg  md:text-xl">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden w-1/3 lg:block">
          <img src="/graphic-tablet.png" alt="Graphic Desk" className="aspect-square max-h-96" />
        </div>
      </div>
    </>
  );
};

Home.getLayout = (page) => <HomeLayout>{page}</HomeLayout>;

export default Home;
