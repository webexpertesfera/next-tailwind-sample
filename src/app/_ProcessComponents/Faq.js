"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import flight from "../../../public/assets/api.png";
import check from "../../../public/assets/chk.png";
import { useState } from "react";

export const Faq = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (accordionId) => {
    setActiveAccordion(activeAccordion === accordionId ? null : accordionId);
  };
  return (
    <section className="bg-hq-bg bg-center lg:bg-left-top bg-cover relative px-4 md:px-8 pt-16 lg:pt-24 pb-56">
      <div className="container mx-auto">
        <p className="uppercase text-xs text-primary-color m-auto border px-4 py-1 bg-lightbg rounded-3xl border-second-border  w-max font-semibold">
          FAQ
        </p>
        <h2 className="text-3xl text-title-color lg:text-5xl text-center font-semibold my-8">
          Frequently asked questions
        </h2>
        <div className="grid grid-cols-1 lg:w-10/12 lg:m-auto py-10 gap-5">
          <div className="">
            <div className="">
              <div className="">
                {/* Accordion for  Sagittis purus sit amet volutpat consequat mauris. */}
                <div className="accordion faq border-accbg bg-white border rounded-xl my-2">
                  <h3
                    className={`text-title-color font-semibold text-xl rounded-xl cursor-pointer flex justify-between items-center border border-white hover:border-border-hover p-4 gap-2 md:px-8 md:py-6 bg-white  ${
                      activeAccordion === "first"
                        ? "active bg-white text-primary-color "
                        : ""
                    }`}
                    onClick={() => toggleAccordion("first")}
                  >
                    Sagittis purus sit amet volutpat consequat mauris.
                    {/* <Image
                      src={arrow}
                      className={`transition-transform  duration-300 ${
                        activeAccordion === "travel" ? "rotate-90" : ""
                      }`}
                      alt="arrow"
                    /> */}
                    <div
                      className={`transition-transform text-sm duration-300 bg-white-color h-6 w-6 rounded-full flex items-center justify-center ${
                        activeAccordion === "first"
                          ? "rotate-90 text-primary-color"
                          : ""
                      }`}
                    >
                      <i className="fa-solid fa-angle-right"></i>
                    </div>
                  </h3>
                  {activeAccordion === "first" && (
                    <div className="accordion-content px-4 lg:px-8 pb-4 transition-transform  duration-300">
                      <p className="text-sm text-para-color md:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Sagittis purus sit amet volutpat consequat
                        mauris. Pulvinar elementum integer enim neque.
                      </p>
                    </div>
                  )}
                </div>

                {/* Accordion for  Sagittis purus sit amet volutpat consequat mauris. */}
                <div className="accordion faq border-accbg bg-white border rounded-xl my-2">
                  <h3
                    className={`text-title-color font-semibold text-xl rounded-xl cursor-pointer flex justify-between items-center border border-white hover:border-border-hover p-4 gap-2 md:px-8 md:py-6 bg-white  ${
                      activeAccordion === "second"
                        ? "active bg-white text-primary-color "
                        : ""
                    }`}
                    onClick={() => toggleAccordion("second")}
                  >
                    Sagittis purus sit amet volutpat consequat mauris.
                    {/* <Image
                      src={arrow}
                      className={`transition-transform  duration-300 ${
                        activeAccordion === "travel" ? "rotate-90" : ""
                      }`}
                      alt="arrow"
                    /> */}
                    <div
                      className={`transition-transform text-sm duration-300 bg-white-color h-6 w-6 rounded-full flex items-center justify-center ${
                        activeAccordion === "second"
                          ? "rotate-90 text-primary-color"
                          : ""
                      }`}
                    >
                      <i className="fa-solid fa-angle-right"></i>
                    </div>
                  </h3>
                  {activeAccordion === "second" && (
                    <div className="accordion-content px-4 lg:px-8 pb-4 transition-transform  duration-300">
                      <p className="text-sm text-para-color md:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Sagittis purus sit amet volutpat consequat
                        mauris. Pulvinar elementum integer enim neque.
                      </p>
                    </div>
                  )}
                </div>

                {/* Accordion for  Sagittis purus sit amet volutpat consequat mauris. */}
                <div className="accordion faq border-accbg bg-white border rounded-xl my-2">
                  <h3
                    className={`text-title-color font-semibold text-xl rounded-xl cursor-pointer flex justify-between items-center border border-white hover:border-border-hover p-4 gap-2 md:px-8 md:py-6 bg-white  ${
                      activeAccordion === "third"
                        ? "active bg-white text-primary-color "
                        : ""
                    }`}
                    onClick={() => toggleAccordion("third")}
                  >
                    Sagittis purus sit amet volutpat consequat mauris.
                    {/* <Image
                      src={arrow}
                      className={`transition-transform  duration-300 ${
                        activeAccordion === "travel" ? "rotate-90" : ""
                      }`}
                      alt="arrow"
                    /> */}
                    <div
                      className={`transition-transform text-sm duration-300 bg-white-color h-6 w-6 rounded-full flex items-center justify-center ${
                        activeAccordion === "third"
                          ? "rotate-90 text-primary-color"
                          : ""
                      }`}
                    >
                      <i className="fa-solid fa-angle-right"></i>
                    </div>
                  </h3>
                  {activeAccordion === "third" && (
                    <div className="accordion-content px-4 lg:px-8 pb-4 transition-transform  duration-300">
                      <p className="text-sm text-para-color md:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Sagittis purus sit amet volutpat consequat
                        mauris. Pulvinar elementum integer enim neque.
                      </p>
                    </div>
                  )}
                </div>

                {/* Accordion for  Sagittis purus sit amet volutpat consequat mauris. */}
                <div className="accordion faq border-accbg bg-white border rounded-xl my-2">
                  <h3
                    className={`text-title-color font-semibold text-xl rounded-xl cursor-pointer flex justify-between items-center border border-white hover:border-border-hover p-4 gap-2 md:px-8 md:py-6 bg-white  ${
                      activeAccordion === "forth"
                        ? "active bg-white text-primary-color "
                        : ""
                    }`}
                    onClick={() => toggleAccordion("forth")}
                  >
                    Sagittis purus sit amet volutpat consequat mauris.
                    {/* <Image
                      src={arrow}
                      className={`transition-transform  duration-300 ${
                        activeAccordion === "travel" ? "rotate-90" : ""
                      }`}
                      alt="arrow"
                    /> */}
                    <div
                      className={`transition-transform text-sm duration-300 bg-white-color h-6 w-6 rounded-full flex items-center justify-center ${
                        activeAccordion === "forth"
                          ? "rotate-90 text-primary-color"
                          : ""
                      }`}
                    >
                      <i className="fa-solid fa-angle-right"></i>
                    </div>
                  </h3>
                  {activeAccordion === "forth" && (
                    <div className="accordion-content px-4 lg:px-8 pb-4 transition-transform  duration-300">
                      <p className="text-sm text-para-color md:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Sagittis purus sit amet volutpat consequat
                        mauris. Pulvinar elementum integer enim neque.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
