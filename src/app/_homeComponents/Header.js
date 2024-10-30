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
      <header className="absolute  px-4 top-0 left-0 w-full z-40 xl:py-4">
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
                  className="inline-flex items-center p-2 w-10 h-10 bg-white justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                  className={`transition-all bg-second-color md:bg-transparent absolute md:relative top-20 md:top-0 duration-300 ${
                    isOpen ? "block left-0" : "hidden"
                  } w-full md:block md:w-auto`}
                  id="navbar-default"
                >
                  <ul className="font-medium  bg-main-color flex flex-col p-4 md:p-0 align-center md:flex-row md:bg-transparent">
                    <li>
                      <nav className="relative z-10 w-auto">
                        <div className="relative">
                          <ul className="flex items-center justify-start flex-1 space-x-1 list-none text-neutral-700 group ">
                            <li>
                              <button
                                className={`inline-flex items-center justify-center border-0  py-2 px-3  lg:px-4  text-sm xl:text-base font-medium transition-colors text-white rounded-md hover:text-white focus:outline-none disabled:opacity-50 disabled:pointer-events-none ${
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
                                  className={`relative top-[1px] ml-1 h-3 w-3 transition-transform duration-300 ease-out ${
                                    navigationMenuOpen &&
                                    navigationMenu === "learn-more"
                                      ? "-rotate-180"
                                      : ""
                                  }`}
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  aria-hidden="true"
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
                            className={`relative  nav-platform  after-menu lg:absolute top-0 left-0 lg:left-20 pt-3 ease-out lg:transform duration-100 ${
                              navigationMenuOpen
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-90"
                            } lg:-translate-x-1/2 lg:translate-y-11`}
                          >
                            <div className="flex relative bg-no-repeat lg:bg-menu-bg bg-contain bg-right-bottom justify-center w-auto h-auto overflow-hidden bg-second-color lg:bg-white lg:border rounded-md shadow-sm border-neutral-200/70">
                              {navigationMenu === "learn-more" && (
                                <div className="flex items-stretch  justify-center w-full flex-col lg:flex-row p-6">
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
                                    <ul className="font-medium grid gap-5 grid-cols-1 lg:grid-cols-2 md:p-0 md:bg-transparent">
                                      <li className="w-full lg:w-72">
                                        <a
                                          href="#"
                                          className="flex w-full items-start gap-2 text-sm  text-white lg:text-para-color hover:text-primary-color"
                                          aria-current="page"
                                        >
                                          <Image
                                            src={build}
                                            className="w-auto"
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
                                            className="w-auto"
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
                                            className="w-auto"
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
                                            className="w-auto"
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
                                            className="w-auto"
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
                                            className="w-auto"
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
                    <li>
                      <button className="text-white block lg:hidden text-base 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
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
