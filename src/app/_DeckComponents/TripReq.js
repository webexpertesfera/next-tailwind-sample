"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import req from "../../../public/assets/request.png";

export const TripReq = () => {
  return (
    <section className="relative py-10">
      <div className="lg:bg-tab-bg rounded-3xl   lg:p-12">
        <div className="grid grid-cols-1 items-center lg:grid-cols-3 gap-5 lg:gap-10">
          <div>
            <h2 className="text-2xl xl:text-3xl mb-4 lg:mb-10 text-title-color font-semibold">
              Trip Requests
            </h2>
            <p className="text-base text-para-color leading-normal mb-8">
              Convert qualified visitors into leads with a complete booking
              form. View all user activity, estimates, and flight requests in
              Flight Deck HQ.
            </p>
            <button className="text-white text-base 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
              Get Started
            </button>
          </div>
          <div className="lg:col-span-2 text-center">
            <Image
              src={req}
              className="lg:w-3/4 w-full lg:ml-auto"
              alt="user"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
