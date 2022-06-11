import HomeLayout from "layouts/home-layout";
import { NextPageWithLayout } from "types";

const Home: NextPageWithLayout = () => {
  return <div>Home Page.</div>;
};

Home.getLayout = (page) => <HomeLayout>{page}</HomeLayout>;

export default Home;
