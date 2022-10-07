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
                The HeliSwap team is formed by engineers and experts in the field coming from MANTRA
                and LimeChain. We received a grant from the HBAR Foundation to build within the
                Hedera ecosystem. Our devs have been one of the core contributors for Hedera on the
                protocol level.
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
              <h3 className="text-lead text-bold">MANTRA</h3>
              <p className="text-main mt-5">
                MANTRA is a first of its kind, vertically-integrated and regulatory compliant
                blockchain ecosystem. The MANTRA OMniverse encompasses the DAO; MANTRA Nodes: a
                blockchain infrastructure-as-a-service business that includes retail staking,
                institutional delegation, node management, and white-label validator operations;
                MANTRA Chain: a protocol for regulated assets for the Cosmos ecosystem; and MANTRA
                Finance: a globally-regulated DeFi platform that brings the speed and transparency
                of DeFi to the world of traditional finance.
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
            <div className="col-lg-5 d-lg-flex justify-content-end">
              <Image src={logo_limechain} />
            </div>

            <div className="offset-lg-1 col-lg-5 mt-6 mt-lg-0">
              <h3 className="text-lead text-bold">LimeChain</h3>
              <p className="text-main mt-5">
                LimeChain has been working with both start-ups and established enterprises since
                2017 to implement Web3 solutions and build on blockchain networks. Their diverse
                portfolio includes dApp and DeFi development, token and NFT minting, smart contract
                development and Web3 consulting. The blockchain development teams have worked on
                over 150 projects and partnered with notable Web3 players like Hedera Hashgraph and
                Polkadot. The company has a team of Hedera core developers that have worked on the
                implementation of the HTS Service, Scheduled Transactions, Smart Contract Service
                2.0, introduced the HTS Precompile enabling developers to interact with HTS through
                smart contracts. The team is still actively developing the Hedera ecosystem both on
                the network level and the developer tooling projects such as hedera local node,
                hethers and the JSON RPC Relay project.
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
