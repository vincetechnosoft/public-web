import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Link as LinkIcon, Video, X } from "react-feather";
import { buttonClass } from "./button";
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
  videoLink?: string;
}

export type TutorialData = Props["data"];

const Tutorial: React.FC<Props> = ({ data }) => {
  return (
    <div className="typography mt-10 mb-10">
      <h1>Tutorial</h1>
      {data.map((x) => (
        <TutorialStep {...x} key={x.id} />
      ))}
    </div>
  );
};

function TutorialStep({
  discription,
  id,
  steps,
  title,
  note,
  videoLink,
}: TutorialStepData) {
  return (
    <>
      <div id={id} />
      <div>
        <div className="items-baseline sm:flex">
          <Link href={`#${id}`}>
            <h2 className="mr-5 flex items-baseline">
              <LinkIcon className="mr-5 cursor-pointer" />
              {title}
            </h2>
          </Link>
          <VideoButton id={id} src={videoLink} />
        </div>
        <p className="font-semibold">{discription}</p>
        {note && <Message>{note}</Message>}
        {steps && (
          <ol>
            {steps.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ol>
        )}
      </div>
    </>
  );
}

function VideoButton({ src, id }: { src?: string; id: string }) {
  const [openVideo, setVideo] = useState(false);
  useEffect(
    function () {
      const html = document.getElementsByTagName("html").item(0);
      if (!html) return;
      if (openVideo) {
        html.style.overflowY = "hidden";
      } else {
        html.style.overflowY = "auto";
      }
    },
    [openVideo]
  );
  if (!src) return null;
  const videoID = id + "-video";
  return (
    <div>
      <motion.div
        animate={
          openVideo
            ? { width: "100vw", height: "105vh" }
            : { width: "0", height: 0 }
        }
        className={`base2-page ${
          openVideo ? "" : ""
        } absolute left-0 z-10 block -translate-y-14 bg-opacity-80`}
        transition={{ type: "linear" }} // Set the transition to linear
      >
        <div id={videoID} className="mt-10" />
        <X
          onClick={() => setVideo(false)}
          className="absolute top-14 right-5 z-20 cursor-pointer"
        />
        {openVideo && (
          <video src={src} controls autoPlay className="m-auto h-full w-auto" />
        )}
      </motion.div>
      <Link href={"#" + videoID}>
        <motion.button
          onClick={() => {
            setVideo(true);
          }}
          className={
            "relative flex cursor-pointer items-center " + buttonClass.secondery
          }
          whileHover={{ width: 165 }}
          whileFocus={{ width: 165 }}
        >
          <Video />
          <span
            className="absolute left-16 text-base1"
            style={{
              overflow: "hidden",
              textOverflow: "clip",
              whiteSpace: "nowrap",
            }}
          >
            See Video
          </span>
        </motion.button>
      </Link>
    </div>
  );
}

export default Tutorial;
