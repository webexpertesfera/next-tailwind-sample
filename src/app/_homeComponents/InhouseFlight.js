"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import flight from "../../../public/assets/flight.png";
import deck from "../../../public/assets/deck.png";
import arrow from "../../../public/assets/arw.png";
import { useState } from "react";

export const InhouseFlight = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (accordionId) => {
    setActiveAccordion(activeAccordion === accordionId ? null : accordionId);
  };

  return (
    <section className="bg-gradient-bg  relative px-4 md:px-8 py-24">
      <div className="container mx-auto">
        <p className="uppercase text-xs text-primary-color border px-6 py-2 rounded-3xl border-second-border mb-5 w-max font-semibold">
          Platform
        </p>
        <h2 className="text-3xl xl:text-5xl mb-10 font-semibold">
          Your instant, in-house flight department
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center">
          <div className="text-center lg:col-span-2">
            <Image className="w-full lg:w-4/5" src={flight} alt="flight" />
          </div>
          <div className="">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-8">
              Flight Deck was created by{" "}
              <span className="text-primary-color"> evoJets, </span> and the
              experts at Evo manage all Flight Deck charter requests. 
            </h2>
            <p className="text-base leading-normal mb-5">
              After thousands of flights completed for hotels, travel planners,
              and EAs/PAs, we understand the risk and hassle these partners
              experience in booking flights for clients, employees, and
              stakeholders.
            </p>
            <p className="text-base leading-normal">
              Outfit your organization with the tools to harness its private
              flight demand with evoJets handling contracts, payments, and all
              the operational hassle.  Let your team focus on what they do best,
              and leave the jet charter stress to Flight Deck and evoJets.
            </p>
          </div>
        </div>

        <h2 className="text-3xl xl:text-5xl mb-24 pt-24 font-semibold">
          Who is Flight Deck for?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="">
            <div className="">
              <div className="">
                {/* Accordion for   Travel & Lifestyle Management */}
                <div className="accordion border-accbg border rounded-xl my-2">
                  <h3
                    className={`text-prime-color font-semibold text-xl rounded-xl cursor-pointer flex justify-between items-center  p-4 gap-2 md:px-8 md:py-6 bg-accbg  hover:text-primary-color ${
                      activeAccordion === "travel"
                        ? "active bg-white text-primary-color "
                        : ""
                    }`}
                    onClick={() => toggleAccordion("travel")}
                  >
                    Travel & Lifestyle Management
                    {/* <Image
                      src={arrow}
                      className={`transition-transform  duration-300 ${
                        activeAccordion === "travel" ? "rotate-90" : ""
                      }`}
                      alt="arrow"
                    /> */}
                    <div
                      className={`transition-transform text-sm acc-arrow duration-300 bg-white-color h-6 w-6 rounded-full flex items-center justify-center ${
                        activeAccordion === "travel"
                          ? "rotate-90 bg-primary-color text-white"
                          : ""
                      }`}
                    >
                      <i className="fa-solid fa-angle-right"></i>
                    </div>
                  </h3>
                  {activeAccordion === "travel" && (
                    <div className="accordion-content px-8 py-4 transition-transform  duration-300">
                      <p className="text-sm md:text-base">
                        Empower your reps to research aircraft, view estimated
                        pricing, and send flight requests directly to evoJets,
                        saving hours of time.
                      </p>
                      <div className="banenr-btns pt-6 flex gap-5">
                        <button className="text-white text-base 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
                          Get Started
                        </button>
                        <button className="text-primary-color  text-sm 2xl:text-base px-1 py-2 border-b border-slate-300">
                          Learn More
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Accordion for Real Estate & Hospitality */}
                <div className="accordion border-accbg border rounded-xl my-2">
                  <h3
                    className={`text-prime-color font-semibold text-xl rounded-xl cursor-pointer flex justify-between items-center  p-4 gap-2 md:px-8 md:py-6 bg-accbg  hover:text-primary-color ${
                      activeAccordion === "estate"
                        ? "active bg-white border-b-0"
                        : ""
                    }`}
                    onClick={() => toggleAccordion("estate")}
                  >
                    Real Estate & Hospitality
                    <div
                      className={`transition-transform text-sm acc-arrow duration-300 bg-white-color h-6 w-6 rounded-full flex items-center justify-center ${
                        activeAccordion === "estate"
                          ? "rotate-90 bg-primary-color text-white"
                          : ""
                      }`}
                    >
                      <i className="fa-solid fa-angle-right"></i>
                    </div>
                  </h3>
                  {activeAccordion === "estate" && (
                    <div className="accordion-content px-8 py-4 transition-transform  duration-2000">
                      <p className="text-sm md:text-base">
                        Unlock your property’s potential with a fully-branded
                        private flight booking engine built right into your
                        reservation system.
                      </p>
                      <div className="banenr-btns pt-6 flex gap-5">
                        <button className="text-white text-base 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
                          Get Started
                        </button>
                        <button className="text-primary-color  text-sm 2xl:text-base px-1 py-2 border-b border-slate-300">
                          Learn More
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Accordion for Networks & Marketplaces */}
                <div className="accordion border-accbg border rounded-xl my-2">
                  <h3
                    className={`text-prime-color font-semibold text-xl rounded-xl cursor-pointer flex justify-between items-center  p-4 gap-2 md:px-8 md:py-6 bg-accbg  hover:text-primary-color ${
                      activeAccordion === "network"
                        ? "active bg-white border-b-0"
                        : ""
                    }`}
                    onClick={() => toggleAccordion("network")}
                  >
                    Networks & Marketplaces
                    <div
                      className={`transition-transform text-sm acc-arrow duration-300 bg-white-color h-6 w-6 rounded-full flex items-center justify-center ${
                        activeAccordion === "network"
                          ? "rotate-90 bg-primary-color text-white"
                          : ""
                      }`}
                    >
                      <i className="fa-solid fa-angle-right"></i>
                    </div>
                  </h3>
                  {activeAccordion === "network" && (
                    <div className="accordion-content px-8 py-4">
                      <p className="text-sm md:text-base">
                        Enhance your ecosystem with a streamlined solution for
                        flight pairing, sharing, and whole-aircraft charter for
                        your members.
                      </p>
                      <div className="banenr-btns pt-6 flex gap-5">
                        <button className="text-white text-base 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
                          Get Started
                        </button>
                        <button className="text-primary-color  text-sm 2xl:text-base px-1 py-2 border-b border-slate-300">
                          Learn More
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Accordion for FBOs & Operators */}
                <div className="accordion border-accbg border rounded-xl my-2">
                  <h3
                    className={`text-prime-color font-semibold text-xl rounded-xl cursor-pointer flex justify-between items-center  p-4 gap-2 md:px-8 md:py-6 bg-accbg  hover:text-primary-color ${
                      activeAccordion === "operator"
                        ? "active bg-white border-b-0"
                        : ""
                    }`}
                    onClick={() => toggleAccordion("operator")}
                  >
                    FBOs & Operators
                    <div
                      className={`transition-transform text-sm acc-arrow duration-300 bg-white-color h-6 w-6 rounded-full flex items-center justify-center ${
                        activeAccordion === "operator"
                          ? "rotate-90 bg-primary-color text-white"
                          : ""
                      }`}
                    >
                      <i className="fa-solid fa-angle-right"></i>
                    </div>
                  </h3>
                  {activeAccordion === "operator" && (
                    <div className="accordion-content px-8 py-4">
                      <p className="text-sm md:text-base">
                        Convert your website into a charter sales lead engine
                        with Flight Deck API, and leverage HQ for supplemental
                        lift and off-fleet requests.
                      </p>
                      <div className="banenr-btns pt-6 flex gap-5">
                        <button className="text-white text-base 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
                          Get Started
                        </button>
                        <button className="text-primary-color  text-sm 2xl:text-base px-1 py-2 border-b border-slate-300">
                          Learn More
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Accordion for Agents & Advisors */}
                <div className="accordion border-accbg border rounded-xl my-2">
                  <h3
                    className={`text-prime-color font-semibold text-xl rounded-xl cursor-pointer flex justify-between items-center  p-4 gap-2 md:px-8 md:py-6 bg-accbg  hover:text-primary-color ${
                      activeAccordion === "agents"
                        ? "active bg-white border-b-0"
                        : ""
                    }`}
                    onClick={() => toggleAccordion("agents")}
                  >
                    Agents & Advisors
                    <div
                      className={`transition-transform text-sm acc-arrow duration-300 bg-white-color h-6 w-6 rounded-full flex items-center justify-center ${
                        activeAccordion === "agents"
                          ? "rotate-90 bg-primary-color text-white"
                          : ""
                      }`}
                    >
                      <i className="fa-solid fa-angle-right"></i>
                    </div>
                  </h3>
                  {activeAccordion === "agents" && (
                    <div className="accordion-content px-8 py-4">
                      <p className="text-sm md:text-base">
                        Deepen your connection with clients by being their first
                        point of contact for private flight charters with
                        risk-free flight fulfillment by evoJets.
                      </p>
                      <div className="banenr-btns pt-6 flex gap-5">
                        <button className="text-white text-base 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
                          Get Started
                        </button>
                        <button className="text-primary-color  text-sm 2xl:text-base px-1 py-2 border-b border-slate-300">
                          Learn More
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Accordion for Events & Destinations */}
                <div className="accordion border-accbg border rounded-xl my-2">
                  <h3
                    className={`text-prime-color font-semibold text-xl rounded-xl cursor-pointer flex justify-between items-center  p-4 gap-2 md:px-8 md:py-6 bg-accbg  hover:text-primary-color ${
                      activeAccordion === "events"
                        ? "active bg-white border-b-0"
                        : ""
                    }`}
                    onClick={() => toggleAccordion("events")}
                  >
                    Events & Destinations
                    <div
                      className={`transition-transform text-sm acc-arrow duration-300 bg-white-color h-6 w-6 rounded-full flex items-center justify-center ${
                        activeAccordion === "events"
                          ? "rotate-90 bg-primary-color text-white"
                          : ""
                      }`}
                    >
                      <i className="fa-solid fa-angle-right"></i>
                    </div>
                  </h3>
                  {activeAccordion === "events" && (
                    <div className="accordion-content px-8 py-4">
                      <p className="text-sm md:text-base">
                        Equip your website or mobile app with embedded private
                        flight booking to your event or destination - flights
                        fulfilled by evoJets.
                      </p>
                      <div className="banenr-btns pt-6 flex gap-5">
                        <button className="text-white text-base 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
                          Get Started
                        </button>
                        <button className="text-primary-color  text-sm 2xl:text-base px-1 py-2 border-b border-slate-300">
                          Learn More
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <Image
              className="w-full lg:w-4/5 lg:ml-auto"
              src={deck}
              alt="deck"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
