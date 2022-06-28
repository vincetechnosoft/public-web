import Button from "./button";
import { useCallback, useState } from "react";
import { AndroudIcon } from "./icons";
import Head from "next/head";
import SeoLinks from "./seo";
import { useRouter } from "next/router";

interface Props {
  id: string;
  title: string;
  discription: string;
  capabalities: string[];
  iconPath: string;
  poster: string;
}

export type SolutionInfo = Props;

const SolutionInfo: React.FC<Props> = ({
  capabalities,
  discription,
  iconPath,
  id,
  title,
  poster,
}) => {
  const pathName = useRouter().pathname;
  return (
    <>
      <Head>
        <SeoLinks
          title={title}
          discription={discription}
          urlPath={pathName}
          withTitle
          poster={poster}
        />
      </Head>
      <div className="typography">
        <div id={id} className="items-center md:flex">
          <img
            src={iconPath}
            alt="distributor"
            className="mr-10 h-24 w-24 rounded-lg ring-1 ring-offset-2"
          />
          <div className="w-full">
            <h1>{title}</h1>
            <p>{discription}</p>
          </div>
        </div>
        <h2>Capabalities</h2>
        <ul>
          {capabalities.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
        <div className="my-10 flex justify-end">
          <DownloadAndroidApk id={id} />
        </div>
      </div>
    </>
  );
};

export default SolutionInfo;

function DownloadAndroidApk({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);
  const onClick = useCallback(
    async function () {
      setLoading(true);
      try {
        const url = await (await import("data/firebase")).getDownloadUrl(id);
        window.open(url);
      } catch {}
      setLoading(false);
    },
    [id]
  );
  return (
    <Button
      onClick={onClick}
      loading={loading}
      leadingIcon={<AndroudIcon className="mr-3" />}
    >
      Download Apk
    </Button>
  );
}
