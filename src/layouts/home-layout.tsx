import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
const HomeLayout: React.FC<Props> = ({ children }) => {
  return (
    <motion.main
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: "linear" }} // Set the transition to linear
      className="max-w-7x mx-auto min-h-screen min-w-full"
    >
      {children}
    </motion.main>
  );
};

export default HomeLayout;
