import LogoLink from '../components/Logo';
import Menu from '../components/Menu';

export default function Header() {
  return (
    <div className="d-md-flex justify-content-md-between align-items-center">
      <div className="d-flex align-items-center">
        <LogoLink />
      </div>

      <div className="d-flex justify-content-between justify-content-md-end align-items-center mt-5 mt-md-0">
        <Menu />

        <span className="d-none d-md-block separator-menu"></span>

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
