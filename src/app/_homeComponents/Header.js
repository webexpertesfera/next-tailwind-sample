"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="absolute  px-4 top-0 left-0 w-full z-40 xl:py-4">
        <nav>
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center justify-between mx-auto py-4">
              <div className="flex gap-16 align-middle">
                <a
                  href="#"
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                  <Image
                  src={logo}
                  className="logo-header w-auto"
                  // width={10}
                  height={120}
                  alt="wsj"
                />
                </a>
                <button
                  onClick={toggleMenu}
                  data-collapse-toggle="navbar-default"
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-default"
                  aria-expanded={isOpen ? "true" : "false"}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-300 ${
                    isOpen ? "block" : "hidden"
                  } w-full md:block md:w-auto`}
                  id="navbar-default"
                >
                  <ul className="font-medium  bg-main-color flex flex-col p-4 md:p-0 align-center md:flex-row md:bg-transparent">
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-3  lg:px-4  text-sm text-white rounded md:bg-transparent dark:text-white md:dark:text-blue-500  xl:px-5 xl:text-base"
                        aria-current="page"
                      >
                        Platform
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-3  lg:px-4   text-sm text-white rounded xl:px-5  xl:text-base"
                      >
                        Developers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-3   lg:px-4  text-sm text-white rounded  xl:px-5  xl:text-base"
                      >
                        Company
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-3   lg:px-4  text-sm text-white rounded  xl:px-5  xl:text-base"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <button className="text-white text-base 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
