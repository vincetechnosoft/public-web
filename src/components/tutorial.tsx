import Link from "next/link";
import { useState } from "react";
import { Link2, Link as LinkIcon } from "react-feather";
import Message from "./messages";

interface Props {
  data: TutorialStepData[];
}

interface TutorialStepData {
  title: string;
  discription: string;
  note?: string;
  steps: string[];
  id: string;
}

export type TutorialData = Props["data"];

const Tutorial: React.FC<Props> = ({ data }) => {
  return (
    <div className="typography mt-10 mb-10">
      <h1>Tutorial</h1>
      {data.map(TutorialStep)}
    </div>
  );
};

function TutorialStep({
  discription,
  id,
  steps,
  title,
  note,
}: TutorialStepData) {
  const [stepIndex, setStepIndex] = useState(0);
  return (
    <>
      <div id={id} />
      <h2 className="flex items-center first:hidden">
        <Link href={`#${id}`}>
          <LinkIcon className="mr-5 cursor-pointer" />
        </Link>
        {title}
      </h2>
      <p className="font-semibold">{discription}</p>
      {note && <Message>{note}</Message>}
      {steps && (
        <ol>
          {steps.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ol>
      )}
    </>
  );
}

export default Tutorial;
