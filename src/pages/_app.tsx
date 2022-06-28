import ApplyModal from "@/components/modal";
import Footer from "@/layouts/footer";
import Navbar from "@/layouts/navbar";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  return (
    <>
      <Head>
        <title>
          Mobile App Development Company | Custom Web Design & Development
          Services | Vince Technosoft
        </title>
      </Head>
      <div className="base1-page">
        <ApplyModal>
          <Navbar />
          <AnimatePresence
            exitBeforeEnter
            initial={false}
            presenceAffectsLayout
            onExitComplete={() => {
              const [, id] = route.asPath.split("#");
              if (id) {
                setTimeout(
                  () => document.getElementById(id)?.scrollIntoView(),
                  50
                );
              } else {
                window.scrollTo(0, 0);
              }
            }}
          >
            <Component {...pageProps} key={route.pathname} />
          </AnimatePresence>
          <Footer />
        </ApplyModal>
      </div>
    </>
  );
}

export default MyApp;
