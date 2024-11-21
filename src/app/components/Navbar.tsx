import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/image/logo.png';
import { FaCloudDownloadAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='z-50 sticky top-0 bg-fixed bg-cover bg-center custom-image'>
    <header className="text-white body-font font-bold">
      <div className="container mx-auto flex flex-wrap px-2 py-2 flex-col md:flex-row items-center">
        {/* Logo */}
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <Image src={logo} alt="Hasnain" width={140} height={140} className="w-[70px] h-[70px] object-contain transition-transform duration-500 ease-in-out transform hover:scale-110"/>
        </a>

        {/* Navigation Links */}
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center font-semibold text-3xltext-sm justify-center mb-4 md:mb-0">
          <Link href="/" className=" font-semibold mr-4 hover:text-purple-600 transition-transform duration-400 ease-in-out transform hover:scale-110">Home</Link>
          <Link href="#about" className=" font-semibold mr-4 hover:text-purple-600  transition-transform duration-400 ease-in-out transform hover:scale-110">About</Link>
          <Link href="#service" className=" font-semibold mr-4 hover:text-purple-600  transition-transform duration-400 ease-in-out transform hover:scale-110">Services</Link>
          <Link href="#Project" className=" font-semibold mr-4 hover:text-purple-600  transition-transform duration-400 ease-in-out transform hover:scale-110">Projects</Link>
          <Link href="#Contact" className=" font-semibold mr-4 hover:text-purple-600  transition-transform duration-400 ease-in-out transform hover:scale-110">Contact</Link>
        </nav>

        {/* Download CV Button */}
        <a href="/image/hasnain Raza Cv.pdf" download>
          <button className="inline-flex items-center border-0 py-1 px-4 focus:outline-none hover:text-purple-600 rounded text-sm md:text-base mt-4 md:mt-0  transition-transform duration-400 ease-in-out transform hover:scale-110">
            Download CV
            <FaCloudDownloadAlt className="text-xl ml-2" />
          </button>
        </a>
      </div>
    </header>
    </div>
  );
}

export default Navbar;
