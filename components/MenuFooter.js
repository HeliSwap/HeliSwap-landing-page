import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Menu() {
  const router = useRouter();
  const { route } = router;

  const menuContent = [
    {
      title: 'Terms of use',
      url: '/terms',
    },
  ];

  const currentYear = new Date(Date.now()).getFullYear();

  return (
    <ul className="d-flex justify-content-center justify-content-md-end">
      <li className="ms-4">
        <span>{currentYear} HELISWAP LABS INC</span>
      </li>
      <li className="mx-3">
        <span>|</span>
      </li>
      {menuContent?.map((item, index) => (
        <li className="me-4" key={index}>
          <Link href={item.url}>
            <a className={`link py-3 ${route === item.url ? 'is-active' : null}`}>{item.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
