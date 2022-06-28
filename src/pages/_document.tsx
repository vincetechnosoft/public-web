import SeoLinks from "@/components/seo";
import Document, { Html, Head, Main, NextScript } from "next/document";
const data = {
  posterPath: "/compney_poster.png",
  title:
    "Mobile App Development Company | Custom Web Design & Development Services | Vince Technosoft",
  discription:
    "One-Stop Solution to your inventory management, get Vince Technosoft services to help you with your day to day task hassle free.",
};

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <SeoLinks {...data} />
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
