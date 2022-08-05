import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/Header';
import Footer from '../components/Footer';
import bg_about from '../public/bg-about.png';
import logo_mantra from '../public/logo-mantra.svg';
import logo_limechain from '../public/logo-limechain.svg';

export default function About() {
  return (
    <div>
      <Head>
        <title>HeliSwap.io</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="container-about-wrapper">
        <div className="container py-5 py-lg-6">
          <Header />

          <div className="row align-items-center mt-6 mt-lg-15">
            <div className="d-lg-none text-center">
              <Image src={bg_about} alt="" />
            </div>

            <div className="col-lg-6 col-xl-5 mt-6 mt-lg-0">
              <h1 className="text-hero text-bold">About us</h1>

              <p className="text-main mt-5 mt-lg-5">
                HeliSwap is developed by the team behind MANTRA and LimeChain. We are the first &
                only DEX to ever have received the grant from the Hedera Foundation to build within
                the Hedera ecosystem. Our devs have been one of the core contributors for Hedera on
                the protocol level.
              </p>

              <p className="text-main text-bold mt-5 mt-lg-5">
                Our innovative product is being built to deliver a fast and secure platform with the
                simplest &amp; cleanest UI, and the best user experience.
              </p>
            </div>
          </div>

          <h2 className="text-title text-bold text-center mt-7 mt-xl-35">The Teams Behind</h2>

          <div className="row mt-6 mt-lg-15">
            <div className="offset-lg-1 col-lg-5">
              <Image src={logo_mantra} />
            </div>

            <div className="col-lg-5 mt-6 mt-lg-0">
              <h3 className="text-lead text-bold">MANTRA DAO</h3>
              <p className="text-main mt-5">
                MANTRA DAO is a community-governed DeFi ecosystem focusing on cross-chain DeFi
                products. MANTRA DAO has built a suite of DeFi services including a multi-asset
                staking platform, money market lending protocol, gamified rewards pool, and token
                issuance launchpad. The suite is natively built on Ethereum, with cross-chain
                products currently on Binance Smart Chain, Polygon, Solana, Terra, and are currently
                working on launching these services on HECO, Polkadot and our own native MANTRA
                Chain in the near future.
              </p>

              <div className="mt-5 mt-lg-7">
                <a
                  className="btn btn-primary btn-sm d-block d-sm-inline-block"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.mantradao.com/"
                >
                  Visit website
                </a>
              </div>
            </div>
          </div>

          <div className="row mt-8 mt-lg-15">
            <div className="col-lg-5 order-lg-2 d-lg-flex justify-content-end">
              <Image src={logo_limechain} />
            </div>

            <div className="offset-lg-1 col-lg-5 order-lg-1 mt-6 mt-lg-0">
              <h3 className="text-lead text-bold">LimeChain</h3>
              <p className="text-main mt-5">
                Having started as a small boutique solutions company in 2017, LimeChain has since
                become one of the top Blockchain companies in the world, a Web3 innovator counting
                Fortune 500 companies and well-known Web3 startups and builders among its clients.
                We are now a team of over 100 people and we are proud to say that we’ve worked on
                150+ projects, both big and small, having amassed a wealth of Web3 know-how in the
                process. We have a diverse portfolio of services, including dApp and DeFi
                development, token and NFT minting, smart contract development and Web3 consulting.
                Some of our clients include Hedera Hashgraph, Polkadot, The Graph, Universe,
                MantraDAO, Celo, IMVU, P&G, Raiffeisen Bank, and others.
              </p>

              <div className="mt-5 mt-lg-7">
                <a
                  className="btn btn-primary btn-sm d-block d-sm-inline-block "
                  target="_blank"
                  rel="noreferrer"
                  href="https://limechain.tech/"
                >
                  Visit website
                </a>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
