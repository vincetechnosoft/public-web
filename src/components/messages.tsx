import { useState } from "react";
import { Info, AlertOctagon, AlertTriangle, ThumbsUp } from "react-feather";
interface Props {
  title: React.ReactNode;
  children: React.ReactNode;
  type: keyof typeof className;
  showDismissButton?: boolean;
}

const className = {
  info: {
    main: "p-4 mb-4 bg-blue-100 rounded-lg dark:bg-blue-200",
    title: "text-lg font-medium text-blue-700 dark:text-blue-800",
    content: "mt-2 mb-4 text-sm text-blue-700 dark:text-blue-800",
    button:
      "text-blue-700 bg-transparent border border-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-blue-800 dark:text-blue-800 dark:hover:text-white",
    icon: <Info className="mr-2 h-5 w-5 text-blue-700 dark:text-blue-800" />,
  },
  danger: {
    main: "p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200",
    title: "text-lg font-medium text-red-700 dark:text-red-800",
    content: "mt-2 mb-4 text-sm text-red-700 dark:text-red-800",
    button:
      "text-red-700 bg-transparent border border-red-700 hover:bg-red-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-red-800 dark:text-red-800 dark:hover:text-white",
    icon: (
      <AlertOctagon className="mr-2 h-5 w-5 text-red-700 dark:text-red-800" />
    ),
  },
  success: {
    main: "p-4 mb-4 bg-green-100 rounded-lg dark:bg-green-200",
    title: "text-lg font-medium text-green-700 dark:text-green-800",
    content: "mt-2 mb-4 text-sm text-green-700 dark:text-green-800",
    button:
      "text-green-700 bg-transparent border border-green-700 hover:bg-green-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-green-800 dark:text-green-800 dark:hover:text-white",
    icon: (
      <ThumbsUp className="mr-2 h-5 w-5 text-green-700 dark:text-green-800" />
    ),
  },
  warning: {
    main: "p-4 mb-4 bg-yellow-100 rounded-lg dark:bg-yellow-200",
    title: "text-lg font-medium text-yellow-700 dark:text-yellow-800",
    content: "mt-2 mb-4 text-sm text-yellow-700 dark:text-yellow-800",
    button:
      "text-yellow-700 bg-transparent border border-yellow-700 hover:bg-yellow-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-yellow-800 dark:text-yellow-800 dark:hover:text-white",
    icon: (
      <AlertTriangle className="mr-2 h-5 w-5 text-yellow-700 dark:text-yellow-800" />
    ),
  },
};

function Message(props: Props) {
  const [show, setShow] = useState(true);
  const styles = className[props.type];
  return (
    <div hidden={!show} className={styles.main} role="alert">
      <div className="flex items-center">
        {styles.icon}
        <h3 className={styles.title}>{props.title}</h3>
      </div>
      <div className={styles.content}>{props.children}</div>
      {props.showDismissButton && (
        <div className="flex justify-end">
          <button
            type="button"
            className={styles.button}
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
