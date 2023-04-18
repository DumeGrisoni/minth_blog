import Image from 'next/image';
import minthLogo from '../public/minth_logo.png';

const Logo = () => {
  return (
    <div className="flex items-center justify-centerr p-1 ">
      <Image
        src={minthLogo}
        alt="Logo de l'application"
        width={40}
        height={40}
        className="rounded-full mr-2"
      />
      <h2 className="mr-2">Minth Blog</h2>
    </div>
  );
};

export default Logo;
