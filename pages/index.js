import { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/Header';
import Footer from '../components/Footer';
import logo_glass from '../public/logo-glass.png';
import logo_hbar from '../public/logo-hbar.svg';
import logo_halborn from '../public/logo-halborn.png';

import reward from '../public/icons/reward.svg';
import lightning from '../public/icons/lightning.svg';
import consensus from '../public/icons/consensus.svg';
import users from '../public/icons/users.svg';

const validateEmail = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState(false);
  const [inputErrorMessage, setInputErrorMessage] = useState('');
  const [formError, setFormError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formLoading, setFormLoading] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const handleInputChange = e => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleSubmitClick = async () => {
    const formValid = inputValue !== '' && validateEmail(inputValue);
    setInputError(!formValid);
    setInputErrorMessage('Invalid text in input');

    if (!formValid) return;

    setFormLoading(true);
    setFormError(false);
    setErrorMessage('');

    const url = `/api/subscribe`;
    const bodyParams = {
      profiles: [{ email: inputValue }],
    };

    try {
      const response = await axios.post(url, bodyParams);
      const { status, data } = response;
      const { statusText } = data;

      if (status === 200 && statusText === 'OK') {
        setFormSent(true);
        setInputValue('');
      } else {
        setFormError(true);
        setErrorMessage(statusText);
      }
    } catch (e) {
      setFormError(true);
      setErrorMessage(e.message);
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <div>
      <Head>
        <title>HeliSwap.io</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="container-homepage-wrapper">
        <div className="container py-5 py-lg-6">
          <Header />

          <div className="row align-items-center mt-6 mt-lg-15">
            <div className="d-lg-none text-center">
              <Image src={logo_glass} alt="" />
            </div>

            <div className="col-lg-6 col-xl-5 mt-6 mt-lg-0">
              <h1 className="text-hero ">
                Get Ready
                <br />
                for <span className="text-bold"> HeliSwap!</span>
              </h1>

              <p className="text-main mt-5 mt-lg-5">
                The first DEX on the Hedera network supporting swaps between HTS, ERC20s and HBAR.
                Open-sourced, completely trustless and permissionless. Built on the Hedera Smart
                Contract Service with the aim to become the defacto AMM being a public good within
                the network.
              </p>

              <div className="d-md-flex align-items-center mt-7">
                <a href="#subscribe" className="btn btn-outline-primary d-block d-sm-inline-block">
                  Subscribe
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://app.heliswap.io/"
                  className="btn btn-primary ms-sm-4 mt-3 mt-sm-0 d-block d-sm-inline-block"
                >
                  Launch App
                </a>
              </div>

              <div className="d-flex align-items-center mt-6 mt-md-20">
                <a
                  href="https://github.com/LimeChain/HeliSwap-contracts/blob/main/audits/Halborn-august-2022.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image width={96} height={85} src={logo_halborn} />
                </a>
                <div className="d-flex align-items-center ms-5">
                  <p className="text-small me-3 mb-3">Supported by</p>{' '}
                  <a target="_blank" rel="noreferrer" href="https://www.hbarfoundation.org/">
                    <Image className="d-block" src={logo_hbar} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-title text-bold text-center mt-10 mt-xl-35">About HeliSwap</h2>
          <div className="row align-items-center mt-10 mt-xl-20">
            <div className="offset-lg-1 col-lg-5 text-center">
              <Image src={reward} alt="" />
            </div>

            <div className="col-lg-5 mt-6 mt-lg-0">
              <h3 className="text-lead text-bold">Reward your community</h3>
              <p className="text-main mt-5">
                HeliSwap supports customized liquidity mining incentives program for ecosystem
                projects. It allows for projects to launch liquidity mining programs and airdrops
                for their community.
              </p>
            </div>
          </div>

          <div className="row align-items-center mt-10 mt-xl-20">
            <div className="order-lg-2 col-lg-5 text-center">
              <Image src={lightning} alt="" />
            </div>

            <div className="offset-lg-1 order-lg-1 col-lg-5 mt-6 mt-lg-0">
              <h3 className="text-lead text-bold">Lightning fast</h3>
              <p className="text-main mt-5">
                With HeliSwap we are bringing in a lightning fast, affordable and already
                battle-tested AMM to the DeFi space. HeliSwap has some of the lowest fees in the
                industry.
              </p>
            </div>
          </div>

          <div className="row align-items-center mt-10 mt-xl-20">
            <div className="offset-lg-1 col-lg-5 text-center">
              <Image src={users} alt="" />
            </div>

            <div className="col-lg-5 mt-6 mt-lg-0">
              <h3 className="text-lead text-bold">Built for everyone</h3>
              <p className="text-main mt-5">
                We aim to provide a user-friendly experience for all Crypto traders - whether it’s
                DeFi veterans or newcomers to DEXs. In addition, users will have access to useful
                tutorials designed to help them better navigate HeliSwap’s robust capabilities as
                they pursue exciting investment opportunities across the rapidly growing DeFi
                ecosystem.
              </p>
            </div>
          </div>

          <div className="row align-items-center mt-10 mt-xl-20">
            <div className="order-lg-2 col-lg-5 text-center ">
              <Image src={consensus} alt="" />
            </div>

            <div className="offset-lg-1 order-lg-1 col-lg-5 mt-6 mt-lg-0">
              <h3 className="text-lead text-bold">State-of-the-art Proof of Stake</h3>
              <p className="text-main mt-5">
                Having built the platform on Hedera Hashgraph, we’ve been able to take advantage of
                the network’s state-of-the-art Proof of Stake consensus algorithm, which supports
                high throughput, low fees and real-time transaction confirmation. On top of that,
                the energy-efficient algorithm also makes HeliSwap one of the most environmentally
                friendly crypto trading platforms out there.
              </p>
            </div>
          </div>

          <div className="pt-10 mt-xl-20">
            <h2 className="text-mega text-bold text-center">
              HELI Fast, HELI Green, HELI Affordable
            </h2>
          </div>
          <div id="subscribe" className="mt-10 mt-xl-20">
            <div className="row">
              <div className="offset-lg-3 col-lg-6">
                {formSent ? (
                  <div className="alert alert-success mt-5 mt-lg-5" role="alert">
                    <strong>Thanks for your interest!</strong> We are going to keep in touch with
                    you.
                  </div>
                ) : (
                  <>
                    <p className="text-lead text-center text-bold mt-5 mt-lg-5">
                      Subscribe to our latest news
                    </p>

                    <div className="mt-4">
                      <div className="position-relative">
                        <input
                          onChange={handleInputChange}
                          value={inputValue}
                          type="text"
                          className={`form-control with-button ${
                            inputError || formError ? 'is-invalid' : null
                          }`}
                          placeholder="examplemail@mail.com"
                        />
                        {inputError && inputErrorMessage ? (
                          <div className="invalid-feedback">{inputErrorMessage}</div>
                        ) : null}
                        <button
                          disabled={formLoading}
                          onClick={handleSubmitClick}
                          className="btn btn-primary btn-absolute"
                        >
                          Subscribe
                        </button>
                      </div>
                    </div>

                    {formError ? (
                      <div className="alert alert-danger mt-5 mt-lg-5" role="alert">
                        <strong>Something went wrong!</strong> {errorMessage}
                      </div>
                    ) : null}
                  </>
                )}
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
