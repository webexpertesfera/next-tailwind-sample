"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import network from "../../../public/assets/network.png";
import trusted from "../../../public/assets/trusted.png";
import integration from "../../../public/assets/integration.png";
import power from "../../../public/assets/power.png";
import split from "../../../public/assets/split.png";

export const WhyEvojets = () => {
  return (
    <section className="bg-gradient-top  relative px-4 md:px-8 lg:py-24 py-12 pb-56">
      <div className="container mx-auto">
        <p className="uppercase text-center text-xs text-primary-color border px-6 py-2 rounded-3xl border-second-border mb-8 w-max m-auto font-semibold">
          Why evoJets
        </p>
        <h2 className="text-3xl xl:text-5xl mb-14 font-semibold text-center lg:w-3/5 m-auto">
          The first and only private jet booking software with built-in
          fulfillment.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
          <div>
            <div className="flex gap-5">
              <div className="flex-none w-24 xl:w-30">
                <Image className="" src={trusted} alt="trusted" />
              </div>
              <div className="grow pt-3">
                <h4 className="text-xl lg:text-2xl font-medium mb-3">
                  Trusted charter partner
                </h4>
                <p className="text-base leading-normal mb-5 lg:w-4/5">
                  Hand the transaction over to the professionals at evoJets to
                  manage the{" "}
                  <Link href="#" className="text-primary-color underline">
                    full lifecycle{" "}
                  </Link>{" "}
                  of your flight, including aircraft sourcing, payments, flight
                  following, and more.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-5">
              <div className="flex-none w-24 xl:w-30">
                <Image className="" src={network} alt="trusted" />
              </div>
              <div className="grow pt-3">
                <h4 className="text-xl lg:text-2xl font-medium mb-3">
                  Network effects
                </h4>
                <p className="text-base leading-normal mb-5 lg:w-4/5">
                  Leverage the
                  <Link href="#" className="text-primary-color underline">
                    aggregate demand
                  </Link>{" "}
                  of evoJets and Flight Deck to lower costs, reduce emissions,
                  and increase the efficiency of your private flight bookings.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-5">
              <div className="flex-none w-24 xl:w-30">
                <Image className="" src={integration} alt="trusted" />
              </div>
              <div className="grow pt-3">
                <h4 className="text-xl lg:text-2xl font-medium mb-3">
                  Limitless integration options
                </h4>
                <p className="text-base leading-normal mb-5 lg:w-4/5">
                  Deploy our APIs on your website, ERP, or mobile app however
                  you choose with our detailed
                  <Link href="#" className="text-primary-color underline">
                    developer docs
                  </Link>{" "}
                  packed with code snippets and live demos.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-5">
              <div className="flex-none w-24 xl:w-30">
                <Image className="" src={power} alt="trusted" />
              </div>
              <div className="grow pt-3">
                <h4 className="text-xl lg:text-2xl font-medium mb-3">
                  Powerful, actionable data
                </h4>
                <p className="text-base leading-normal mb-5 lg:w-4/5">
                  Gain real-time insights into customer behavior with
                  <Link href="#" className="text-primary-color underline">
                    dashboard analytics,
                  </Link>{" "}
                  and instantly respond to private flight inquiries with
                  powerful{" "}
                  <Link href="#" className="text-primary-color underline">
                    research tools.{" "}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-2 gap-5  flex flex-col-reverse mt-10  lg:mt-20 items-center">
          <div className="text-center">
            <Image className="w-full lg:w-4/5" src={split} alt="flight" />
          </div>
          <div className="">
            <p className="uppercase text-xs text-primary-color border px-6 py-2 rounded-3xl border-second-border mb-8 w-max font-semibold">
              Engagement
            </p>
            <h2 className="text-3xl xl:text-5xl mb-10 font-semibold">
              Custom account configurations
            </h2>
            <p className="text-base leading-normal mb-5">
              Flight Deck helps any organization navigate the private jet
              process and provide best-in-class charter services to customers
              and stakeholders. Whether your business uses private flights
              internally for employees or books flights on behalf of customers,
              Flight Deck can improve the process.
            </p>
            <p className="text-base leading-normal font-medium">
              <Link href="#" className="text-primary-color underline">
                {" "}
                Contact us
              </Link>{" "}
              to discuss your integration and what kind of account setup will
              best suit your needs.
            </p>
            <div className="banenr-btns pt-6 flex gap-5">
              <button className="text-white text-base 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
                Explore Engagement
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
