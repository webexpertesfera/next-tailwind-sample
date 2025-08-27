"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import flight from "../../../public/assets/fbos1.json";
import hq from "../../../public/assets/fbos2.json";

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
              Create an instant quoting machine on your website or app, with all
              user data and flight requests stored and accessible in real-time. 
              Serve your customers and stakeholders better with embedded charter
              solutions through your brand. Tailor the aircraft, airports, and
              pricing to fit your fleet and service area with a fully
              white-labeled workflow.
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
              Flight Deck HQ
            </h2>
            <p className="text-base font-medium text-para-color leading-normal mb-5">
              Don’t overburden your team with sourcing, quoting, contracts,
              payments, and mechanical recovery - let evoJets handle the charter
              hassle. View your API flight requests on HQ and monitor status
              with your dedicated evoJets rep. Track API activity and user
              behavior with dashboard metrics. Run the cost calculator to view
              instant price estimates and submit manual trip requests directly
              to evoJets.
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
