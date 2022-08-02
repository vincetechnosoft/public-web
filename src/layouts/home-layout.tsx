import React from "react";
import {motion} from "framer-motion";
import SeoLinks, {SeoLinksProps} from "@/components/seo";

interface Props {
    children?: React.ReactNode;
    className?: string;
    seoData?: SeoLinksProps;
}

const variants = {
    left: {opacity: 0, x: -200, y: 0},
    right: {opacity: 0, x: 200, y: 0},
    stay: {opacity: 1, x: 0, y: 0},
    top: {opacity: 0, x: 0, y: -200},
    bottom: {opacity: 0, x: 0, y: 200},
};

const HomeLayout: React.FC<Props> = ({children, className, seoData}) => {
    return (
        <>
            <SeoLinks {...(seoData)} />
            <motion.main
                variants={variants}
                initial="left"
                animate="stay"
                exit="right"
                transition={{type: "just"}}
                className={`max-w-7x mx-auto min-h-screen min-w-full ${className}`}
            >
                {children}
            </motion.main>
        </>
    );
};

export default HomeLayout;
