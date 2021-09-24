import "../styles/globals.css";
import type { NextComponentType } from "next";
import { useRouter } from "next/router";
import posthog from "posthog-js";
import { useEffect } from "react";

function App({
  Component,
  pageProps,
}: {
  Component: NextComponentType;
  pageProps: any;
}) {
  const router = useRouter();

  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_API_KEY as string, {
      api_host: "https://app.posthog.com",
    });

    const handleRouteChange = () => posthog.capture("$pageview");
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default App;
