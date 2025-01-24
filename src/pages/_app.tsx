import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (<div className="relative">
    <div className="stars"></div>
    <Component {...pageProps} />
  </div>);
}

