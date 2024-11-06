"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import regs from "../../../../public/assets/regis.png";
import carnero from "../../../../public/assets/carnero.png";
import limited from "../../../../public/assets/limited.png";
import viceroy from "../../../../public/assets/viceroy.png";
import ritz from "../../../../public/assets/ritz.png";
import salt from "../../../../public/assets/salt.png";

export const OurClient = () => {
  return (
    <section className="relative px-4 md:px-8 pt-16 lg:py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center lg:pb-12">
          <div className="lg:pe-20">
            <h2 className="text-3xl text-title-color  xl:text-5xl mb-5 lg:mb-10 font-semibold">
              Our clients
            </h2>

            <p className="text-base text-para-color leading-normal font-medium mb-5">
              evoJets has been serving clients all over the world since 2006. 
              Our client roster includes foreign royalty, US Presidential and
              Senatorial campaigns, Oscar winners, professional athletes, and
              everything in between.
            </p>

            <div className="bg-tab-bg rounded-2xl p-5 lg:p-12">
              <h6 className="font-semibold text-xl mb-3 text-title-color">
                Flights arranged in
              </h6>
              <div className="grid grid-cols-2 lg:grid-cols-3">
                <div>
                  <h2 className="text-primary-color text-6xl my-4 font-semibold text-center">
                    6
                  </h2>
                  <p className="text-base text-para-color font-semibold  text-center">
                    Continents
                  </p>
                </div>
                <div>
                  <h2 className="text-primary-color text-6xl my-4 font-semibold text-center">
                    72
                  </h2>
                  <p className="text-base text-para-color font-semibold  text-center">
                    Countries
                  </p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="pt-10 lg:pt-0 lg:pl-20">
            <h2 className="text-3xl text-title-color  xl:text-5xl mb-5 lg:mb-10 font-semibold">
              Our partners
            </h2>

            <p className="text-base text-para-color leading-normal font-medium mb-5">
              We have partnered with amazing brands across the luxury and
              lifestyle landscape who have trusted their clients and
              stakeholders with our services.
            </p>
            <div className="bg-tab-bg rounded-2xl p-5 lg:p-12">
              <h6 className="font-semibold text-xl mb-8 text-title-color">
                Proudly partnered with
              </h6>
              <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
                <div>
                  <Image src={regs} className="h-10 w-auto" alt="logo" />
                </div>
                <div>
                  <Image src={carnero} className="h-10 w-auto" alt="logo" />
                </div>
                <div>
                  <Image src={limited} className="h-10 w-auto" alt="logo" />
                </div>
                <div>
                  <Image src={viceroy} className="h-10 w-auto" alt="logo" />
                </div>
                <div>
                  <Image src={ritz} className="h-10 w-auto" alt="logo" />
                </div>
                <div>
                  <Image src={salt} className="h-10 w-auto" alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
