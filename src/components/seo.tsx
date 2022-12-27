import { useRouter } from "next/router";
import Head from "next/head";

interface Props {
  title?: string;
  description?: string;
  posterPath?: string;
}

const defaultProps = {
  posterPath: "/company_poster.png",
  title:
    "Mobile App Development Company | Custom Web Design & Development Services",
  description:
    "One-Stop Solution to your inventory management, get Vince Technosoft services to help you with your day to day task hassle free.",
};

const _url = "https://public-web-9f3.pages.dev/"; //"https://vincetechnosoft.com/";

export type SeoLinksProps = Props;

export default function SeoLinks(data: Props) {
  const pathName = useRouter()?.pathname;
  const title = (data.title ?? defaultProps.title) + " | Vince Technosoft";
  const url = (_url + (pathName ?? "")).replaceAll("//", "/");
  const image = (
    _url + (data.posterPath ?? defaultProps.posterPath)
  ).replaceAll("//", "/");
  const description = data.description ?? defaultProps.description;
  return (
    <Head>
      <title>{title}</title>
      {/* Primary Meta Tags */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}
