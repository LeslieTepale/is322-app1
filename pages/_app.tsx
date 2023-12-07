import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import 'typeface-poppins';
import 'tailwindcss/tailwind.css';
import { SunIcon } from '@heroicons/react/24/outline';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
      <link
          rel="icon"
          href={`data:image/svg+xml,${encodeURIComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">${SunIcon}</svg>`
          )}`}
        />        <title>plantpal</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
