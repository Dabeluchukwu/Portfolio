import React, { useEffect } from "react";
// import myPhoto from "../../assets/osorachukwuMain.png";
import myPhoto from "../../assets/My portfolio img.png";
import dottedBg from "../../assets/icons/bg-dottedsmall.svg";
// import bricks from '../../assets/icons/rectangleBg.svg'
import resume from "../../assets/docs/osorachukwu-ezewi-cv.pdf";
import Logo from "../Logo";

function Hero() {
  return (
    <>
    {/* 👇 I used this div below to create a space btwn the header and the hero */}
      <div className="h-24 hidden lg:block" />
      <section className="pt-14 md:pt-0 lg:h-[80vh] xl:h-[90vh] relative z-0 bg-white dark:bg-gray-700">
        {/* Floating text 👇*/}
        <p className="hidden lg:block absolute top-32 -left-12 rotate-90 text-7xl font-semibold italic opacity-5 dark:text-white">
          Dabi
        </p>
        {/* Floating text ☝*/}


        <div className="container mx-auto px-4 md:flex h-full">
          {/* First column 👇*/}
          <div className="flex flex-col justify-end pt-24 pb-6 lg:justify-center xl:justify-end xl:pb-20 md:w-[50%] lg:pl-24 md:font-medium">
            {/* Texts container 👇*/}
            <div className="left-anime text-green-700 dark:text-green-500">
              <p className="text-green-400">Hi, I'm</p>
              <p className="font-medium text-5xl my-5 md:text-6xl lg:font-bold glitch">
                Nwabueze <br />
                Dabeluchukwu{" "}
              </p>
              <p>
                I'm a Frontend Web Developer experienced in building Industry
                Leading Web Solutions with next gen technologies.
              </p>
            </div>
            {/* Button 👇*/}
            <div>
              <a
                href={resume}
                download={resume}
                className="mt-6 text-green-400 btn rounded-none bg-inherit border-green-400 lg:btn-lg hover:bg-green-400 hover:text-white"
              >
                Download CV
              </a>
            </div>
          </div>
          {/* Second column 👇*/}
          <div className="h-full hidden md:block z-30 ">
            <img src={myPhoto} alt="" className="h-full hover:grayscale" />
          </div>

          {/*  👇Background noise */}
          <div className="hidden -z-0 h-full absolute bottom-0 right-1 lg:block">
            <div className=" h-full w-[550px] shadow-2xl"></div>
            {/* bg-altBg */}
           
          </div>
           {/* hover:bg-[#e4e1f3] */}

          <div className="absolute w-20 bottom-80 left-[600px]">
            <img src={dottedBg} alt="" className="animate-pulse" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
