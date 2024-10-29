"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/assets/footer-logo.png";
import git from "../../../public/assets/git.png";
import linkdn from "../../../public/assets/linkdn.png";
import facebook from "../../../public/assets/facebook.png";
import icon from "../../../public/assets/icon.png";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <footer className="w-full z-40 py-10  px-4 xl:py-20">
        <div className="container mx-auto">
          <div className="grid gap-5 grid-cols-1 lg:grid-cols-10">
            <div className="lg:col-span-2">
              <div className="logo">
                <Image src={logo} className="" alt="Footer Logo" />
              </div>
              <ul className="font-medium hidden md:flex flex-row items-start gap-5  mt-8 bg-main-color md:p-0 md:bg-transparent">
                <li>
                  <a href="#" aria-current="page">
                    <Image src={git} className="" alt="git" />
                  </a>
                </li>
                <li>
                  <a href="#" aria-current="page">
                    <Image src={linkdn} className="" alt="linkedin" />
                  </a>
                </li>{" "}
                <li>
                  <a href="#" aria-current="page">
                    <Image src={facebook} className="" alt="facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" aria-current="page">
                    <Image src={icon} className="" alt="logo" />
                  </a>
                </li>
              </ul>
              <p className="text-sm mt-8 hidden md:block">
                © 2023 Flight Deck{" "}
                <Link className="ms-5" href="/">
                  Privacy Policy
                </Link>
              </p>
            </div>
            <div className="lg:col-span-4">
              <h6 className="text-sm uppercase text-title font-semibold pb-5">
                Company
              </h6>
              <p className="text-base lg:w-4/5 mb-8">
                evoJets is a business aviation services and technology company
                founded in Aspen, headquartered in NYC. We are building tools to
                facilitate private air travel bookings for businesses of all
                kinds.
              </p>
              <button className="text-white text-base 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
                Get Started
              </button>
            </div>
            <div className="lg:col-span-4 gap-5">
              <div className="grid grid-cols-2">
              <div className="">
                <div className="col">
                  <h6 className="text-sm uppercase text-title font-semibold pb-5">
                    solutions
                  </h6>
                  <ul className="font-medium  bg-main-color md:p-0 md:bg-transparent">
                    <li>
                      <a
                        href="#"
                        className="block pb-3 text-sm  hover:text-primary-color"
                        aria-current="page"
                      >
                        evoJets API
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-3  w-full text-sm  hover:text-primary-color"
                        aria-current="page"
                      >
                        evoJets HQ
                      </a>
                    </li>
                  </ul>

                  <h6 className="text-sm uppercase text-title font-semibold pb-5 pt-5">
                    Overview
                  </h6>
                  <ul className="font-medium  bg-main-color md:p-0 md:bg-transparent">
                    <li>
                      <a
                        href="#"
                        className="block pb-3 text-sm  hover:text-primary-color"
                        aria-current="page"
                      >
                        What we do
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-3  w-full text-sm  hover:text-primary-color"
                        aria-current="page"
                      >
                        How we work
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="col">
                  <h6 className="text-sm uppercase text-title font-semibold pb-5">
                    USE Cases
                  </h6>
                  <ul className="font-medium  bg-main-color md:p-0 md:bg-transparent">
                    <li>
                      <a
                        href="#"
                        className="block pb-3 text-sm  hover:text-primary-color"
                        aria-current="page"
                      >
                        Real Estate & Hospitality
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-3  w-full text-sm  hover:text-primary-color"
                        aria-current="page"
                      >
                        Travel & LIfestyle
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-3  w-full text-sm  hover:text-primary-color"
                        aria-current="page"
                      >
                        Networks & Marketplaces
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-3  w-full text-sm  hover:text-primary-color"
                        aria-current="page"
                      >
                        FBOs & MROs
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-3  w-full text-sm  hover:text-primary-color"
                        aria-current="page"
                      >
                        Agents & Advisors
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block pb-3  w-full text-sm  hover:text-primary-color"
                        aria-current="page"
                      >
                        Events & Destinations
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              </div>
            </div>
            <div className="lg:hidden block ">
              <ul className="font-medium flex md:hidden flex-row items-start gap-5  mt-8 bg-main-color md:p-0 md:bg-transparent">
                <li>
                  <a href="#" aria-current="page">
                    <Image src={git} className="" alt="git" />
                  </a>
                </li>
                <li>
                  <a href="#" aria-current="page">
                    <Image src={linkdn} className="" alt="linkedin" />
                  </a>
                </li>{" "}
                <li>
                  <a href="#" aria-current="page">
                    <Image src={facebook} className="" alt="facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" aria-current="page">
                    <Image src={icon} className="" alt="logo" />
                  </a>
                </li>
              </ul>
              <p className="text-sm mt-8 block md:hidden">
                © 2023 Flight Deck{" "}
                <Link className="ms-5" href="/">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
