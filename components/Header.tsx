import React, { FC } from 'react';

interface HeaderProps {
  title: string;
  text: string;
}

const Header: FC<HeaderProps> = ({ title, text }) => {
  return (
    <div className="flex justify-center items-center mt-11 text-myblack flex-col text-center">
      <h1 className="text-xl md:text-4xl lg:text-6xl font-serif">{title}</h1>
      <p className="lg:text-xl md:text-lg text-xs text-mygrey font-sans mt-4">
        {text}
      </p>
      <hr className="border border-myblack w-[80%] mt-5" />
    </div>
  );
};

export default Header;
