"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import build from "../../../public/assets/build.png";
import fbo from "../../../public/assets/fbo.png";
import agent from "../../../public/assets/agents.png";
import travel from "../../../public/assets/travel.png";
import shop from "../../../public/assets/shp.png";
import event from "../../../public/assets/event.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [navigationMenuOpen, setNavigationMenuOpen] = useState(false);
  const [navigationMenu, setNavigationMenu] = useState("");
  const navigationDropdownRef = useRef(null);
  const closeDelay = 200;
  let closeTimeout;

  const handleMouseEnter = (menu, element) => {
    clearCloseTimeout();
    setNavigationMenuOpen(true);
    setNavigationMenu(menu);
    repositionDropdown(element);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setNavigationMenuOpen(false);
      setNavigationMenu("");
    }, closeDelay);
  };

  const clearCloseTimeout = () => {
    clearTimeout(closeTimeout);
  };

  const repositionDropdown = (element) => {
    if (navigationDropdownRef.current) {
      const dropdown = navigationDropdownRef.current;
      dropdown.style.left = `${element.offsetLeft}px`;
      dropdown.style.marginLeft = `${element.offsetWidth / 2}px`;
    }
  };

  return (
    <>
      <header className="absolute px-[24px] md:px-4 top-0 left-0 w-full z-40 xl:py-4">
        <nav>
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center justify-between  mx-auto py-4">
              <div className="flex gap-2 md:gap-16 justify-between align-middle w-full md:w-auto">
                <a
                  href="#"
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                  <Image
                    src={logo}
                    className="logo-header h-6 lg:h-8 w-auto"
                    // width={10}
                    height={120}
                    alt="wsj"
                  />
                </a>
                <button
                  onClick={toggleMenu}
                  data-collapse-toggle="navbar-default"
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-9 bg-white justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-default"
                  aria-expanded={isOpen ? "true" : "false"}
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen && (
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
                  )}
                  {isOpen && (
                    <span className="close-menu text-sm mr-[10px] text-black bg-white font-semibold rounded-3xl px-[16px] py-[11px] flex items-center gap-2">
                      Close{" "}
                      <svg
                        width="9"
                        height="8"
                        viewBox="0 0 9 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.60156 4L8.13281 6.53125C8.27344 6.67188 8.27344 6.92969 8.13281 7.07031L7.54688 7.65625C7.40625 7.79688 7.14844 7.79688 7.00781 7.65625L4.5 5.125L1.96875 7.65625C1.82812 7.79688 1.57031 7.79688 1.42969 7.65625L0.84375 7.07031C0.703125 6.92969 0.703125 6.67188 0.84375 6.53125L3.375 4L0.84375 1.49219C0.703125 1.35156 0.703125 1.09375 0.84375 0.953125L1.42969 0.367188C1.57031 0.226562 1.82812 0.226562 1.96875 0.367188L4.5 2.89844L7.00781 0.367188C7.14844 0.226562 7.40625 0.226562 7.54688 0.367188L8.13281 0.953125C8.27344 1.09375 8.27344 1.35156 8.13281 1.49219L5.60156 4Z"
                          fill="#070E2E"
                        />
                      </svg>
                    </span>
                  )}
                </button>
                <div
                  className={`transition-all bg-second-color md:bg-transparent absolute md:relative top-20 md:top-0 duration-300 ${
                    isOpen ? "block left-0" : "hidden"
                  } w-full md:block md:w-auto`}
                  id="navbar-default"
                >
                  <ul className="font-medium  bg-main-color flex flex-col pb-4 px-[24px]  md:p-0 align-center md:flex-row md:bg-transparent">
                    <li className="border-b border-para-color md:border-0">
                      <nav className="relative z-10 w-auto">
                        <div className="relative">
                          <ul className="flex items-center justify-start  flex-1 space-x-1 list-none text-neutral-700 group ">
                            <li className="w-full md:w-max">
                              <button
                                className={`inline-flex items-center w-full md:w-max justify-between md:justify-center border-0 py-[16px] md:py-2 md:px-3  lg:px-4  text-base xl:text-base font-medium transition-colors text-white rounded-md hover:text-white focus:outline-none disabled:opacity-50 disabled:pointer-events-none ${
                                  navigationMenu === "learn-more"
                                    ? "bg-transparent"
                                    : "hover:bg-transparent"
                                }`}
                                onMouseEnter={(e) =>
                                  handleMouseEnter(
                                    "learn-more",
                                    e.currentTarget
                                  )
                                }
                                onMouseLeave={handleMouseLeave}
                              >
                                <span>Platform</span>
                                <svg
                                  className={`relative top-[1px] ml-1 h-[18px] w-[28px] transition-transform duration-300 ease-out ${
                                    navigationMenuOpen &&
                                    navigationMenu === "learn-more"
                                      ? "-rotate-180"
                                      : ""
                                  }`}
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#686D8A"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  aria-hidden="true"
                                  onClick={() =>
                                    setNavigationMenuOpen(!navigationMenuOpen)
                                  }
                                >
                                  <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                              </button>
                            </li>
                          </ul>
                        </div>

                        {navigationMenuOpen && (
                          <div
                            ref={navigationDropdownRef}
                            onMouseEnter={clearCloseTimeout}
                            onMouseLeave={handleMouseLeave}
                            className={`relative  nav-platform  after-menu lg:absolute top-0 left-0 lg:left-0 pt-3 ease-out lg:transform duration-100 ${
                              navigationMenuOpen
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-90"
                            } lg:translate-x-0 lg:translate-y-11`}
                          >
                            <div className="flex relative bg-no-repeat lg:bg-menu-bg bg-contain bg-right-bottom justify-center w-auto h-auto overflow-hidden bg-second-color lg:bg-white lg:border rounded-md shadow-sm border-neutral-200/70">
                              {navigationMenu === "learn-more" && (
                                <div className="flex items-stretch  justify-center w-full flex-col lg:flex-row md:p-6">
                                  <div className="w-full lg:w-48">
                                    <div className="col">
                                      <h6 className="text-sm uppercase text-title font-semibold pb-5 ">
                                        Overview
                                      </h6>
                                      <ul className="font-medium  bg-main-color md:p-0 md:bg-transparent">
                                        <li>
                                          <a
                                            href="#"
                                            className="block pb-3 text-sm text-white lg:text-para-color hover:text-primary-color"
                                            aria-current="page"
                                          >
                                            What we do
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#"
                                            className="block pb-3 text-white lg:text-para-color w-full text-sm  hover:text-primary-color"
                                            aria-current="page"
                                          >
                                            How we work
                                          </a>
                                        </li>
                                      </ul>
                                      <h6 className="text-sm uppercase text-title font-semibold pt-5 pb-5">
                                        solutions
                                      </h6>
                                      <ul className="font-medium  bg-main-color md:p-0 md:bg-transparent">
                                        <li>
                                          <a
                                            href="#"
                                            className="block pb-3 text-sm text-white lg:text-para-color  hover:text-primary-color"
                                            aria-current="page"
                                          >
                                            evoJets API
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#"
                                            className="block pb-3  w-full text-sm text-white lg:text-para-color  hover:text-primary-color"
                                            aria-current="page"
                                          >
                                            evoJets HQ
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="lg:min-w-96 w-full">
                                    <h6 className="text-sm uppercase text-title font-semibold pt-5 pb-5">
                                      use cases
                                    </h6>
                                    <ul className="font-medium grid gap-5 grid-cols-1 lg:grid-cols-2 pb-[30px] md:p-0 md:bg-transparent">
                                      <li className="w-full lg:w-72">
                                        <a
                                          href="#"
                                          className="flex w-full items-start gap-2 text-sm  text-white lg:text-para-color hover:text-primary-color"
                                          aria-current="page"
                                        >
                                          <Image
                                            src={build}
                                            className="w-[20px] h-[20px]"
                                            height={20}
                                            alt="real estate"
                                          />
                                          Real Estate & Hospitality
                                        </a>
                                      </li>
                                      <li className="w-full lg:w-72">
                                        <a
                                          href="#"
                                          className="flex items-start gap-2 text-white lg:text-para-color  w-full text-sm  hover:text-primary-color"
                                          aria-current="page"
                                        >
                                          <Image
                                            src={fbo}
                                            className="w-[20px] h-[20px]"
                                            height={20}
                                            alt="real estate"
                                          />
                                          FBOs & MROs
                                        </a>
                                      </li>
                                      <li className="w-full lg:w-72">
                                        <a
                                          href="#"
                                          className="flex w-full items-start gap-2 text-white lg:text-para-color text-sm  hover:text-primary-color"
                                          aria-current="page"
                                        >
                                          <Image
                                            src={travel}
                                            className="w-[20px] h-[20px]"
                                            height={20}
                                            alt="travel"
                                          />
                                          Travel & Lifestyle
                                        </a>
                                      </li>
                                      <li className="w-full lg:w-72">
                                        <a
                                          href="#"
                                          className="flex items-start gap-2 text-white lg:text-para-color w-full text-sm  hover:text-primary-color"
                                          aria-current="page"
                                        >
                                          <Image
                                            src={agent}
                                            className="w-[20px] h-[20px]"
                                            height={20}
                                            alt="real estate"
                                          />
                                          Agents & Advisors
                                        </a>
                                      </li>
                                      <li className="w-full lg:w-72">
                                        <a
                                          href="#"
                                          className="flex w-full items-start gap-2 text-white lg:text-para-color text-sm  hover:text-primary-color"
                                          aria-current="page"
                                        >
                                          <Image
                                            src={shop}
                                            className="w-[20px] h-[20px]"
                                            height={20}
                                            alt="travel"
                                          />
                                          Networks & Marketplaces
                                        </a>
                                      </li>
                                      <li className="w-full lg:w-72">
                                        <a
                                          href="#"
                                          className="flex items-start gap-2 text-white lg:text-para-color  w-full text-sm  hover:text-primary-color"
                                          aria-current="page"
                                        >
                                          <Image
                                            src={event}
                                            className="w-[20px] h-[20px]"
                                            height={20}
                                            alt="real estate"
                                          />
                                          Events & Destinations
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </nav>
                    </li>

                    <li className="border-b border-para-color md:border-0">
                      <a
                        href="#"
                        className="block border-0 py-[16px] md:py-2 md:px-3  lg:px-4    text-base text-white rounded xl:px-5  xl:text-base"
                      >
                        Developers
                      </a>
                    </li>
                    <li className="border-b border-para-color md:border-0">
                      <a
                        href="#"
                        className="block border-0 py-[16px] md:py-2 md:px-3  lg:px-4   text-base text-white rounded  xl:px-5  xl:text-base"
                      >
                        Company
                      </a>
                    </li>
                    <li className="border-b border-para-color md:border-0">
                      <a
                        href="#"
                        className="block border-0 py-[16px] md:py-2 md:px-3  lg:px-4    text-base text-white rounded  xl:px-5  xl:text-base"
                      >
                        Contact
                      </a>
                    </li>
                    <li className="py-[26px]">
                      <button className="text-white block w-full md:w-max md:hidden text-base 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
                        Get Started
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <button className="text-white hidden md:block text-base 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
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
