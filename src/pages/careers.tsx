import HomeLayout from "layouts/home-layout";
import careersData from "@/data/careers";
import Button from "@/components/button";
import {ChangeEvent, useCallback, useState} from "react";
import {NextPage} from "next";
import {AnimatePresence, motion} from "framer-motion";
import CareersForm from "@/components/careers";

const Careers: NextPage = () => {
    const [selectedID, x] = useState(0);
    const setID = useCallback(function (
            e: ChangeEvent<HTMLSelectElement> | number
        ) {
            x(typeof e === "number" ? e : parseInt(e.target.value));
            setTimeout(function () {
                document.getElementById("position")?.scrollIntoView();
            }, 50);
        },
        []);
    const selectedInfo = careersData[selectedID];
    return (
        <HomeLayout>
            <div className="py-7 md:mt-0 md:min-h-[calc(80vh-4rem)]">
                <h2 className="mx-5 text-5xl font-extrabold md:text-6xl lg:mx-24">
                    Careers
                </h2>
                <div className="mx-5 mt-5 sm:hidden">
                    <label className="label" htmlFor="careers">
                        Select DEPARTMENT
                    </label>
                    <select id="careers" className="input mt-2" onChange={setID}>
                        {careersData.map(({serviceName}, id) => (
                            <option value={id} key={serviceName} className="mr-2 mb-2">
                                {serviceName}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mx-5 mt-5 hidden flex-wrap sm:flex lg:mx-24">
                    {careersData.map(({serviceName}, id) => (
                        <Button
                            variant={selectedID === id ? "secondary" : "outline"}
                            disabled={selectedID === id}
                            className="mr-2 mb-2 disabled:bg-base2 disabled:font-semibold"
                            key={id}
                            onClick={() => setID(id)}
                        >
                            {serviceName}
                        </Button>
                    ))}
                </div>
                <div id="position"/>
                <AnimatePresence exitBeforeEnter initial={false}>
                    <CareersInfo key={selectedInfo.id} selectedInfo={selectedInfo}/>
                </AnimatePresence>
                <CareersForm/>
            </div>
        </HomeLayout>
    );
};

const variants = {
    hidden: {opacity: 0, x: -200, y: 0},
    enter: {opacity: 1, x: 0, y: 0},
    exit: {opacity: 0, x: 100, y: 0},
};

export default Careers;

function CareersInfo({
                         selectedInfo,
                     }: {
    selectedInfo: {
        id: number;
        serviceName: string;
        position: string;
        asking: string[];
        bring: string[];
        image: string;
    };
}) {
    return (
        <motion.main
            variants={variants} // Pass the variant object into Framer Motion
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{type: "linear"}} // Set the transition to linear
            className="card m-5 mt-9 rounded-xl py-5 px-10 lg:mx-24"
        >
            <h3 className="text-2xl font-bold">About the position</h3>
            <p className="ml-5 mt-5 md:text-lg">{selectedInfo.position}</p>
            <h2 className="mt-9 text-3xl">What we are asking of you:</h2>
            <ul className="ml-10 mt-5 list-disc md:text-lg">
                {selectedInfo.asking.map((x) => (
                    <li key={x}>{x}</li>
                ))}
            </ul>
            <h2 className="mt-9 text-3xl">What you bring to the table:</h2>
            <ul className="mt-5 ml-10 list-disc md:text-lg">
                {selectedInfo.bring.map((x) => (
                    <li key={x}>{x}</li>
                ))}
            </ul>
            <h3 className="mt-9 text-2xl font-bold">What we offer:</h3>
            <p className="mt-5 ml-5 md:text-lg">
                Be prepared to grow with Vince Techno Soft. Interning with us is in your
                interest as we provide a top-tier holistic experience. Our idea is to
                catalyze and reform one’s concept of professional freedom by placing
                them in our robust new start-up. It’s not just an internship that will
                look good on your resume, but one that will actually help you build
                skills and streamline your interests. We will also provide a certificate
                and a letter of recommendation on the successful completion of your
                Vince Techno Soft Internship. We recognize and furbish your skills to
                your advantage and facilitate your growth alongside ours.
            </p>
        </motion.main>
    );
}
