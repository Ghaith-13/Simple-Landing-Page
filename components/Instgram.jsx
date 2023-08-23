import React from 'react';
import img1 from '../public/photo1.jpg';
import img2 from '../public/photo2.jpg';
import img3 from '../public/photo3.jpg';
import img4 from '../public/photo4.jpg';
import img5 from '../public/photo5.jpg';
import InstgramImag from './InstgramImag';

const Instgram = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold">Follow me on Instagram</p>
      <p className="pb-4">@ghitho22</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <InstgramImag socialImg={img1} />
        <InstgramImag socialImg={img2} />
        <InstgramImag socialImg={img3} />
        <InstgramImag socialImg={img4} />
        <InstgramImag socialImg={img5} />
      </div>
    </div>
  );
};

export default Instgram;
