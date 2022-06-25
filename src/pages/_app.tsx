import Footer from "@/layouts/footer";
import Navbar from "@/layouts/navbar";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  return (
    <>
      <div className="base1-page">
        <Navbar />
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          presenceAffectsLayout
          onExitComplete={() => {
            const [, id] = route.asPath.split("#");
            console.log(id);
            if (id) {
              setTimeout(
                () => document.getElementById(id)?.scrollIntoView(),
                10
              );
            } else {
              window.scrollTo(0, 0);
            }
          }}
        >
          <Component {...pageProps} key={route.pathname} />
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
