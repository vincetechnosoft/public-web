import {motion} from "framer-motion";
import Link from "next/link";
import React from "react";
import {Link as LinkIcon, Video, X} from "react-feather";
import {buttonClass} from "./button";
import Message from "./messages";
import {useModal} from "./modal";

interface Props {
    data: TutorialStepData[];
}

interface TutorialStepData {
    title: string;
    description: string;
    note?: string;
    steps: string[];
    id: string;
    videoLink?: string;
}

export type TutorialData = Props["data"];

const Tutorial: React.FC<Props> = ({data}) => {
    return (
        <div className="typography mt-10 mb-10">
            <h1>Tutorial</h1>
            {data.map((x) => (
                <TutorialStep {...x} key={x.id}/>
            ))}
        </div>
    );
};

function TutorialStep({
                          description,
                          id,
                          steps,
                          title,
                          note,
                          videoLink,
                      }: TutorialStepData) {
    return (
        <>
            <div id={id}/>
            <div>
                <div className="items-baseline sm:flex">
                    <Link href={{hash: id}}>
                        <h2 className="mr-5 flex items-baseline">
                            <LinkIcon className="mr-5 cursor-pointer"/>
                            {title}
                        </h2>
                    </Link>
                    <VideoButton src={videoLink}/>
                </div>
                <p className="font-semibold">{description}</p>
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

function VideoButton({src}: { src?: string }) {
    const modal = useModal();
    if (!src) return null;
    return (
        <div>
            <motion.button
                onClick={() => {
                    modal.open(<VideoModalComponent src={src}/>);
                    // setVideo(true);
                }}
                className={
                    "relative flex cursor-pointer items-center " + buttonClass.secondary
                }
                whileHover={{width: 165}}
                whileFocus={{width: 165}}
            >
                <Video/>
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
        </div>
    );
}

function VideoModalComponent({src}: { src: string }) {
    const modal = useModal();
    return (
        <div className="flex w-screen justify-center">
            <X
                onClick={modal.close}
                className="absolute top-5 right-5 z-20 cursor-pointer"
            />
            <video src={src} controls autoPlay className=" h-[95vh] w-auto"/>
        </div>
    );
}

export default Tutorial;
