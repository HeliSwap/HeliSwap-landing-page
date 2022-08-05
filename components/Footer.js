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
            href="https://docs.gitbook.io"
            target="_blank"
            rel="noreferrer"
            className="icon-social is-github ms-4"
          ></a>
        </div>
        <MenuFooter />
      </div>
    </>
  );
}
