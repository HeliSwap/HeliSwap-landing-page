import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import LogoLink from '../components/Logo';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState(false);
  const [formError, setFormError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formLoading, setFormLoading] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const handleInputChange = e => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleSubmitClick = () => {
    const formValid = inputValue !== '';
    setInputError(!formValid);

    if (!formValid) return;

    setFormLoading(true);
    setFormError(false);

    setTimeout(() => {
      setFormLoading(false);
      setInputValue('');
      setFormSent(true);
    }, 1000);
  };

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

      <div className="container-homepage-wrapper">
        <div className="container py-5 py-lg-6">
          <LogoLink />

          <div className="row align-items-center mt-6 mt-lg-15">
            <div className="col-lg-6 col-xl-5 mt-6 mt-lg-0">
              <h1 className="text-hero ">
                Get Ready
                <br />
                for <span className="text-bold"> Heliswap!</span>
              </h1>

              <p className="text-main text-slate mt-5 mt-lg-5">
                The first DEX for the Hedera ecosystem supporting cross-chain swaps between the
                Hedera and Ethereum ecosystems.
              </p>

              {formSent ? (
                <div className="alert alert-success mt-5 mt-lg-5" role="alert">
                  <strong>Holy guacamole!</strong> Thanks for your interest!.
                </div>
              ) : (
                <>
                  <p className="text-lead text-bold mt-5 mt-lg-5">Get notified when we launch</p>

                  <div className="mt-4">
                    <div className="position-relative">
                      <input
                        onChange={handleInputChange}
                        value={inputValue}
                        type="text"
                        className={`form-control with-button ${inputError ? 'is-invalid' : null}`}
                        placeholder="examplemail@mail.com"
                      />
                      <button
                        disabled={formLoading}
                        onClick={handleSubmitClick}
                        className="btn btn-primary btn-absolute"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </>
              )}

              <div className="d-flex mt-6 mt-lg-15">
                <a href="#" className="icon-social is-twitter"></a>
                <a href="#" className="icon-social is-telegram ms-4"></a>
              </div>

              <div className="text-small mt-6 mt-lg-15">
                <Link href="terms">
                  <a className="link">Terms of use</a>
                </Link>
                <span className="mx-2">|</span>
                <Link href="privacy">
                  <a className="link">Privacy Policy</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
