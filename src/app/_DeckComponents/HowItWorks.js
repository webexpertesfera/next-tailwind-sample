"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import network from "../../../public/assets/network.png";

export const HowItWorks = () => {
  return (
    <section className=" relative px-4 md:px-8 pt-20 lg:py-24">
      <div className="container mx-auto">
        <p className="uppercase  text-xs text-primary-color bg-lightbg border px-6 py-2 rounded-3xl border-second-border mb-8 w-max font-semibold">
          How it works
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
          <div>
            <h2 className="text-3xl xl:text-5xl lg:mb-14 text-title-color font-semibold">
              Brokerage-as-a-service
            </h2>
          </div>
          <div>
            <p className="text-base text-para-color leading-normal mb-5 lg:w-4/5">
              We provide the essential software components for end-to-end jet
              charter booking. Pre-qualify users with instant, accurate prices
              and monitor everything in
              <Link href="#" className="text-primary-color underline ms-1">
                evoJets HQ.
              </Link>{" "}
            </p>
            <p className="text-base text-para-color leading-normal mb-5 lg:w-4/5">
              With our four efficient endpoints, any modern digital property can
              feature an inbound private flight lead funnel, with evoJets there
              for fulfillment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
