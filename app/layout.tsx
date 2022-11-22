import { ReactNode } from "react";
import { AppBody } from "../src/layout/styles";
import { Baloo_2, Roboto } from "@next/font/google";
import "../src/styles/main.scss";

const baloo = Baloo_2({
  weight: ["700", "800"],
  subsets: ["latin"]
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"]
});

export default function AppLayout({ children }: {
  children: ReactNode
}) {
  return (
    <html className={`${baloo.className} ${roboto.className}`} lang="en">
      <AppBody>
        {children}
      </AppBody>
    </html>
  );
}