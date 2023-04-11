import { Html, Head, Main, NextScript } from "next/document";
import Nav from "../components/nav";

export default function Document() {
  const date = new Date();
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/azj3cpk.css" />
      </Head>
      <body className="relative heroSection">
        <Main />
        <NextScript />
        <footer className="m-auto">
          <p className="pt-3 pb-2 text-sm font-thin text-center border-t border-white">
            {date.getFullYear()} © Kulbir Singh
          </p>
        </footer>
      </body>
    </Html>
  );
}
