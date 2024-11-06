"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import robb from "../../../../public/assets/RobbReport.png";
import cnn from "../../../../public/assets/cnn.png";
import wall from "../../../../public/assets/wall.png";
import forbe from "../../../../public/assets/forbes.png";
import cnbc from "../../../../public/assets/cnbc.png";
import barron from "../../../../public/assets/barron.png";


export const Featured = () => {
  return (
    <section className="bg-hq-bg bg-top lg:bg-left-top bg-cover relative px-4 md:px-8 py-16 lg:py-24">
      <div className="container mx-auto">
        <p className="uppercase text-xs text-primary-color  py-2 mb-8  text-center font-semibold">
          Featured In
        </p>

        <div className="flex flex-wrap justify-center gap-10 lg:gap-12 items-center lg:justify-between">
          <div className="">
            <Image src={robb} className="w-auto h-8 lg:h-12" alt="logo" />
          </div>
          <div className="">
            <Image src={cnn} className="w-auto h-8 lg:h-12" alt="logo" />
          </div>
          <div className="">
            <Image src={wall} className="w-auto h-5 lg:h-8" alt="logo" />
          </div>
          <div className="">
            <Image src={forbe} className="w-auto h-6 lg:h-10" alt="logo" />
          </div>
          <div className="">
            <Image src={cnbc} className="w-auto h-8 lg:h-14" alt="logo" />
          </div>
          <div className="">
            <Image src={barron} className="w-auto  h-6 lg:h-10" alt="logo" />
          </div>
        </div>
      </div>
    </section>
  );
};
