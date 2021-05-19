import "../styles/globals.css";

import type { NextComponentType } from "next";

function App({ Component, pageProps }: { Component: NextComponentType; pageProps: any }) {
  return <Component {...pageProps} />;
}

export default App;
