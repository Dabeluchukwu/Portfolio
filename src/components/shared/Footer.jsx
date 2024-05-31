import React, { useEffect } from "react";
import { FaWhatsapp, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import Aos from "aos";
import "aos/dist/aos.css";


function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="text-green-700 relative " id="footer">
      {/* Floating text 👇*/}
      <p className="hidden lg:block absolute top-44 -left-6 rotate-90 text-7xl font-semibold italic z-10 opacity-5 dark:text-white " style={{letterSpacing: '10px'}}>
        Hire
      </p>
      {/* Floating text ☝*/}

     
      <div className="mx-auto dark:text-white ">
        {/* First section👇 */}
        <div className="bg-altBg py-24 px-8 dark:bg-gray-700" data-aos="fade-up">
          <div className="flex items-center justify-center gap-3 ">
            {/* <div className="h-[1px] w-full bg-borderColor"></div> */}
            <p className="whitespace-nowrap text-xl font-medium md:text-2xl underline ">
              What's Next ?!
            </p>
            {/* <div className="h-[1px] w-full bg-borderColor"></div> */}
          </div>

          <p className="text-3xl font-bold text-center py-4 xl:text-4xl ">
            Get In Touch
          </p>
          <p className="text-center py-4">
            I'd be glad to join your team and help your team launch products
            that can help impact users across the globe. Let's begin!
          </p>

          <div className="flex justify-center mt-5">
            <a
              href="mailto:dabeluc@gmail.com"
              className="btn rounded-none text-xl text-white bg-green-400 border-green-400 hover:text-green-400 hover:bg-white hover: hover:border hover:border-green-400"
            >
              Find me an email
            </a>
          </div>
        </div>

        {/* Second section👇 */}
        <div className="flex flex-col items-center py-24 font-medium px-6">
          <p className="pb-10 px-5 text-center sm:px-1">
            Designed and Built by Dabeluchukwu &copy;2024
          </p>

          <div className="pt-3">
            <ul className="flex gap-5 lg:gap-10">
            <li>
                <a href="https://wa.link/3yszwf" target="_black">
                <FaWhatsapp size={30} className="text-green-400" />
                </a>
              </li>
              <li>
                <a
                  href="http://www.linkedin.com/in/dabeluchukwu-nwabueze"
                  target="_blank"
                >
                 <FaLinkedin  size={30} className="text-green-400" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Dabeluchukwu" target="_blank">
                  <FaGithub size={30} className="text-green-400"/>
                </a>
              </li>
              <li>
                <a href="tel:+2347058825172">
                  <FaPhone size={25} className="text-green-400 rotate-90"/>
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
