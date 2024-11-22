"use client";
import React from 'react';
import Image from 'next/image';
import heroImage from '../../../public/image/pic.png';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="text-white body-font bg-fixed bg-cover bg-center custom-image">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-6xl mb-4 font-extrabold text-white">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
              Hello, It’s Me
            </span>
            <br className='hidden lg:inline-block' />
            Hasnain Raza
            <br />
            <Typewriter
              options={{
                strings: ['And I am a Frontend Developer', 'Social Media Marketer', 'Graphics Designer'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className='w-[150px] h-[2px] bg-blue-700 mb-4'></div>
          <p className=" text-white font-semibold mb-8 leading-relaxed text-2xl ">
            I am a social media marketer, lead generator, and web developer. Currently, I am a student at GIAIC under the Governor Sindh Initiative for GenAI, Web3, and Metaverse, while also learning HTML, CSS, TypeScript, and Next.js.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start sm:justify-start">
            <Link href={"#Contact"}>
              <button className="inline-flex bg-transparent border rounded-full border-pink-800 py-2 px-6 focus:outline-none text-lg text-white hover:border-purple-500 transform scale-90 transition duration-700 ease-out hover:scale-100 mb-4 sm:mb-0">
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text  font-bold">
                  Hire Me
                </span>
              </button>
            </Link>

            <span className="inline-flex flex-wrap justify-center items-center space-x-4 sm:ml-auto sm:mt-0 mt-4 mb-0">
              <Link
                target="_blank"
                href={"https://www.facebook.com/hasnainraza4321"}
                className="text-blue-800 hover:text-blue-900 transform scale-90 transition duration-700 ease-out hover:scale-100 ml-4"
              >
                <FaFacebook className="text-4xl sm:text-5xl border border-pink-500 hover:border-purple-500 rounded-full p-2" />
              </Link>

              <Link
                target="_blank"
                href={"https://www.instagram.com/hasnain_raza321/"}
                className="text-pink-700 hover:text-[#b62fa4fb] transform scale-90 transition duration-700 ease-out hover:scale-100"
              >
                <IoLogoInstagram className="text-4xl sm:text-5xl border border-pink-500 hover:border-purple-500 rounded-full p-2" />
              </Link>

              <Link
                target="_blank"
                href={"https://www.linkedin.com/in/hasnain-raza-47b6b2294/"}
                className="text-blue-800 hover:text-blue-900 transform scale-90 transition duration-700 ease-out hover:scale-100"
              >
                <FaLinkedin className="text-4xl sm:text-5xl border border-pink-500 hover:border-purple-500 rounded-full p-2" />
              </Link>

              <Link
                target="_blank"
                href={"https://github.com/hasnainraza321"}
                className="text-white hover:text-gray-600 text-xl transform scale-90 transition duration-700 ease-out hover:scale-100"
              >
                <FaGithub className="text-4xl sm:text-5xl border border-pink-500 hover:border-purple-500 rounded-full p-2" />
              </Link>
            </span>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center mx-auto w-[25rem] mb-10 rounded-[11.2rem] transform scale-90 transition duration-700 ease-out hover:scale-100 hover:ring-4 hover:ring-purple-800"
            alt="hero"
            width={600}
            height={600}
            src={heroImage}
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;