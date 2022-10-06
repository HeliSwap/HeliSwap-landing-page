import MenuFooter from '../components/MenuFooter';

export default function Footer() {
  return (
    <>
      <hr className="my-6 mt-lg-15" />
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
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
          <a
            href="https://github.com/LimeChain/HeliSwap-contracts"
            target="_blank"
            rel="noreferrer"
            className="icon-social is-github ms-4"
          ></a>
          <a
            href="https://discord.gg/wVrkMwBKsm"
            target="_blank"
            rel="noreferrer"
            className="icon-social is-discord ms-4"
          ></a>
          <a
            href="https://medium.com/@heliswap"
            target="_blank"
            rel="noreferrer"
            className="icon-social is-medium ms-4"
          ></a>
          <a
            href="https://www.youtube.com/channel/UCPYjXlmxIXYmKJ72ajplrfg"
            target="_blank"
            rel="noreferrer"
            className="icon-social is-youtube ms-4"
          ></a>
        </div>
        <MenuFooter />
      </div>
    </>
  );
}
