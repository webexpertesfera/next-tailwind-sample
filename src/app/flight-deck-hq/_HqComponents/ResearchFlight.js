"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import flight from "../../../../public/assets/saving.png";
import research from "../../../../public/assets/booking.png";
import arrow from "../../../../public/assets/chk.png";

export const ResearchFlight = () => {
  return (
    <section className="bg-tab-bg  relative px-4 md:px-8 pt-24 pb-44">
      <div className="container mx-auto">
        <p className="uppercase text-xs text-primary-color border px-4 py-1 rounded-3xl border-second-border bg-white mb-8 m-auto w-max font-semibold">
          New business
        </p>
        <h2 className="text-3xl text-center xl:text-5xl mb-8 text-title-color font-semibold">
          Research flights and send requests to evoJets
        </h2>
        <p className="text-base text-center text-para-color lg:w-1/2 m-auto leading-normal mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
          vivamus arcu felis bibendum ut tristique et.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          <div className="lg:pe-24">
            <h3 className="text-2xl text-title-color xl:text-3xl mb-6 font-semibold">
              Time-saving tools
            </h3>
            <p className="text-base text-para-color leading-normal mb-8">
              Don’t waste time waiting for quotes. Give your team the tools to
              deliver pricing and aircraft data to clients immediately with the
              HQ Calculator.
            </p>

            <div className="bg-lightbg rounded-xl p-4 text-para-color flex items-center gap-2 mb-2">
              <Image className="h-6 w-6" src={arrow} alt="arrow" />
               <p className="text-base font-medium">Search over 14,000 airports globally</p>
            </div>
            <div className="bg-lightbg  rounded-xl p-4 text-para-color flex items-center gap-2 mb-2">
              <Image className="h-6 w-6" src={arrow} alt="arrow" />
              <p className="text-base font-medium">
              Generate unlimited price estimates
              </p>
            </div>
            <div className="bg-lightbg   rounded-xl p-4 text-para-color flex items-center gap-2 mb-2">
              <Image className="h-6 w-6" src={arrow} alt="arrow" />
              <p className="text-base font-medium">
              Embedded flight request form
              </p>
            </div>
            <div className="bg-lightbg rounded-xl p-4 text-para-color flex items-center gap-2 mb-2">
              <Image className="h-6 w-6" src={arrow} alt="arrow" />
              <p className="text-base font-medium">Send messages to your evoJets rep</p>
            </div>
          </div>
          <div className="text-center ">
            <Image className="w-full lg:ml-auto" src={flight} alt="flight" />
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse lg:gap-5 items-center pt-0">
          <div className="text-center mt-10 lg:mt-0">
            <Image className="w-full " src={research} alt="actionable" />
          </div>
          <div className="lg:pl-24">
            <h3 className="text-2xl xl:text-3xl text-title-color mb-6 font-semibold">
            Integrated booking
            </h3>
            <p className="text-base text-para-color leading-normal mb-8">
            Hand the request off to evoJets right from the HQ Calculator.  Run price estimates and deliver info to clients, then click ‘send’ for evoJets to handle the rest.
            </p>

            <div className="bg-lightbg rounded-xl p-4 text-para-color flex items-center gap-2 mb-2">
              <Image className="h-6 w-6" src={arrow} alt="arrow" />
               <p className="text-base font-medium">Send directly to your dedicated rep</p>
            </div>
            <div className="bg-lightbg rounded-xl p-4 text-para-color flex items-center gap-2 mb-2">
              <Image className="h-6 w-6" src={arrow} alt="arrow" />
               <p className="text-base font-medium">Add commission detail and booking notes</p>
            </div>
            <div className="bg-lightbg rounded-xl p-4 text-para-color flex items-center gap-2 mb-2">
              <Image className="h-6 w-6" src={arrow} alt="arrow" />
               <p className="text-base font-medium">Seamless sending from HQ Calculator</p>
            </div>
            <div className="bg-lightbg rounded-xl p-4 text-para-color flex items-center gap-2 mb-2">
              <Image className="h-6 w-6" src={arrow} alt="arrow" />
               <p className="text-base font-medium">Immediate delivery to Evo for handling</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
