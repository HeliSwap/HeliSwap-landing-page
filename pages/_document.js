import { Html, Head, Main, Script, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?&family=Poppins:wght@300;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/gtag/js?id=G-S2NXPBLWM2`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
