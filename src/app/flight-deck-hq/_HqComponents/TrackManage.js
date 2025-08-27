"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import flight from "../../../../public/assets/flightdeck-hq1.json";
import research from "../../../../public/assets/flightdeck-hq4.json";
import arrow from "../../../../public/assets/cr-fr.png";
import { useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
export const TrackManage = () => {

  return (
    <section className="bg-bg-hq bg-cover bg-left-top text-white  relative px-4 md:px-8 py-24">
      <div className="container mx-auto">
        <p className="uppercase text-xs text-green-color border px-6 py-2 rounded-3xl border-cyan-800 mb-8 m-auto w-max font-semibold">
          Lead management
        </p>
        <h2 className="text-3xl text-center xl:text-5xl mb-10 font-semibold">
          Track and manage your flight requests
        </h2>
        <p className="text-base text-center lg:w-1/2 m-auto leading-normal mb-10">
          evoJets HQ is a multi-purpose platform built to handle any
          organization’s private flight demand.  Monitor your API activity and
          stay informed with alerts and messages with your evoJets rep.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          <div className="lg:pe-24">
            <h3 className="text-2xl xl:text-3xl mb-6 font-semibold">
              Real-time updates
            </h3>
            <p className="text-base leading-normal mb-8">
              View your flight request data in real-time and track the status of
              the sale. View all quotes submitted to your clients and maintain
              direct communication with evoJets.
            </p>

            <div className="bg-para-color rounded-xl p-4 text-white flex items-center gap-2 mb-2">
              <Image className="h-6 w-6" src={arrow} alt="arrow" />
              <p className="text-base">View granular API request data</p>
            </div>
            <div className="bg-para-color rounded-xl p-4 text-white flex items-center gap-2 mb-2">
              <Image className="h-6 w-6" src={arrow} alt="arrow" />
              <p className="text-base">Follow all sales activity for every lead</p>
            </div>
            <div className="bg-para-color rounded-xl p-4 text-white flex items-center gap-2 mb-2">
              <Image className="h-6 w-6" src={arrow} alt="arrow" />
              <p className="text-base">Receive email alerts at pivotal points</p>
            </div>
            <div className="bg-para-color rounded-xl p-4 text-white flex items-center gap-2 mb-2">
              <Image className="h-6 w-6" src={arrow} alt="arrow" />
              <p className="text-base">Send messages to your evoJets rep</p>
            </div>
          </div>
          <div className="text-center ">
          
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

        <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse lg:gap-5 items-center pt-10">
          <div className="text-center mt-10 lg:mt-0">
          
            <div className="lottie-chart">
                  <Lottie
                    animationData={research}
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
            <h3 className="text-2xl xl:text-3xl mb-6 font-semibold">
            Actionable data
            </h3>
            <p className="text-base leading-normal mb-8">
            Whether you’re using the Fight Deck API on your website or app, or submitting manual requests to evoJets, all your data is at your fingertips on the Dashboard.
            </p>

            <div className="bg-para-color rounded-xl p-4 text-white flex items-center gap-2 mb-2">
              <Image className="h-6 w-6" src={arrow} alt="arrow" />
              <p className="text-base">Analyze all estimate and flight requests</p>
            </div>
            <div className="bg-para-color rounded-xl p-4 text-white flex items-center gap-2 mb-2">
              <Image className="h-6 w-6" src={arrow} alt="arrow" />
              <p className="text-base">Search, sort, and filter by airport</p>
            </div>
            <div className="bg-para-color rounded-xl p-4 text-white flex items-center gap-2 mb-2">
              <Image className="h-6 w-6" src={arrow} alt="arrow" />
              <p className="text-base">Run date-based queries to follow trends</p>
            </div>
            <div className="bg-para-color rounded-xl p-4 text-white flex items-center gap-2 mb-2">
              <Image className="h-6 w-6" src={arrow} alt="arrow" />
              <p className="text-base">Utilize pre-built dashboard widgets </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
