import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const moranga = localFont({
  src: [
    {
      path: "./Moranga.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--moranga",
});
