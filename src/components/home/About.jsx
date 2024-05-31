import React, { useEffect } from "react";
import resume from "../../assets/docs/NWABUEZE-DABELUCHUKWU-CV.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <section
      className="text-center flex justify-center py-20 md:py-28 bg-altBg dark:bg-darkBgMedium z-10 relative"
      id="about"
    >
      {/* Floating text 👇*/}
      <p className="hidden lg:block absolute top-60 -left-14 rotate-90 text-7xl font-semibold italic opacity-5 dark:text-white">
        About
      </p>
      {/* Floating text ☝*/}

      <div className=" bg-white dark:bg-gray-700 shadow-lg px-2 xl:px-20 rounded-md max-w-[93%] sm:w-[90%] md:max-w-[85%] lg:max-w-[80%] 2xl:max-w-[68%]">
        <div className="px-3 pt-12 sm:px-9 md:px-16">
          <div>
            <p className="text-xl text-green-700 dark:text-green-400 font-semibold underline">
              {" "}
              ABOUT MYSELF
            </p>
            <p
              className="py-5 text-2xl font-normal md:text-3xl lg:5xl dark:text-green-400 text-green-500"
              data-aos="fade-up"
            >
              Welcome! My name is Nwabueze Dabeluchukwu, i'm a front-end developer based in Nigeria. I'm passionate about cutting-edge, pixel-perfect, beautiful interface and intuitively implemented UX. Powered by VS Code and tea, i turn your requirements into CMS-ified and ecommerce-ified websites - on time and on budget.
            </p>
            <a
              href={resume}
              download={resume}
              className="text-xl btn btn-lg border-green-400 btn-wide rounded-none bg-green-400 text-white hover:bg-white hover:text-green-400 hover:border-green-400"
              data-aos="fade-up"
            >
             Contact Me
            </a>
          </div>
        </div>

        <div className="h-[1px] bg-altBgMedium my-10"></div>
        {/* ☝Dividing line */}

        {/* <div className="bg-gray-400">
          <p className="text-3xl italic font-semibold text-altBgMedium py-5 border-2 inline-block">
            Skills
          </p>
        </div> */}

        <div
          className="text-xl font-normal px-5 pb-12 grid grid-cols-1 gap-8 sm:px-9 md:px-10 md:grid-cols-2"
          data-aos="fade-up"
        >
          {/* <div>
            <p className="text-start font-medium dark:text-white">Figma</p>
            <div className="rounded-xl bg-altBgMedium mt-3">
              <div className="bg-textLight w-[80%] py-1 rounded-xl"></div>
            </div>
          </div> */}

          <div>
            <p className="text-start font-medium dark:text-green-400 text-green-400">HTML</p>
            <div className="rounded-xl bg-altBgMedium mt-2">
              <div className="bg-green-400 w-[96%] py-1 rounded-xl"></div>
            </div>
          </div>

          <div>
            <p className="text-start font-medium dark:text-green-400 text-green-400">CSS</p>
            <div className="rounded-xl bg-altBgMedium mt-2">
              <div className="bg-green-400 w-[96%] py-1 rounded-xl"></div>
            </div>
          </div>

          <div>
            <p className="text-start font-medium dark:text-green-400 text-green-400">Tailwind</p>
            <div className="rounded-xl bg-altBgMedium mt-2">
              <div className="bg-green-400 w-[90%] py-1 rounded-xl"></div>
            </div>
          </div>

          <div>
            <p className="text-start font-medium dark:text-green-400 text-green-400">SCSS</p>
            <div className="rounded-xl bg-altBgMedium mt-2">
              <div className="bg-green-400 w-[80%] py-1 rounded-xl"></div>
            </div>
          </div>

          <div>
            <p className="text-start font-medium dark:text-green-400 text-green-400">Javascript</p>
            <div className="rounded-xl bg-altBgMedium mt-2">
              <div className="bg-green-400 w-[80%] py-1 rounded-xl"></div>
            </div>
          </div>

          <div>
            <p className="text-start font-medium dark:text-green-400 text-green-400">Typscript</p>
            <div className="rounded-xl bg-altBgMedium mt-2">
              <div className="bg-green-400 w-[86%] py-1 rounded-xl"></div>
            </div>
          </div>

          <div>
            <p className="text-start font-medium dark:text-green-400 text-green-400">React.js</p>
            <div className="rounded-xl bg-altBgMedium mt-2">
              <div className="bg-green-400 w-[85%] py-1 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// h-[80%] w-[60%]

export default About;
