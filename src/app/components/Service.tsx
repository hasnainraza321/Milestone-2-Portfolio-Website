import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Service = () => {
  return (
    <div id='service'>
      <section className="text-white  body-font bg-fixed bg-cover bg-center custom-image">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-4xl font-bold  title-font mb-4 text-white ">
              Our Services
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-white font-medium text-1xl">
            I specialize in providing expert solutions in Web Development, Digital Marketing, and Graphic Design. 
            With a focus on innovation and excellence, I create responsive websites, implement result-driven marketing strategies, and craft impactful visuals that enhance your brand identity. Whether you need a seamless online presence, increased visibility, or compelling designs, 
            I’m here to deliver tailored solutions that drive your success.
            </p>
          </div>
          <div className="flex flex-wrap -m-5  -mt-[4rem] ">
            {/* web */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-[2.2rem]"
                  src={('/image/service.jpg')}
                  width={600}
                  height={600}
                />

                <div className="px-8 py-10 relative z-10 w-full border rounded-[2.2rem] border-pink-500 hover:border-purple-500 transform scale-90 transition duration-700 ease-out hover:scale-100 bg-black opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest  title-font font-medium bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text text-3xl mb-1 text-center">
                    Web Development
                  </h2>
                  <p className="leading-relaxed ">
                    I offer comprehensive web development services tailored to meet your business needs.
                    Utilizing modern technologies like HTML, CSS, TypeScript, and Next.js, I create responsive and user-friendly websites. My focus is on delivering high-quality solutions that enhance user experience and drive engagement.
                    Let's transform your vision into a powerful online presence!
                  </p>
                  <Link target="_blank" href={"#Contact"}>
                    <div className="flex justify-center mt-4">
                      <p className="leading-relaxed inline-flex bg-transparent border rounded-full border-pink-800 py-2 px-6 focus:outline-none 
      text-lg bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text font-bold hover:border-purple-500 
      transform scale-90 transition duration-700 ease-out hover:scale-100 mb-4 sm:mb-0">
                        Contact
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* marketing */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-[2.2rem]"
                  src={('/image/service2.jpg')}
                  width={600}
                  height={600}
                />

                <div className="px-8 py-10 relative z-10 w-full border rounded-[2.2rem] border-pink-500 hover:border-purple-500 transform scale-90 transition duration-700 ease-out hover:scale-100 bg-black opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest  title-font font-medium bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text text-3xl mb-1 text-center">
                    Digital Marketing
                  </h2>
                  <p className="leading-relaxed ">
                    I offer tailored digital marketing solutions,
                    including social media management, content creation,
                    and SEO strategies to elevate your brand’s online presence.
                    My PPC campaigns drive targeted traffic and maximize ROI
                    through effective ad placements.By combining creativity with data-driven insights,I deliver impactful results.Let’s enhance your brand’s visibility
                    and achieve your marketing goals!
                  </p>
                  <Link target="_blank" href={"#Contact"}>
                    <div className="flex justify-center mt-4">
                      <p className="leading-relaxed inline-flex bg-transparent border rounded-full border-pink-800 py-2 px-6 focus:outline-none 
      text-lg bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text font-bold hover:border-purple-500 
      transform scale-90 transition duration-700 ease-out hover:scale-100 mb-4 sm:mb-0">
                        Contact
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* designing*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-[2.2rem]"
                  src={('/image/service3.jpg')}
                  width={600}
                  height={600}
                />

                <div className="px-8 py-10 relative z-10 w-full border rounded-[2.2rem] border-pink-500 hover:border-purple-500 transform scale-90 transition duration-700 ease-out hover:scale-100 bg-black opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest  title-font font-medium bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text text-3xl mb-1 text-center">
                  Graphic Designing
                  </h2>
                  <p className="leading-relaxed">
                    I provide tailored graphic design solutions
                    that enhance your brand identity and engage your audience.
                    From logos to marketing materials, my designs
                    are crafted to be visually appealing and effective.
                    I deliver compelling visuals that communicate your message.
                    Let’s elevate your brand’s presence
                    through impactful design that resonates with your audience!
                  </p>
                  <Link target="_blank" href={"#Contact"}>
                    <div className="flex justify-center mt-4">
                      <p className="leading-relaxed inline-flex bg-transparent border rounded-full border-pink-800 py-2 px-6 focus:outline-none 
      text-lg bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text font-bold hover:border-purple-500 
      transform scale-90 transition duration-700 ease-out hover:scale-100 mb-4 sm:mb-0">
                        Contact
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

export default Service
