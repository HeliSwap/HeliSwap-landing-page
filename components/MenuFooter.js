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
    // {
    //   title: 'Privacy Policy',
    //   url: '/privacy',
    // },
  ];

  return (
    <ul className="d-flex">
      {menuContent?.map((item, index) => (
        <li className="mx-4" key={index}>
          <Link href={item.url}>
            <a className={`link py-3 ${route === item.url ? 'is-active' : null}`}>{item.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
