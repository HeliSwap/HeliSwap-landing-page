import { Html, Head, Main, Script, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="First DEX on the Hedera network to support HTS, ERC20 and HBAR tokens."
        ></meta>
        <meta property="og:url" content="https://www.heliswap.io/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="heliswap.io" />
        <meta
          property="og:description"
          content="First DEX on the Hedera network to support HTS, ERC20 and HBAR tokens."
        />
        <meta property="og:image" content="https://heliswap.io/HeliSwap_og-image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="heliswap.io" />
        <meta property="twitter:url" content="https://www.heliswap.io/" />
        <meta name="twitter:title" content="heliswap.io" />
        <meta
          name="twitter:description"
          content="First DEX on the Hedera network to support HTS, ERC20 and HBAR tokens."
        />
        <meta name="twitter:image" content="https://heliswap.io/HeliSwap_og-image.png" />

        <link rel="canonical" href="https://heliswap.io" />
        <link rel="shortcut icon" href="/logo-small.svg" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?&family=Poppins:wght@300;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
