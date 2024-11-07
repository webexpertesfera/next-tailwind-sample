"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import flight from "../../../../public/assets/off.png";

export const WhatWeOffer = () => {
  return (
    <div>
      <section className="pb-12 relative px-4 md:px-8  lg:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
            <div className="lg:hidden ">
              <Image
                className="w-11/12 -top-20 relative -right-5 lg:w-2/5 lg:absolute lg:-top-10 lg:right-0"
                src={flight}
                alt="flight"
              />
            </div>
            <div className="lg:pe-24">
              <h2 className="text-3xl text-title-color lg:text-5xl font-semibold mb-8">
                What we offer
              </h2>
              <p className="text-base font-medium text-para-color leading-normal mb-5">
                We provide the two critical components for any organization to
                offer seamless private flight booking - technology and
                fulfillment.
              </p>
              <p className="text-base font-medium text-para-color leading-normal mb-5">
                If your company has clients, members, stakeholders, users, site
                visitors, or anyone in its orbit that flies private, we can help
                you serve that demand (properly).
              </p>
              <p className="text-base font-medium text-para-color leading-normal mb-5">
                Any company can feature a flight booking form on their website
                or app, but without a trusted charter partner to handle the
                flights, requests can be neglected or mishandled.
              </p>
              <p className="text-base font-medium text-para-color leading-normal mb-5">
                evoJets is a household name in private jet charter. Our
                technology backed by nearly 20yrs of industry experience can
                enable any organization to offer reliable private flight booking
                services on its website or app.
              </p>
            </div>
            <div></div>
          </div>
        </div>
        <div className="">
          <Image
            className="w-full hidden lg:block lg:w-2/5 lg:absolute lg:-top-10 lg:right-0"
            src={flight}
            alt="flight"
          />
        </div>
      </section>

      <section className="relative px-4 md:px-8 pt-0 lg:pt-20 pb-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:pb-12 ">
            <div className="lg:pe-20 pb-10 lg:pb-0">
              <h2 className="text-3xl text-title-color  xl:text-5xl mb-5 lg:mb-10 font-semibold">
                Our technology
              </h2>

              <p className="text-base text-para-color leading-normal font-medium mb-5">
                Our software powers the private flight booking process from
                start to finish. With powerful APIs and robust documentation,
                any developer can integrate them into any modern software
                platform.
              </p>
              <button className="text-primary-color  text-sm 2xl:text-base px-1 py-2 border-b border-slate-300">
                View the docs
              </button>
            </div>
            <div className="lg:pl-20">
              <h2 className="text-3xl text-title-color  xl:text-5xl mb-5 lg:mb-10 font-semibold">
                Our company
              </h2>

              <p className="text-base text-para-color leading-normal font-medium mb-5">
                We began as a local charter brokerage in Aspen in 2006. Today we
                offer a range of services for new and seasoned flyers alike,
                from on-demand charter to whole ownership. Our company and
                members of the leadership team have been featured in some of the
                biggest publications in the world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
