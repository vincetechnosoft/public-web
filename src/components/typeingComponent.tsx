import { AnimatePresence, motion } from "framer-motion";
import { CSSProperties, useEffect, useState } from "react";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  typeData: string[];
}

export default function TypeingAnimation({ typeData, ...props }: Props) {
  const [{ cursor }, setCursor] = useState({ cursor: true, trueCount: 1 });
  const [{ type }, setType] = useState({
    type: "",
    currentIndex: 0,
    directionWrite: false,
    done: 0,
  });
  useEffect(
    function () {
      const cursorInterval = setInterval(function () {
        setCursor(function ({ cursor, trueCount }) {
          if (cursor) {
            if (trueCount++ < 3) {
              return { cursor: false, trueCount: 0 };
            }
            return { cursor, trueCount };
          }
          return { cursor: true, trueCount: 1 };
        });
      }, 500);
      const typeInterval = setInterval(function () {
        setType(function ({ currentIndex, type, directionWrite, done }) {
          const text = typeData[currentIndex];
          if (type === text) {
            if (directionWrite) {
              return { currentIndex, directionWrite: false, type, done: 1 };
            } else if (done++ < 4) {
              return {
                currentIndex,
                directionWrite,
                type,
                done,
              };
            }
          }
          if (directionWrite) {
            return {
              currentIndex,
              directionWrite,
              type: text.substring(0, type.length + 1),
              done,
            };
          }
          if (type) {
            return {
              currentIndex,
              directionWrite,
              type: text.substring(0, type.length - 1),
              done,
            };
          }
          currentIndex++;
          return {
            currentIndex: typeData.length === currentIndex ? 0 : currentIndex,
            type,
            directionWrite: true,
            length,
            done,
          };
        });
      }, 230);
      return function () {
        clearInterval(cursorInterval);
        clearInterval(typeInterval);
      };
    },
    [typeData]
  );
  return (
    <span {...props}>
      {" "}
      {type}
      <AnimatePresence exitBeforeEnter initial={false} presenceAffectsLayout>
        {cursor && (
          <motion.span
            initial={{ opacity: "0%" }}
            animate={{ opacity: "100%" }}
            exit={{ opacity: "0%" }}
            transition={{ type: "just" }}
            className="mr-[8px] inline-block w-2 border-r-2"
            style={{ fontSize: "115%" }}
          >
            <span className="opacity-0">|</span>
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
