"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import house from "../../../public/assets/house.png";
import hands from "../../../public/assets/hands.png";

export const BuiltFlight = () => {
  return (
    <section className="bg-built-bg bg-cover bg-no-repeat bg-right-top  relative px-4 md:px-8 pb-56 lg:pt-24">
      <div className="container mx-auto">
      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
          <div>
            <h2 className="text-2xl xl:text-4xl mb-14 text-white font-semibold">
            Built-in flight fulfillment
            </h2>
          </div>
          <div>
            <p className="text-base text-white leading-normal mb-5">
            Flight Deck was built in partnership with <Link className="text-link-color underline" href="#">evoJets, </Link> a leader in on-demand charter and pioneer in private flight lead generation, qualification, and conversion.
            </p>
            <p className="text-base text-white leading-normal mb-5 ">
            With Flight Deck’s proven technology facilitating your trip requests and evoJets there for fulfillment, converting users to flyers is seamless and hassle-free.
            </p>
          </div>
        </div>
      
      </div>
    </section>
  );
};
