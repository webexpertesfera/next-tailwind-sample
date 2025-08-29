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
                      We will work with your team to discuss an optimal
                      engagement strategy on an intro call, including technology
                      integrations, user requirements, expected flight volumes,
                      and your desired revenue outcomes.
                    </p>{" "}
                    <p className="text-sm mt-3 text-para-color  font-medium md:text-base">
                      Our API docs can be used to integrate our software by your
                      team. If you prefer, our tech team can handle any web
                      integration.
                    </p>{" "}
                    <p className="text-sm mt-3 text-para-color  font-medium md:text-base">
                      Your team will have access to a dedicated rep for all
                      flight requests, and we will provide demos for evoJets HQ.
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
                      We truly want to partner with your business - this is not
                      just a marketing cliche. Your success is our success, and
                      we will work with your team in whatever ways make you
                      comfortable.
                    </p>{" "}
                    <p className="text-sm mt-3 text-para-color  font-medium md:text-base">
                      You can stay completely in the loop on all flight related
                      matters, or stay out of the process entirely.
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
                      evoJets will handle quoting, contracts, invoices,
                      payments, aircraft sourcing, and everything in between. We
                      take the headache and financial risk associated with every
                      flight, leaving your team stress-free.
                    </p>{" "}
                    <p className="text-sm mt-3 text-para-color  font-medium md:text-base">
                      evoJets HQ provides visibility into every stage of the
                      flight booking process, from initial quote to final
                      itinerary. And your team has a dedicated portal to submit
                      ad-hoc flight requests directly to evoJets.
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
                      We draft contracts in the name of the payer. If your
                      clients are paying, then they must be the ones to sign
                      contracts and remit payment. If your company is the payer,
                      we can draft all contracts for you to sign, making you
                      and/or your company the Client of record.
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
                      For compliance and legal protection purposes, evoJets must
                      communicate directly with the person/entity signing our
                      charter contracts. If your clients are signing, you can
                      remain 100% in the loop on all communication, but we must
                      have direct contact with the signer.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        className="hidden lg:block absolute top-52 left-0 h-96 w-auto"
        src={map}
        alt="map"
      />
    </section>
  );
};
