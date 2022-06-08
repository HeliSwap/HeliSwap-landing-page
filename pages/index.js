import Head from 'next/head';
import Image from 'next/image';

import logo from '../public/logo.svg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>HeliSwap Landing page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Poppins:wght@300;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <div className="container py-5 py-lg-6">
        <div className="row">
          <div className="col-lg-6">
            <a href="#">
              <Image src={logo} alt="" />
            </a>

            <h1 className="text-hero mt-6 mt-lg-15">
              Get Ready
              <br />
              for <span className="text-bold"> Heliswap!</span>
            </h1>

            <p className="text-main text-slate mt-5 mt-lg-5">
              The first DEX for the Hedera ecosystem supporting cross-chain swaps between the Hedera
              and Ethereum ecosystems.
            </p>

            <p className="text-lead text-bold mt-5 mt-lg-5">Get notified when we launch</p>

            <div className="mt-4">
              <div className="position-relative">
                <input type="text" className="form-control with-button" />
                <button className="btn btn-primary btn-absolute">Subscribe</button>
              </div>

              <div className="d-flex mt-6 mt-lg-15">
                <a href="#" className="icon-social is-twitter"></a>
                <a href="#" className="icon-social is-telegram ms-4"></a>
              </div>

              <div className="text-small mt-6 mt-lg-15">
                <a href="#" className="link">
                  Terms of use
                </a>
                <span className="mx-2">|</span>
                <a href="#" className="link">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
