import Button from "./button";
import React, { useCallback, useState } from "react";
import { AndroidIcon } from "./icons";

interface Props {
  id: string;
  title: string;
  description: string;
  capabilities: string[];
  iconPath: string;
}

export type SolutionInfo = Props;

const SolutionInfo: React.FC<Props> = ({
  capabilities,
  description,
  iconPath,
  id,
  title,
}) => {
  return (
    <>
      <div className="typography">
        <div id={id} className="items-center md:flex">
          <img
            src={iconPath}
            alt="distributor"
            className="mr-10 h-24 w-24 rounded-lg ring-1 ring-offset-2"
          />
          <div className="w-full">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
        <h2>Capabilities</h2>
        <ul>
          {capabilities.map((x) => (
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
      leadingIcon={<AndroidIcon className="mr-3" />}
    >
      Download Apk
    </Button>
  );
}
