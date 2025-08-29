"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import flight from "../../../public/assets/networks.json";
import hq from "../../../public/assets/networks1.json";
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
          Enhance your ecosystem with embedded flight booking
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          <div className="lg:pe-24">
            <h2 className="text-2xl text-title-color lg:text-3xl font-semibold mb-8">
              evoJets API
            </h2>
            <p className="text-base font-medium text-para-color leading-normal mb-5">
              Install our booking flow on your mobile app with tailored results
              for your users, or create a white-labeled page on your website to
              capture charter flight requests. Regardless of the implementation,
              our API services will up your offering to clients and put you in
              direct contact with the experts at evoJets for fulfillment.
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
        <div className="lg:grid lg:grid-cols-2 gap-5 mt-5  lg:mt-10 grid-cols-1 flex flex-col-reverse  items-center pt-8 lg:pt-12">
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
              evoJets HQ
            </h2>
            <p className="text-base font-medium text-para-color leading-normal mb-5">
              Monitor your API price estimates and flight requests in real-time.
              Gain insights from historical trip request data and use our
              dedicated booking portal to submit flight requests to evoJets. HQ
              is a full-service platform to view, manage, and create flight
              requests, all handled by evoJets.
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
