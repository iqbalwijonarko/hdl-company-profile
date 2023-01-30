import MenuBar from "@/components/MenuBar/MenuBar";
import Footer from "@/components/Footer/Footer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import "./main.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MenuBar></MenuBar>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}
