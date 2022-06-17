import HomeLayout from "layouts/home-layout";
import { NextPageWithLayout } from "types";

const AboutUs: NextPageWithLayout = () => {
  return (
    <div className="py-7 md:mt-0 md:min-h-[calc(80vh_-_4rem)]">
      <h2 className="mx-5 text-5xl font-extrabold md:mx-24 md:text-6xl">
        About Us
      </h2>
      <CompneyInfo />
      <FounderInfo />
    </div>
  );
};

AboutUs.getLayout = (page) => <HomeLayout>{page}</HomeLayout>;

export default AboutUs;
function CompneyInfo() {
  return (
    <p className="mx-5 mt-5 text-lg md:mx-24 md:text-2xl">
      Vince Techno Soft Provides Business Software Solutions which are
      customized and generic to render and solve the extensive mundane problems
      related to inventory management.
      <span className="mt-3 block md:mt-6" />
      Here at Vince Technosoft we also provide Software Solutions.
      <span className="mt-3 block md:mt-6" />
      What customers see on the Internet is what they expect to be met with.
      Vince understands the importance of a first impression, and the need for
      it to be a lasting one.
      <span className="mt-3 block md:mt-6" />
      Leveraging design and technicalities is our specialty, leaving our clients
      with the best UI/UX and compatible websites and applications.
    </p>
  );
}

function FounderInfo() {
  return (
    <div className="mx-5 mt-10 bg-[#00323F] p-5 pt-0 md:mx-24 md:flex">
      <img
        className="h-[320px] w-auto -translate-y-3 md:h-[calc(100vw_/_5)]  md:-translate-x-9"
        src="/panth.jpeg"
      />
      <div className="mt-5">
        <h3 className="text-5xl font-bold text-white">Panth Patel</h3>
        <h4 className="mt-3 text-3xl text-white">Founder / CEO</h4>
        <p className="mt-9 text-lg text-white  md:text-xl">
          Panth is a bold and assertive leader who is a visionary in
          technological field and always finds ways to solve day-to-day problems
          through software’s, Panth has a great interest in business and aims to
          uplift India’s Technology Industry through his experience and beliefs.
        </p>
      </div>
    </div>
  );
}
