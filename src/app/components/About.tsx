import React from 'react'
import Image from 'next/image';
import aboutpic from '../../../public/image/aboutpic.png';
import Link from 'next/link';

const About = () => {
  return (
    <div id='about'>
      <section className="text-white body-font  bg-fixed bg-cover bg-center custom-image">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <Image
            className="object-cover object-center mx-auto w-[37rem] mb-10 rounded-[3.2rem] transform scale-90 transition duration-700 ease-out hover:scale-100 hover:ring-4 hover:ring-purple-800"
            alt="hero"
            width={800}
            height={800}
            src={aboutpic}
          />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        About Me
        <br className="hidden lg:inline-block" />
        Frontend Developer!
        
      </h1>
      <p className="mb-5 leading-relaxe text-1xl font-semibold">
      Hi, I am Hasnain Raza, a social media marketer and web developer dedicated to crafting meaningful 
      digital experiences. I excel at building online communities and creating engaging content that 
      enhances brand visibility. Currently, I am expanding my expertise in HTML, CSS, TypeScript, and Next.js, 
      alongside learning cutting-edge technologies like cloud computing, applied generative AI, and agentic robotic 
      AI. My focus is on delivering innovative solutions to help businesses bridge the gap between marketing and development for effectiv growth.
      </p>
      <div className="flex justify-center">
      <Link href={"#Contact"}>
              <button className="inline-flex bg-transparent border rounded-full border-pink-800 py-2 px-6 focus:outline-none text-lg text-white hover:border-purple-500 transform scale-90 transition duration-700 ease-out hover:scale-100 mb-4 sm:mb-0">
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text  font-bold">
                  Hire Me
                </span>
              </button>
            </Link>
            
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
