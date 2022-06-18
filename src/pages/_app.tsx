import Navbar from "@/components/navbar";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="scroll-smooth bg-stone-100">
      <Navbar />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
