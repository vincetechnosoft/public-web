interface Props {
  title: string;
  discription: string;
  poster: string;
  urlPath?: string;
  withTitle?: boolean;
}
const url = "https://public-web-9f3.pages.dev/"; //"https://vincetechnosoft.com/";

export default function SeoLinks(data: Props) {
  const title = data.title + " | Vince Technosoft";
  return (
    <>
      {data.withTitle && <title>{title}</title>}
      {/* Primary Meta Tags */}
      <meta name="title" content={title} />
      <meta name="description" content={data.discription} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url + (data.urlPath ?? "")} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={data.discription} />
      <meta property="og:image" content={data.poster} />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url + (data.urlPath ?? "")} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={data.discription} />
      <meta property="twitter:image" content={data.poster} />
    </>
  );
}
