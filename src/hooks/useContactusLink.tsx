import { createContext, useContext } from "react";
import { UrlObject } from "url";

export const ContactusContext = createContext({
  count: 0,
  increment() {},
  decrement() {},
});

export default function useContactusLink(): UrlObject {
  const contactUs = useContext(ContactusContext);
  return {
    hash: "contact-us",
    pathname: contactUs.count > 0 ? undefined : "/",
  };
}
