"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import flight from "../../../public/assets/api.png";
import hq from "../../../public/assets/hq.png";

export const Utilization = () => {
  return (
    <section className="py-12 relative px-4 md:px-8 lg:py-24">
      <div className="container mx-auto">
        <p className="uppercase text-xs text-primary-color border bg-lightbg px-4 py-1 rounded-3xl border-second-border  lg:m-auto  w-max font-semibold">
          Utilization
        </p>
        <h2 className="text-3xl text-title-color mt-5 lg:text-center xl:text-5xl mb-5 lg:mb-16 font-semibold">
          Lorem Ipsum Dolor Sit Amet
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          <div className="lg:pe-24">
            <h2 className="text-2xl text-title-color lg:text-3xl font-semibold mb-8">
              Flight Deck API
            </h2>
            <p className="text-base text-para-color leading-normal mb-5">
              Embed a white-label flight booking workflow into the existing
              booking engine on your website or app.  Allow clients to explore
              fully branded flight solutions to and from your properties. Set
              limits on the airports, aircraft, availability and all other
              flight data offered in your custom form flow.
            </p>
            <button className="text-primary-color font-semibold text-sm 2xl:text-base px-1 py-2 border-b border-slate-300">
              Explore API
            </button>
          </div>
          <div className="text-center">
            <Image
              className="w-full lg:ml-auto"
              src={flight}
              alt="flight"
            />
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 gap-5  mt-10  lg:mt-20 grid-cols-1 flex flex-col-reverse  items-center pt-8 lg:pt-12">
          <div className="text-center">
            <Image className="w-full" src={hq} alt="hq" />
          </div>
          <div className="lg:pl-24">
            <h2 className="text-2xl text-title-color lg:text-3xl font-semibold mb-8">
              Flight Deck HQ
            </h2>
            <p className="text-base text-para-color leading-normal mb-5">
              Monitor all price estimates provided to your users and all hard
              booking requests on Flight Deck HQ, in real-time as they occur.
              View the progress and status of your flight inquiries and contact
              the evoJets rep assigned to your account for updates.
            </p>
            <button className="text-primary-color font-semibold text-sm 2xl:text-base px-1 py-2 border-b border-slate-300">
              Explore HQ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
