import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Navbar() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [TextColor, setTextColor] = useState('white');

  const handlenav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const ChangeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffff');
      }
    };
    window.addEventListener('scroll', ChangeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed top-0 left-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] flex justify-between p-4 text-white items-center">
        <Link href="/">
          <h1 className="font-bold text-4xl " style={{ color: `${TextColor}` }}>
            Capture
          </h1>
        </Link>

        <ul className="hidden sm:flex" style={{ color: `${TextColor}` }}>
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="p-4">
            <Link href="/work">Work</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        {/* Mobile Button */}
        <div onClick={handlenav} className="sm:hidden block z-10">
          {nav ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${TextColor}` }} />
          )}
        </div>
        {/* Mobile menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-black text-center ease-in duration-300 h-screen w-full'
              : 'sm:hidden absolute top-0 bottom-0 right-0 left-[-100%] flex justify-center items-center bg-black text-center ease-in duration-300 h-screen w-full'
          }
        >
          <ul>
            <li>
              <Link href="/" onClick={handlenav}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/#gallery" onClick={handlenav}>
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/work" onClick={handlenav}>
                Work
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={handlenav}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
