import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { useEffect } from "react";

import "../styles/globals.css";
import { pageview } from "../util/analytics";

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <AnimatePresence>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
