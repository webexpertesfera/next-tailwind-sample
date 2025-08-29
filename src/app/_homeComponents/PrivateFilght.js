"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import flight from "../../../public/assets/lottie3.json";
import research from "../../../public/assets/research.png";
import arrow from "../../../public/assets/arw.png";
import { useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
export const PrivateFlight = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (accordionId) => {
    setActiveAccordion(activeAccordion === accordionId ? null : accordionId);
  };

  return (
    <section className="bg-plain-bg bg-cover bg-left-top text-white  relative px-4 md:px-8 py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-center">
          <div className="lg:col-span-2">
            <p className="uppercase text-xs text-green-color border px-6 py-2 rounded-3xl border-cyan-800 mb-8 w-max font-semibold">
              evoJets API
            </p>
            <h2 className="text-3xl xl:text-5xl mb-10 font-semibold">
              Flexible, powerful private flight booking software
            </h2>
            <p className="text-base leading-normal mb-5">
              Create a seamless booking experience on your existing website or
              app. Serve instant, accurate pricing and aircraft detail to users
              in a fully white-labeled workflow.
            </p>
            <p className="text-base leading-normal">
              No developer? No problem. Our team can create a fully customized
              workflow on your platform, tailored to your aesthetic and
              conversion goals.
            </p>
            <div className="banenr-btns pt-6 flex gap-5">
              <button className="text-white text-base 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
                Explore API
              </button>
            </div>
          </div>
          <div className="text-center lg:col-span-3">
            <div className="lottie-chart pb-4">
              <Lottie
                animationData={flight}
                loop={true}
                className="w-full lg:w-4/5 lg:ml-auto"
                autoplay={true}
                rendererSettings={{
                  preserveAspectRatio: "xMidYMid slice",
                }}
              />{" "}
            </div>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-5 flex flex-col-reverse lg:gap-5 items-center pt-20">
          <div className="text-center mt-10 lg:mt-0 lg:col-span-3">
            <Image className="w-full lg:w-4/5" src={research} alt="research" />
          </div>
          <div className="lg:col-span-2">
            <p className="uppercase text-xs text-green-color border px-6 py-2 rounded-3xl border-cyan-800 mb-8 w-max font-semibold">
              evoJets HQ
            </p>
            <h2 className="text-3xl xl:text-5xl mb-10 font-semibold">
              Research, book, and manage flight requests
            </h2>
            <p className="text-base leading-normal mb-5">
              Login to HQ to view your API flight requests and monitor evoJets’
              booking progress. Submit new flight requests directly to evoJets
              using a dedicated workflow.
            </p>
            <p className="text-base leading-normal">
              The tools of the private jet trade at the push of a button.
              evoJets HQ provides the essential resources your people need to
              serve real-time private flight data to customers.
            </p>
            <div className="banenr-btns pt-6 flex gap-5">
              <button className="text-white text-base 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
                Explore HQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
