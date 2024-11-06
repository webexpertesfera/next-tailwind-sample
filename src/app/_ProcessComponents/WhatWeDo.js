"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import map from "../../../public/assets/map.png";
import hq from "../../../public/assets/flight-deck.png";
import { useState } from "react";

export const WhatWeDo = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (accordionId) => {
    setActiveAccordion(activeAccordion === accordionId ? null : accordionId);
  };
  return (
    <section className="py-12 relative px-4 md:px-8 lg:py-24">
      <div className="container mx-auto">
        <p className="uppercase text-xs text-primary-color border px-4 py-1 bg-lightbg rounded-3xl border-second-border  w-max font-semibold">
          What we offer
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
          <div className="lg:pe-24">
            <h2 className="text-3xl text-title-color lg:text-5xl mt-6 font-semibold lg:my-8">
              Our Process
            </h2>
          </div>
          <div className="lg:col-span-2">   
            <div className="">
              {/* Accordion for  Onboard */}
              <div className="accordion border-accbg border rounded-xl my-2">
                <h3
                  className={`text-title-color font-semibold text-xl rounded-xl cursor-pointer flex justify-between items-center  p-4 gap-2 md:px-8 md:py-6 bg-accbg  hover:text-primary-color ${
                    activeAccordion === "onboard"
                      ? "active bg-white text-primary-color "
                      : ""
                  }`}
                  onClick={() => toggleAccordion("onboard")}
                >
                  Onboarding
                </h3>
                {activeAccordion === "onboard" && (
                  <div className="accordion-content px-4 lg:px-8 pb-4 transition-transform  duration-300">
                    <p className="text-sm text-para-color  font-medium md:text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Sagittis purus sit amet volutpat consequat mauris.
                      Pulvinar elementum integer enim neque.
                    </p>
                  </div>
                )}
              </div>
              {/* Accordion for  collaborate */}
              <div className="accordion border-accbg border rounded-xl my-2">
                <h3
                  className={`text-title-color font-semibold text-xl rounded-xl cursor-pointer flex justify-between items-center  p-4 gap-2 md:px-8 md:py-6 bg-accbg  hover:text-primary-color ${
                    activeAccordion === "collab"
                      ? "active bg-white text-primary-color "
                      : ""
                  }`}
                  onClick={() => toggleAccordion("collab")}
                >
                  Collaboration
                </h3>
                {activeAccordion === "collab" && (
                  <div className="accordion-content px-4 lg:px-8 pb-4 transition-transform  duration-300">
                    <p className="text-sm text-para-color  font-medium md:text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Sagittis purus sit amet volutpat consequat mauris.
                      Pulvinar elementum integer enim neque.
                    </p>
                  </div>
                )}
              </div>

              {/* Accordion for   Flight booking */}
              <div className="accordion border-accbg border rounded-xl my-2">
                <h3
                  className={`text-title-color font-semibold text-xl rounded-xl cursor-pointer flex justify-between items-center  p-4 gap-2 md:px-8 md:py-6 bg-accbg  hover:text-primary-color ${
                    activeAccordion === "booking"
                      ? "active bg-white text-primary-color "
                      : ""
                  }`}
                  onClick={() => toggleAccordion("booking")}
                >
                  Flight booking
                </h3>
                {activeAccordion === "booking" && (
                  <div className="accordion-content px-4 lg:px-8 pb-4 transition-transform  duration-300">
                    <p className="text-sm text-para-color  font-medium md:text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Sagittis purus sit amet volutpat consequat mauris.
                      Pulvinar elementum integer enim neque.
                    </p>
                  </div>
                )}
              </div>

              {/* Accordion for   Client interaction */}
              <div className="accordion border-accbg border rounded-xl my-2">
                <h3
                  className={`text-title-color font-semibold text-xl rounded-xl cursor-pointer flex justify-between items-center  p-4 gap-2 md:px-8 md:py-6 bg-accbg  hover:text-primary-color ${
                    activeAccordion === "interaction"
                      ? "active bg-white text-primary-color "
                      : ""
                  }`}
                  onClick={() => toggleAccordion("interaction")}
                >
                  Client interaction
                </h3>
                {activeAccordion === "interaction" && (
                  <div className="accordion-content px-4 lg:px-8 pb-4 transition-transform  duration-300">
                    <p className="text-sm text-para-color  font-medium md:text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Sagittis purus sit amet volutpat consequat mauris.
                      Pulvinar elementum integer enim neque.
                    </p>
                  </div>
                )}
              </div>

               {/* Accordion for   Legal */}
               <div className="accordion border-accbg border rounded-xl my-2">
                <h3
                  className={`text-title-color font-semibold text-xl rounded-xl cursor-pointer flex justify-between items-center  p-4 gap-2 md:px-8 md:py-6 bg-accbg  hover:text-primary-color ${
                    activeAccordion === "legal"
                      ? "active bg-white text-primary-color "
                      : ""
                  }`}
                  onClick={() => toggleAccordion("legal")}
                >
                 Legal
                </h3>
                {activeAccordion === "legal" && (
                  <div className="accordion-content px-4 lg:px-8 pb-4 transition-transform  duration-300">
                    <p className="text-sm text-para-color font-medium md:text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Sagittis purus sit amet volutpat consequat mauris.
                      Pulvinar elementum integer enim neque.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image className="hidden lg:block absolute top-52 left-0 h-96 w-auto" src={map} alt="map" />
    </section>
  );
};
