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

      <div className="mt-5 mt-md-0">
        <Menu />
      </div>
    </div>
  );
}
