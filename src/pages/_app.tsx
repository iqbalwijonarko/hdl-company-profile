import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MenuBar from "@/components/MenuBar/MenuBar";

import "./main.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MenuBar></MenuBar>
      <Component {...pageProps} />
    </>
  )
}
