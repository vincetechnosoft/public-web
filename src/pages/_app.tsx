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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
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
