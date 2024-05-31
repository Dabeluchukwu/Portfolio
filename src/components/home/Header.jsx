import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import Nav from "../shared/Nav";
import Hambourger from "../shared/Hambourger";

function Header() {
  // const [isSticky, setIsSticky] =useState(false);

  // useEffect(()=> {
  //   const handleScroll = () => {
  //     const offset = window.scrollY;
  //     if (offset > 0) {
  //       setIsSticky(true);
  //     }else {
  //       setIsSticky(false)
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, []);

 
  return (
    <section className="w-full border bg-white dark:bg-gray-900 border-green-300 z-20 lg:h-20 xl:h-24 fixed" id="home">
      <div className="flex justify-between px-10 overflow-hidden lg:flex lg:justify-between lg:px-24 lg:h-full lg:py-0 xl:px-20">
        <Logo />
        <Nav />
        <Hambourger />
      </div>
    </section>
  );
}

export default Header;
