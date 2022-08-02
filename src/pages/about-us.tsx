import HomeLayout from "layouts/home-layout";
import {NextPage} from "next";

const AboutUs: NextPage = () => {
    return (
        <HomeLayout>
            <div className="py-7 md:mt-0">
                <h2 className="mx-5 text-5xl font-extrabold md:text-6xl lg:mx-24">
                    About Us
                </h2>
                <CompanyInfo/>
                <FounderInfo/>
            </div>
        </HomeLayout>
    );
};

export default AboutUs;

function CompanyInfo() {
    return (
        <p className="mx-5 mt-5 text-lg md:text-2xl lg:mx-24">
            Vince Techno Soft Provides Business Software Solutions which are
            customized and generic to render and solve the extensive mundane problems
            related to inventory management.
            <span className="mt-3 block md:mt-6"/>
            Here at Vince Technosoft we also provide Software Solutions.
            <span className="mt-3 block md:mt-6"/>
            What customers see on the Internet is what they expect to be met with.
            Vince understands the importance of a first impression, and the need for
            it to be a lasting one.
            <span className="mt-3 block md:mt-6"/>
            Leveraging design and technicalities is our specialty, leaving our clients
            with the best UI/UX and compatible websites and applications.
        </p>
    );
}

function FounderInfo() {
    return (
        <div className="base2-page mx-5 mt-10 p-5 pt-0 md:flex lg:mx-24">
            <img
                className="h-[320px] w-auto -translate-y-3 md:h-[calc(100vw_/_5)] md:-translate-x-9"
                src="/panth.jpeg"
                alt="Panth Patel"
            />
            <div className="mt-5">
                <h3 className="text-5xl font-bold">Panth Patel</h3>
                <h4 className="mt-3 text-3xl">Founder / CEO</h4>
                <p className="mt-9 text-lg  md:text-xl">
                    Panth is a bold and assertive leader who is a visionary in
                    technological field and always finds ways to solve day-to-day problems
                    through software’s, Panth has a great interest in business and aims to
                    uplift India’s Technology Industry through his experience and beliefs.
                </p>
            </div>
        </div>
    );
}
