import { AnimatePresence, motion } from "framer-motion";
import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  MouseEvent,
} from "react";

const modalContext = createContext({
  open(Component: React.ReactNode) {},
  close() {},
});

export function useModal() {
  return useContext(modalContext);
}

export default function ApplyModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const [component, setModal] = useState<React.ReactNode>();
  useEffect(
    function () {
      const html = document.getElementsByTagName("html").item(0);
      if (!html) return;
      if (component) {
        html.style.overflowY = "hidden";
      } else {
        html.style.overflowY = "auto";
      }
    },
    [component]
  );
  return (
    <modalContext.Provider
      value={{
        open(Component) {
          setModal(Component);
        },
        close() {
          setModal(undefined);
        },
      }}
    >
      <div className="relative">
        {children}
        <AnimatePresence exitBeforeEnter initial={false} presenceAffectsLayout>
          {component && (
            <>
              <div
                onClick={() => setModal(undefined)}
                className="fixed top-0 left-0 z-[3] h-screen w-screen bg-base2 opacity-70"
              />
              <motion.div
                initial={{ y: "100vh" }}
                exit={{ y: "-100vh" }}
                animate={{ y: "0vh" }}
                className="fixed top-0 left-0 z-[4]"
              >
                {component}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </modalContext.Provider>
  );
}
