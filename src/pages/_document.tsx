import { Head, Html, Main, NextScript } from "next/document";
import { AppBody } from "../layout/styles";

function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Roboto:wght@400;700&display=swap" rel="stylesheet"/> 
      </Head>
      <AppBody>
        <Main/>
        <NextScript/>
      </AppBody>
    </Html>
  );
}

export default MyDocument;