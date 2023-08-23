import React from 'react';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';

const InstgramImag = ({ socialImg }) => {
  return (
    <div className="relative w-400 h-400">
      <Image src={socialImg} alt="/" className="object-cover h-full" />
      <div className="absolute top-0 right-0 bottom-0 left-0 hover:bg-black/50 items-center justify-center flex group">
        <p className="text-gray-300 hidden group-hover:block">
          {' '}
          <FaInstagram size={30} />{' '}
        </p>
      </div>
    </div>
  );
};

export default InstgramImag;
