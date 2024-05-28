import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { Quicksand } from "next/font/google";

const poppins_init = Quicksand({
  subsets: ["latin"],
  variable: "--var-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider className={poppins_init.variable}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
