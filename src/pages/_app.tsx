import Footer from "@/layouts/footer";
import Navbar from "@/layouts/navbar";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter().pathname;
  return (
    <>
      <div className="base1-page">
        <Navbar />
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} key={route} />
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
