import { ContactusContext } from "@/hooks/useContactusLink";
import React, { useCallback, useState } from "react";

function GlobalContext({ children }: { children: React.ReactNode }) {
  const [contactUsCount, setContactUsCount] = useState(0);
  const contactUsCountIncrement = useCallback(
    () => setContactUsCount((x) => x + 1),
    []
  );
  const contactUsCountDecrement = useCallback(
    () => setContactUsCount((x) => x - 1),
    []
  );
  return (
    <ContactusContext.Provider
      value={{
        increment: contactUsCountIncrement,
        count: contactUsCount,
        decrement: contactUsCountDecrement,
      }}
    >
      {children}
    </ContactusContext.Provider>
  );
}
export default GlobalContext;
