"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import flight from "../../../public/assets/events1.json";
import hq from "../../../public/assets/events2.json";
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
          Add jet charter booking to your checkout flow
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          <div className="lg:pe-24">
            <h2 className="text-2xl text-title-color lg:text-3xl font-semibold mb-8">
              evoJets API
            </h2>
            <p className="text-base font-medium text-para-color leading-normal mb-5">
              Embed a white-labeled flight booking funnel into the booking
              engine on your website or app. Set limits on the airports,
              aircraft, availability, and all other flight data offered in your
              custom flow. Let your users browse and book flights while they
              explore your event or destination.
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
          <div className="lg:pl-24">
            <h2 className="text-2xl text-title-color lg:text-3xl font-semibold mb-8">
              evoJets HQ
            </h2>
            <p className="text-base font-medium text-para-color leading-normal mb-5">
              Monitor all price estimates and flight booking requests generated
              by your users in real-time. Submit ad-hoc flight requests directly
              to evoJets with a dedicated portal. View the progress and status
              of all your flight leads and contact the evoJets rep assigned to
              your account for updates.
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
