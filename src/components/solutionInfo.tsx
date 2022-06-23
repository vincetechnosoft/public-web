import Button from "./button";
import { Download } from "react-feather";
import { useCallback, useState } from "react";
import { AndroudIcon } from "./icons";

interface Props {
  id: string;
  title: string;
  discription: string;
  capabalities: string[];
  iconPath: string;
}

export type SolutionInfo = Props;

const SolutionInfo: React.FC<Props> = ({
  capabalities,
  discription,
  iconPath,
  id,
  title,
}) => {
  return (
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
  );
};

export default SolutionInfo;

let getUrl: ((id: string) => Promise<string>) | undefined;

function DownloadAndroidApk({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);
  const onClick = useCallback(
    async function () {
      setLoading(true);
      try {
        getUrl ??= (await import("data/firebase")).default;
        const url = await getUrl(id);
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
