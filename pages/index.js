import { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import LogoLink from '../components/Logo';
import logo_glass from '../public/logo-glass.png';

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
      <div className="container-homepage-wrapper">
        <div className="container py-5 py-lg-6">
          <LogoLink />

          <div className="row align-items-center mt-6 mt-lg-15">
            <div className="d-lg-none text-center">
              <Image src={logo_glass} alt="" />
            </div>

            <div className="col-lg-6 col-xl-5 mt-6 mt-lg-0">
              <h1 className="text-hero ">
                Get Ready
                <br />
                for <span className="text-bold"> Heliswap!</span>
              </h1>

              <p className="text-main text-slate mt-5 mt-lg-5">
                The first DEX on the Hedera network supporting swaps between HTS, ERC20s and HBAR.
                Completely trustless and permissionless. Built on the Hedera Smart Contract Service.
              </p>

              {formSent ? (
                <div className="alert alert-success mt-5 mt-lg-5" role="alert">
                  <strong>Thanks for your interest!</strong> We are going to keep in touch with you.
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
                        className={`form-control with-button ${
                          inputError || formError ? 'is-invalid' : null
                        }`}
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

                  {formError ? (
                    <div className="alert alert-danger mt-5 mt-lg-5" role="alert">
                      <strong>Something went wrong!</strong> {errorMessage}
                    </div>
                  ) : null}
                </>
              )}

              <div className="d-flex mt-6 mt-lg-15">
                <a
                  href="https://twitter.com/heliswap_dex"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-social is-twitter"
                ></a>
                <a
                  href="https://t.me/heliswap"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-social is-telegram ms-4"
                ></a>
              </div>

              <div className="text-small mt-6 mt-lg-15">
                <Link href="/terms">
                  <a className="link">Terms of use</a>
                </Link>
                {/* <span className="mx-2">|</span>
                <Link href="privacy">
                  <a className="link">Privacy Policy</a>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
