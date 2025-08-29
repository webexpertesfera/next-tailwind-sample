"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import flight from "../../../public/assets/api.png";
import check from "../../../public/assets/chk.png";

export const Engagements = () => {
  return (
    <section className="bg-hq-bg bg-center lg:bg-left-top bg-cover relative px-4 md:px-8 pt-16 lg:pt-24 pb-56">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center lg:pb-12">
          <div className="lg:pe-24">
            <p className="uppercase text-xs text-primary-color border px-6 py-2 rounded-3xl border-second-border mb-8  w-max font-semibold">
              Get Started
            </p>
            <h2 className="text-3xl text-title-color  xl:text-5xl mb-5 lg:mb-10 font-semibold">
              Popular Engagements
            </h2>

            <p className="text-base text-para-color leading-normal font-medium mb-5">
            Our goal is to tailor the perfect arrangement for your business. No two integrations are the same, and we are flexible with our terms and conditions.

            </p>
            <button className="text-primary-color font-semibold text-sm 2xl:text-base px-1 py-2 border-b border-slate-300">
              Engagement Overview
            </button>
          </div>
          <div className="engage lg:pl-24">
            <div className="bg-accbg rounded-2xl p-4 flex gap-2 items-center mb-2">
              <Image src={check} className="me-2 h-8 w-8" alt="" />
              <div>
                <h6 className="text-lg text-title-color font-semibold">
                  Commission splits
                </h6>
                <p className="text-base  font-medium text-para-color">
                  Earn a share of the net revenue on each completed flight.
                </p>
              </div>
            </div>
            <div className="bg-accbg rounded-2xl p-4 flex gap-2 items-center mb-2">
              <Image src={check} className="me-2 h-8 w-8" alt="" />
              <div>
                <h6 className="text-lg text-title-color font-semibold">
                  Referral fees
                </h6>
                <p className="text-base  font-medium text-para-color">
                  Receive a guaranteed fee upon booking (signed contract)
                </p>
              </div>
            </div>
            <div className="bg-accbg rounded-2xl p-4 flex gap-2 items-center mb-2">
              <Image src={check} className="me-2 h-8 w-8" alt="" />
              <div>
                <h6 className="text-lg text-title-color font-semibold">
                Client discounts
                </h6>
                <p className="text-base  font-medium text-para-color">
                Offer discounts and credits to clients, absorbed 100% by evoJets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
