"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import flight from "../../../public/assets/travel1.json";
import hq from "../../../public/assets/travel2.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
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
              Integrate our API with your client-facing software or internal
              portal to utilize our flight booking tools in whatever way serves
              your business. Let clients book flights in a white-label workflow
              on your website or app.  Control the design and all Flight Data
              displayed.
            </p>
            <button className="text-primary-color font-semibold text-sm 2xl:text-base px-1 py-2 border-b border-slate-300">
              Explore API
            </button>
          </div>
          <div className="text-center">
            <div className="lottie-chart">
              <Lottie
                animationData={flight}
                loop={true}
                className="w-full lg:ml-auto"
                autoplay={true}
                rendererSettings={{
                  preserveAspectRatio: "xMidYMid slice",
                }}
              />{" "}
            </div>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 gap-5 mt-10  lg:mt-20 grid-cols-1 flex flex-col-reverse  items-center pt-8 lg:pt-12">
          <div className="text-center">
            <div className="lottie-chart">
              <Lottie
                animationData={hq}
                loop={true}
                className="w-full"
                autoplay={true}
                rendererSettings={{
                  preserveAspectRatio: "xMidYMid slice",
                }}
              />{" "}
            </div>
          </div>
          <div className="lg:pl-24">
            <h2 className="text-2xl text-title-color lg:text-3xl font-semibold mb-8">
              Flight Deck HQ
            </h2>
            <p className="text-base font-medium text-para-color leading-normal mb-5">
              Give your reps the gift of HQ, a complete booking solution for
              researching and booking private flights, with a direct connection
              to evoJets, your embedded fulfillment partner. Login to HQ to view
              all API activity, access pricing and research tools, monitor
              progress and communicate with Evo on all existing flights, and
              request new ones.
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
