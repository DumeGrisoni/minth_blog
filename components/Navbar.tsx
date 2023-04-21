import Link from 'next/link';
import Image from 'next/image';
import minthLogo from '../public/minth_logo.png';
import gitLogo from '../public/git_icon.svg';

export default function Navbar() {
  return (
    <nav className="bg-myblack w-full flex justify-between items-center text-mywhite font-sans sticky px-2 md:px-4 lg:px-8 h-[50px] ">
      <Link href="/" className="flex justify-center items-center">
        <Image
          src={minthLogo}
          alt="Logo de l'application"
          height={50}
          width={50}
          className=" md:hidden"
        />
        <p className="font-serif text-xl hover:text-mybluehover transition hidden md:block">
          Minth Blog
        </p>
      </Link>

      <div className="flex justify-between items-center ">
        <Link
          href="/"
          className="hover:text-mybluehover transition px-5 hidden md:block "
        >
          Acceuil
        </Link>
        <Link href="/studio" className="hover:text-mybluehover transition px-5">
          Publier
        </Link>
        <Link href="/about" className="hover:text-mybluehover transition px-5">
          A Propos
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
        <p className="hidden md:block">Github</p>
      </Link>
    </nav>
  );
}
