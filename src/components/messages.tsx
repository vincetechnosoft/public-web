import { useState } from "react";
import { Info, AlertOctagon, AlertTriangle, ThumbsUp } from "react-feather";

interface Props {
  title?: React.ReactNode;
  children?: React.ReactNode;
  type?: keyof typeof Icons;
  showDismissButton?: boolean;
}

const Icons = {
  danger: AlertOctagon,
  success: ThumbsUp,
  warning: AlertTriangle,
};

function Message(props: Props) {
  const [show, setShow] = useState(true);
  const Icon = Icons[props.type!] ?? Info;
  return (
    <div
      hidden={!show}
      className={
        "mb-4 rounded-lg bg-message-bg px-2 py-1 text-message-text  md:p-4 " +
        props.type
      }
      role="alert"
    >
      {props.title && (
        <div className="flex items-baseline">
          <Icon className="mr-2 h-5 w-5" />
          <h3 className="text-lg font-medium">{props.title}</h3>
        </div>
      )}
      {props.children && (
        <div className="mt-2 mb-4 text-sm">{props.children}</div>
      )}
      {props.showDismissButton && (
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-transparent rounded-lg border border-message-text px-3 py-1.5 text-center text-xs font-medium hover:bg-message-hover-button hover:text-message-hover-button-text focus:outline-none focus:ring-4 focus:ring-message-focus-ring"
            aria-label="Close"
            onClick={() => setShow(false)}
          >
            Dismiss
          </button>
        </div>
      )}
    </div>
  );
}

export default Message;
