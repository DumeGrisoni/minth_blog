import React, { FC } from 'react';

interface HeaderProps {
  title: string;
  text: string;
}

const Header: FC<HeaderProps> = ({ title, text }) => {
  return (
    <div className="flex justify-center items-center mt-11 text-myblack flex-col">
      <h1 className="text-6xl font-serif">{title}</h1>
      <p className="text-lg text-mygrey font-sans">{text}</p>
      <hr className="border border-myblack w-[50%] mt-5" />
    </div>
  );
};

export default Header;
