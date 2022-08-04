import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Menu() {
  const router = useRouter();
  const { route } = router;

  const menuContent = [
    {
      title: 'About',
      url: '/about',
      isExternal: false,
    },
    {
      title: 'Docs',
      url: 'https://heliswap.gitbook.io/',
      isExternal: true,
    },
  ];

  return (
    <ul className="d-flex">
      {menuContent?.map((item, index) => (
        <li className="ms-4" key={index}>
          {item.isExternal ? (
            <a className="link-menu" target="_blank" rel="noreferrer" href={item.url}>
              {item.title}
            </a>
          ) : (
            <Link href={item.url}>
              <a className={`link-menu ${route === item.url ? 'is-active' : null}`}>{item.title}</a>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
