import { inter, moranga } from "_assets/fonts";
import { ThemeProvider } from "_components/ThemeProvider";
import "_styles/globals.scss";
import "_styles/gridlayout.css";
import cn from "classnames";
import "mapbox-gl/dist/mapbox-gl.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nev Flynn Clone 😁",
  description: "this is just a clone go check the real website",
  authors: [
    { name: "Høussaine Amzil", url: "https://houssaineamzil.vercel.app" },
  ],
  openGraph: {
    title: "Nev Flynn Clone 😁",
    description: "this is just a clone go check the real website",
    url: "https://navflynn-houssaineamzil.vercel.app",
    siteName: "Høussaine Amzil — Creative Developer",
    images: [
      {
        url: "https://navflynn-houssaineamzil.vercel.app/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    type: "website",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={cn(inter.className, moranga.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
          {/* <Analytics /> */}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
