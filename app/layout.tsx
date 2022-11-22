import { ReactNode } from "react";
import { AppBody } from "../src/layout/styles";
import { Baloo_2, Roboto } from "@next/font/google";
import "../src/styles/main.scss";

const baloo = Baloo_2({
  weight: ["700", "800"],
  subsets: ["latin"],
  variable: "--baloo-font"
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--roboto-font"
});

export default function AppLayout({ children }: {
  children: ReactNode
}) {
  return (
    <html className={`${baloo.variable} ${roboto.variable}`} lang="en">
      <AppBody>
        {children}
      </AppBody>
    </html>
  );
}