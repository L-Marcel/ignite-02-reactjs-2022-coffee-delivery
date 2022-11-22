import { ReactNode } from "react";
import { AppBody } from "../src/layout/styles";
import "../src/styles/main.css";
import { Inter } from "@next/font/google";

const inter = Inter();


export default function AppLayout({ children }: {
  children: ReactNode
}) {
  return (
    <html className={inter.className} lang="en">
      <AppBody>
        {children}
      </AppBody>
    </html>
  );
}