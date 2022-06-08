import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.svg';

export default function LogoLink() {
  return (
    <Link href="/">
      <a>
        <Image src={logo} alt="" />
      </a>
    </Link>
  );
}
