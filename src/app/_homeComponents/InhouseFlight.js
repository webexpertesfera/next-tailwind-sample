"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import flight from "../../../public/assets/lottie2.json";
import estate from "../../../public/assets/estate.png";
import deck from "../../../public/assets/deck.png";
import trip from "../../../public/assets/trip.png";
import fbo from "../../../public/assets/fboo.png";
import destination from "../../../public/assets/destination.png";
import agent from "../../../public/assets/agent.png";
import { useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
export const InhouseFlight = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (accordionId) => {
    setActiveAccordion(activeAccordion === accordionId ? null : accordionId);
  };

  const getAccordionImages = (key) => {
    if (!activeAccordion) {
      return deck;
    }
    switch (key) {
      case "travel":
        return flight;
        break;
      case "estate":
        return estate;
        break;
      case "network":
        return trip;
        break;
      case "operator":
        return fbo;
        break;
      case "agents":
        return agent;
        break;
      case "events":
        return destination;
        break;
      default:
        return flight;
        break;
    }
  };

  return (
    <section className="bg-gradient-bg py-12 relative px-4 md:px-8 lg:py-24">
      <div className="container mx-auto">
        <p className="uppercase text-xs text-primary-color border px-6 py-2 rounded-3xl border-second-border mb-5 w-max font-semibold">
          Platform
        </p>
        <h2 className="text-3xl text-title-color xl:text-5xl mb-10 font-semibold">
          The first and only private jet booking software with built-in
          fulfillment.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center">
          <div className="text-center lg:col-span-2">
            {/* <Image className="w-full lg:w-4/5" src={flight} alt="flight" /> */}
            <div className="lottie-chart pb-4">
              <Lottie
                animationData={flight}
                loop={true}
                className="w-full lg:w-4/5"
                autoplay={true}
                rendererSettings={{
                  preserveAspectRatio: "xMidYMid slice",
                }}
              />{" "}
            </div>
          </div>
          <div className="">
            <h2 className="text-2xl text-title-color lg:text-3xl font-semibold mb-8">
              Our mission is to simplify the private jet booking process for
              non-aviation organizations.
            </h2>
            <p className="text-base text-para-color leading-normal mb-5">
              With thousands of flights completed for concierges, travel
              planners, and other B2B partners, we understand the risk and
              hassle they experience when booking flights for clients,
              employees, and stakeholders.
            </p>
            <p className="text-base text-para-color leading-normal">
              Outfit your organization with the tools to harness its private
              flight demand, with{" "}
              <span className="text-primary-color">evoJets </span> handling
              contracts, payments, aircraft sourcing, and all the logistical
              headaches. Let your team focus on what they do best, and leave the
              jet charter stress to evoJets.
            </p>
          </div>
        </div>

        <h2 className="text-3xl text-title-color xl:text-5xl pt-12 mb-6 lg:mb-24 lg:pt-24 font-semibold">
          Does your company interact with private aviation clients?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="">
            <div className="">
              <div className="">
                {/* Accordion for   Travel & Lifestyle Management */}
                <div className="accordion border-accbg border rounded-xl my-2">
                  <h3
                    className={`text-title-color font-semibold text-xl rounded-xl cursor-pointer flex justify-between items-center  p-4 gap-2 md:px-8 md:py-6 bg-accbg  hover:text-primary-color ${
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
                    <div className="accordion-content px-4 lg:px-8 py-4 transition-transform  duration-300">
                      <p className="text-sm text-para-color md:text-base">
                        Empower your reps to research aircraft, view estimated
                        pricing, and send flight requests directly to evoJets,
                        saving hours of time.
                      </p>
                      <div className="banenr-btns pt-6 flex gap-5">
                        <button className="text-white text-base 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
                          Contact Sales
                        </button>
                        <button className="text-primary-color  text-sm 2xl:text-base px-1 py-2 border-b border-slate-300">
                          Read More
                        </button>
                      </div>
                      <Image
                        className="w-full mt-8 mb-4 lg:hidden"
                        src={flight}
                        alt="flight"
                      />
                    </div>
                  )}
                </div>

                {/* Accordion for Real Estate & Hospitality */}
                <div className="accordion border-accbg border rounded-xl my-2">
                  <h3
                    className={`text-title-color font-semibold text-xl rounded-xl cursor-pointer flex justify-between items-center  p-4 gap-2 md:px-8 md:py-6 bg-accbg  hover:text-primary-color ${
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
                    <div className="accordion-content px-4 lg:px-8 py-4 transition-transform  duration-2000">
                      <p className="text-sm text-para-color md:text-base">
                        Unlock your property’s potential with a fully-branded
                        private flight booking engine built right into your
                        reservation system.
                      </p>
                      <div className="banenr-btns pt-6 flex gap-5">
                        <button className="text-white text-base 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
                          Contact Sales
                        </button>
                        <button className="text-primary-color  text-sm 2xl:text-base px-1 py-2 border-b border-slate-300">
                          Read More
                        </button>
                      </div>
                      <Image
                        className="w-full mb-4 mt-8 lg:hidden"
                        src={estate}
                        alt="estate"
                      />
                    </div>
                  )}
                </div>

                {/* Accordion for Networks & Marketplaces */}
                <div className="accordion border-accbg border rounded-xl my-2">
                  <h3
                    className={`text-title-color font-semibold text-xl rounded-xl cursor-pointer flex justify-between items-center  p-4 gap-2 md:px-8 md:py-6 bg-accbg  hover:text-primary-color ${
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
                    <div className="accordion-content  px-4 lg:px-8 py-4">
                      <p className="text-sm text-para-color md:text-base">
                        Enhance your ecosystem with a streamlined solution for
                        flight pairing, sharing, and whole-aircraft charter for
                        your members.
                      </p>
                      <div className="banenr-btns pt-6 flex gap-5">
                        <button className="text-white text-base 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
                          Contact Sales
                        </button>
                        <button className="text-primary-color  text-sm 2xl:text-base px-1 py-2 border-b border-slate-300">
                          Read More
                        </button>
                      </div>
                      <Image
                        className="w-full mt-8 mb-4 lg:hidden"
                        src={trip}
                        alt="trip"
                      />
                    </div>
                  )}
                </div>

                {/* Accordion for FBOs & Operators */}
                <div className="accordion border-accbg border rounded-xl my-2">
                  <h3
                    className={`text-title-color font-semibold text-xl rounded-xl cursor-pointer flex justify-between items-center  p-4 gap-2 md:px-8 md:py-6 bg-accbg  hover:text-primary-color ${
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
                    <div className="accordion-content px-4 lg:px-8 py-4">
                      <p className="text-sm text-para-color md:text-base">
                        Convert your website into a charter sales lead engine
                        with the evoJets API, and leverage evoJets HQ for
                        supplemental lift and off-fleet requests.
                      </p>
                      <div className="banenr-btns pt-6 flex gap-5">
                        <button className="text-white text-base 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
                          Contact Sales
                        </button>
                        <button className="text-primary-color  text-sm 2xl:text-base px-1 py-2 border-b border-slate-300">
                          Read More
                        </button>
                      </div>
                      <Image
                        className="w-full mt-8 mb-4 lg:hidden"
                        src={fbo}
                        alt="fbo"
                      />
                    </div>
                  )}
                </div>

                {/* Accordion for Agents & Advisors */}
                <div className="accordion border-accbg border rounded-xl my-2">
                  <h3
                    className={`text-title-color font-semibold text-xl rounded-xl cursor-pointer flex justify-between items-center  p-4 gap-2 md:px-8 md:py-6 bg-accbg  hover:text-primary-color ${
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
                    <div className="accordion-content lg:px-8 px-4 py-4">
                      <p className="text-sm text-para-color md:text-base">
                        Deepen your connection with clients by being their first
                        point of contact for private flight charters with
                        risk-free flight fulfillment by evoJets.
                      </p>
                      <div className="banenr-btns pt-6 flex gap-5">
                        <button className="text-white text-base 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
                          Contact Sales
                        </button>
                        <button className="text-primary-color  text-sm 2xl:text-base px-1 py-2 border-b border-slate-300">
                          Read More
                        </button>
                      </div>
                      <Image
                        className="w-full mt-8 mb-4 lg:hidden"
                        src={agent}
                        alt="agent"
                      />
                    </div>
                  )}
                </div>

                {/* Accordion for Events & Destinations */}
                <div className="accordion border-accbg border rounded-xl my-2">
                  <h3
                    className={`text-title-color font-semibold text-xl rounded-xl cursor-pointer flex justify-between items-center  p-4 gap-2 md:px-8 md:py-6 bg-accbg  hover:text-primary-color ${
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
                    <div className="accordion-content lg:px-8 px-4 py-4">
                      <p className="text-sm text-para-color md:text-base">
                      Equip your website or mobile app with embedded private flight booking to your event or destination with all flights fulfilled by evoJets.

                      </p>
                      <div className="banenr-btns pt-6 flex gap-5">
                        <button className="text-white text-base 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
                          Contact Sales
                        </button>
                        <button className="text-primary-color  text-sm 2xl:text-base px-1 py-2 border-b border-slate-300">
                          Read More
                        </button>
                      </div>
                      <Image
                        className="w-full mt-8 mb-4 lg:hidden"
                        src={destination}
                        alt="destination"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-2">
            <Image
              className="w-full lg:w-4/5 lg:ml-auto"
              src={getAccordionImages(activeAccordion)}
              alt="deck"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
