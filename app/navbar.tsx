import Link from 'next/link';
import Image from 'next/image';
import minthLogo from '../public/minth_logo.png';
import gitLogo from '../public/git_icon.svg';

export default function Navbar() {
  return (
    <nav className="bg-myblack px-10 w-full flex justify-between items-center text-mywhite font-sans sticky ">
      <Link href="/">
        <Image
          src={minthLogo}
          alt="Logo de l'application"
          height={50}
          width={50}
        />
      </Link>

      <div className="flex justify-between items-center">
        <Link href="/" className="hover:text-mybluehover transition px-5">
          Acceuil
        </Link>
        <Link href="/about" className="hover:text-mybluehover transition px-5">
          Publier
        </Link>
      </div>

      <Link
        href="/"
        className="flex items-center hover:text-mybluehover transition "
      >
        <Image
          src={gitLogo}
          height={30}
          width={30}
          alt="Logo de Github"
          className="mr-2"
        />
        <p>Github</p>
      </Link>
    </nav>
  );
}
