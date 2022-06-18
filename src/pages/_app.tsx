import Footer from "@/layouts/footer";
import Navbar from "@/layouts/navbar";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;
