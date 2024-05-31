import React, { useContext, useState } from "react";
import { MyContext } from "../../App";
import { Menu } from 'lucide-react';

function Hambourger() {
const toggleDarkMode = useContext(MyContext);

  return (
    <section className="lg:hidden">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="btn btn-primary drawer-button rounded-sm bg-inherit border-none shadow-none  text-white"
          >
            <Menu className="text-black dark:text-white" />
          </label>
        </div>
        {/*👇 Drawer slide(side-bar) */}
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 min-h-full bg-base-200 dark:bg-darkBgLight text-base-content dark:text-white text-lg w-[70%] ">
            {/* Sidebar content here */}
            <li className="font-medium text-2xl text-textMedium dark:text-green-400">
              <a> Dabi. </a>
            </li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#footer">Contact</a>
            </li>
           

            {/* 👇 ThemeSwitcher Button 👇*/}
            <div className="flex mt-4 pl-4">
              <label className="cursor-pointer grid place-items-center" >
                <input
                  type="checkbox"
                  value="synthwave"
                  className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                  onClick={toggleDarkMode}
                />
                <svg
                  className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <svg
                  className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>
            </div>
            {/*☝ ThemeSwitcher Button ☝*/}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hambourger;
