import "styles/globals.css";
import { EnhancedApp } from "types";

function MyApp({ Component, pageProps }: EnhancedApp) {
  const getLayout = Component.getLayout || ((page) => page);
  return <>{getLayout(<Component {...pageProps} />)}</>;
}

export default MyApp;
