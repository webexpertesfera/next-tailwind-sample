"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import flight from "../../../../public/assets/net.png";

export const WhatWeOffer = () => {
  return (
    <section className="py-12 relative px-4 md:px-8 lg:py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          <div className="lg:pe-24">
            <h2 className="text-2xl text-title-color lg:text-3xl font-semibold mb-8">
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
              Any company can feature a flight booking form on their website or
              app, but without a trusted charter partner to handle the flights,
              requests can be neglected or mishandled.
            </p>
            <p className="text-base font-medium text-para-color leading-normal mb-5">
              evoJets is a household name in private jet charter. Our technology
              backed by nearly 20yrs of industry experience can enable any
              organization to offer reliable private flight booking services on
              its website or app.
            </p>
          </div>
          <div className="text-center">
            <Image className="w-full lg:ml-auto" src={flight} alt="flight" />
          </div>
        </div>
      </div>
    </section>
  );
};
