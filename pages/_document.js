import { Html, Head, Main, NextScript } from 'next/document';

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

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-S2NXPBLWM2"></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-S2NXPBLWM2');
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
