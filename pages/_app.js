import '../styles/styles.scss';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
             window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date()); gtag('config', 'G-S2NXPBLWM2');
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
