"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import flight from "../../../public/assets/details.png";
import hq from "../../../public/assets/welcome.png";

export const Utilization = () => {
  return (
    <section className="py-12 relative px-4 md:px-8 lg:py-24">
      <div className="container mx-auto">
        <p className="uppercase text-xs text-primary-color border px-4 py-1 bg-lightbg rounded-3xl border-second-border lg:m-auto  w-max font-semibold">
          Utilization
        </p>
        <h2 className="text-3xl text-title-color lg:text-center xl:text-5xl my-5 lg:mb-16 font-semibold">
          Lorem Ipsum Dolor Sit Amet
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          <div className="lg:pe-24">
            <h2 className="text-2xl text-title-color lg:text-3xl font-semibold mb-8">
              Flight Deck API
            </h2>
            <p className="text-base font-medium text-para-color leading-normal mb-5">
              Install our cost calculator and booking workflow into your client
              portal or app with tailored outputs that fit the needs of your
              user base.  Create a white-labeled landing page on your website
              for your charter flight bookings. Regardless of the
              implementation, Flight Deck API can up your offering to clients
              and put you in direct contact with the experts at evoJets or
              fulfillment.
            </p>
            <button className="text-primary-color font-semibold text-sm 2xl:text-base px-1 py-2 border-b border-slate-300">
              Explore API
            </button>
          </div>
          <div className="text-center">
            <Image className="w-full lg:ml-auto" src={flight} alt="flight" />
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 gap-5 mt-10  lg:mt-20 grid-cols-1 flex flex-col-reverse  items-center pt-8 lg:pt-12">
          <div className="text-center">
            <Image className="w-full" src={hq} alt="hq" />
          </div>
          <div className="lg:pl-24">
            <h2 className="text-2xl text-title-color lg:text-3xl font-semibold mb-8">
              Flight Deck HQ
            </h2>
            <p className="text-base font-medium text-para-color leading-normal mb-5">
              Monitor all API price estimates and flight requests in real-time. 
              Research aircraft, pricing, and trip data to relay to clients, and
              use your dedicated booking portal to submit flight requests to
              evoJets. Flight Deck HQ is a full-service dashboard to view,
              manage.
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
