import LogoLink from '../components/Logo';
import Menu from '../components/Menu';

export default function Header({ pageTitle }) {
  return (
    <div className="d-md-flex justify-content-lg-between align-items-center">
      <div className="d-flex align-items-center">
        <LogoLink />
        <div className="container-header-page-title">
          <span className="text-main text-uppercase">{pageTitle}</span>{' '}
        </div>
      </div>

      <div className="d-flex justify-content-end align-items-center mt-5 mt-md-0">
        <Menu />

        <span className="separator-menu"></span>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://app.heliswap.io/"
          className="btn btn-primary btn-sm"
        >
          Launch App
        </a>
      </div>
    </div>
  );
}
