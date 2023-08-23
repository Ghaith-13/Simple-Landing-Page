import React from 'react';
import Image from 'next/image';

import img1 from '../public/photo1.jpg';
import img2 from '../public/photo2.jpg';
import img3 from '../public/photo3.jpg';
import img4 from '../public/photo4.jpg';
import img5 from '../public/photo5.jpg';

function Portofolio() {
  return (
    <div className="max-w-[1240px] mx-auto py-15 text-center">
      <h1 className="font-bold text-2xl p-4">Travels Photos</h1>
      <div className="grid grid-rows-none md:grid-cols-5 md:gap-4 p-4 ">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
          <Image
            src={img1}
            alt="/"
            className="w-677 h-full"
            layout="responsive"
          />
        </div>

        <div className="w-full h-full">
          <Image src={img2} alt="/" className="w-215 h-full object-cover" />
        </div>

        <div className="w-full h-full">
          <Image
            src={img3}
            alt="/"
            className="w-215 h-full object-cover"
            layout="responsive"
          />
        </div>

        <div className="w-full h-full">
          <Image
            src={img4}
            alt="/"
            className="w-215 h-full object-cover"
            layout="responsive"
          />
        </div>

        <div className="w-full h-full">
          <Image
            src={img5}
            alt="/"
            className="w-215 h-full object-cover"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}

export default Portofolio;
