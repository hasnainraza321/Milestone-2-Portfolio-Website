import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Project = () => {
  return (
    <div id='Project'>
      <section className="text-white  body-font bg-fixed bg-cover bg-center custom-image">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-4xl font-bold  title-font mb-4 text-white ">
              Latest Project
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-white font-medium text-1xl">
            The Latest Projects section highlights my most recent work, showcasing a blend of creativity, technical skills, and innovative solutions. Each 
            project is designed with modern technologies, responsive layouts, and interactive features, demonstrating my ability to tackle real-world challenges. 
            Explore these projects to see my journey in web development and problem-solving.
            </p>
          </div>
          <div className="flex flex-wrap -m-5  -mt-[5rem]">
            {/* six project */}
            <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-[2.2rem]"
                  src={('/image/project6.png')}
                  width={600}
                  height={600}
                />

                <div className="px-8 py-10 relative z-10 w-full border rounded-[2.2rem] border-pink-500 hover:border-purple-500 transform scale-90 transition duration-700 ease-out hover:scale-100 bg-black opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest  title-font font-medium text-white text-3xl mb-1 text-center">
                  hackathon-milestones
                  </h2>
                  <p className="leading-relaxed line-clamp-3">
                  The Hackathon Milestones project was part of a class hackathon for GIAIC students in Quarter 2. 
                  It focused on solving real-world problems using innovative approaches while fostering teamwork and technical skills. 
                  This project showcased creativity, collaboration, and practical application of learned concepts.
                  </p>
                  <Link target="_blank" href={"https://hackathon-milestones-orpin.vercel.app/"}>
                    <div className="flex justify-center mt-4">
                      <p className="leading-relaxed inline-flex bg-transparent border rounded-full border-pink-800 py-2 px-6 focus:outline-none 
      text-lg bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text font-bold hover:border-purple-500 
      transform scale-90 transition duration-700 ease-out hover:scale-100 mb-4 sm:mb-0">
                        View Project
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* Fiveth project */}
            <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-[2.2rem]"
                  src={('/image/project5.png')}
                  width={600}
                  height={600}
                />

                <div className="px-8 py-10 relative z-10 w-full border rounded-[2.2rem] border-pink-500 hover:border-purple-500 transform scale-90 transition duration-700 ease-out hover:scale-100 bg-black opacity-0 hover:opacity-100">
                <h2 className="tracking-widest  title-font font-medium text-white text-3xl mb-1 text-center">
                    Currency Converter
                  </h2>
                  <p className="leading-relaxed line-clamp-3 ">
                     This Currency Converter project, built with HTML, CSS, and TypeScript, offers a clean design and responsive functionality for real-time currency conversions.
                    TypeScript ensures robust, scalable code for reliability.
                    It showcases my skills in front-end development and precise calculations.
                  </p>
                  <Link target="_blank" href={"https://currency-converter-project-red.vercel.app/"}>
                    <div className="flex justify-center mt-4">
                      <p className="leading-relaxed inline-flex bg-transparent border rounded-full border-pink-800 py-2 px-6 focus:outline-none 
      text-lg bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text font-bold hover:border-purple-500 
      transform scale-90 transition duration-700 ease-out hover:scale-100 mb-4 sm:mb-0">
                        View Project
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 1 */}
            <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative line-">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-[2.2rem]"
                  src={('/image/project1.png')}
                  width={600}
                  height={360}
                />

                <div className="px-8 py-10 relative z-10 w-full border rounded-[2.2rem] border-pink-500 hover:border-purple-500 transform scale-90 transition duration-700 ease-out hover:scale-100 bg-black opacity-0 hover:opacity-100">
                <h2 className="tracking-widest  title-font font-medium text-white text-3xl mb-1 text-center">
                    Netflix Clone
                  </h2>
                  <p className="leading-relaxed line-clamp-3">
                    This project is a simplified clone of the Netflix website, created using HTML and CSS.
                    It showcases the basic structure of a streaming platform, featuring a hero section, movie carousels, and a
                    responsive design.
                  </p>
                  <Link target="_blank" href={"https://netflix-clon-peach.vercel.app/"}>
                    <div className="flex justify-center mt-4">
                      <p className=" mt-2 leading-relaxed inline-flex bg-transparent border rounded-full border-pink-800 py-2 px-6 focus:outline-none text-lg bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text  font-bold hover:border-purple-500 transform scale-90 transition duration-700 ease-out hover:scale-100 mb-4 sm:mb-0">
                        View Project
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* second project */}
            <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-[2.2rem]"
                  src={('/image/project 2.png')}
                  width={600}
                  height={600}
                />

                <div className="px-8 py-10 relative z-10 w-full border rounded-[2.2rem] border-pink-500 hover:border-purple-500 transform scale-90 transition duration-700 ease-out hover:scale-100 bg-black opacity-0 hover:opacity-100">
                <h2 className="tracking-widest  title-font font-medium text-white text-3xl mb-1 text-center">
                    Amazon Clone
                  </h2>
                  <p className="leading-relaxed line-clamp-3">
                    This project is a simplified clone of the Amazon website, created
                    using HTML and CSS. It showcases a basic structure of an e-commerce platform, including product listings,
                    navigation menus, and a responsive design.
                  </p>
                  <Link target="_blank" href={"https://amazon-clon-project-using-html-css.vercel.app/"}>
                    <div className="flex justify-center mt-4">
                      <p className="leading-relaxed inline-flex bg-transparent border rounded-full border-pink-800 py-2 px-6 focus:outline-none 
      text-lg bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text font-bold hover:border-purple-500 
      transform scale-90 transition duration-700 ease-out hover:scale-100 mb-4 sm:mb-0">
                        View Project
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Third project */}
            <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-[2.2rem]"
                  src={('/image/project 3.png')}
                  width={600}
                  height={600}
                />

                <div className="px-8 py-10 relative z-10 w-full border rounded-[2.2rem] border-pink-500 hover:border-purple-500 transform scale-90 transition duration-700 ease-out hover:scale-100 bg-black opacity-0 hover:opacity-100">
                <h2 className="tracking-widest  title-font font-medium text-white text-3xl mb-1 text-center">
                    Hasnain Fitness
                  </h2>
                  <p className="leading-relaxed line-clamp-3">
                    This project is a simplified gym landing page, created using HTML and CSS.
                    It showcases a clean and modern structure, including a hero section, membership plans,
                    workout programs, and a responsive design. The page is designed to engage visitors and provide essential
                    information about the gym’s services and facilities.
                  </p>
                  <Link target="_blank" href={"https://first-project-sepia-delta.vercel.app/"}>
                    <div className="flex justify-center mt-4">
                      <p className="leading-relaxed inline-flex bg-transparent border rounded-full border-pink-800 py-2 px-6 focus:outline-none 
      text-lg bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text font-bold hover:border-purple-500 
      transform scale-90 transition duration-700 ease-out hover:scale-100 mb-4 sm:mb-0">
                        View Project
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Fourth project */}
            <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-[2.2rem]"
                  src={('/image/project 4.png')}
                  width={600}
                  height={600}
                />

                <div className="px-8 py-10 relative z-10 w-full  border rounded-[2.2rem] border-pink-500 hover:border-purple-500 transform scale-90 transition duration-700 ease-out hover:scale-100 bg-black opacity-0 hover:opacity-100">
                <h2 className="tracking-widest  title-font font-medium text-white text-3xl mb-1 text-center">
                    Food delivery
                  </h2>
                  <p className="leading-relaxed line-clamp-3">
                    This project is a simplified clone of a food delivery website, created using HTML and CSS.
                    It showcases the basic structure of a delivery platform, featuring a hero section,
                    restaurant listings, and a responsive design. The layout is designed to provide a seamless and
                    user-friendly experience, mimicking the look and feel of popular food delivery services.
                  </p>
                  <Link target="_blank" href={"https://second-project-responsive-project.vercel.app/"}>
                    <div className="flex justify-center mt-4">
                      <p className="leading-relaxed inline-flex bg-transparent border rounded-full border-pink-800 py-2 px-6 focus:outline-none 
      text-lg bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text font-bold hover:border-purple-500  
      transform scale-90 transition duration-700 ease-out hover:scale-100 mb-4 sm:mb-0">
                        View Project
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

    </div>
  )
}

export default Project
