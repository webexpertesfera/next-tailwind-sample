"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import user from "../../../../public/assets/sourcing.png";
import account from "../../../../public/assets/account.png";
import expect from "../../../../public/assets/expect.png";
import offload from "../../../../public/assets/offload.png";

export const AircraftSourcing = () => {
  return (
    <div>
      <section className="relative px-4 py-6">
        <div className="bg-tab-bg rounded-3xl   p-4 lg:p-10">
          <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-5 lg:gap-10">
            <div className=" text-center mt-5 lg:mt-0">
              <Image src={user} className=" w-full" alt="sourcing" />
            </div>
            <div className="lg:pl-28">
              <p className="uppercase text-xs text-primary-color border px-4 py-1 rounded-3xl border-second-border bg-white mb-8   w-max font-semibold">
                AIRCRAFT SOURCING
              </p>
              <h2 className="text-2xl xl:text-4xl mb-4 lg:mb-10 text-title-color font-semibold">
                Save hours of timeand years of stress.
              </h2>
              <p className="text-base text-para-color font-medium leading-normal mb-8">
                Finding and vetting private aircraft and operators is incredibly
                time consuming, even if you know what you’re doing. evoJets has
                the experience, resources, and relationships to ensure your
                clients end up on the perfect plane at the best possible price.
              </p>
              <button className="text-white text-base 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative px-4 py-6">
        <div className="bg-tab-bg rounded-3xl   p-4 lg:p-10">
          <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-5 lg:gap-10">
            <div className=" text-center mt-5 lg:mt-0">
              <Image src={account} className=" w-full" alt="sourcing" />
            </div>
            <div className="lg:pl-28">
              <p className="uppercase text-xs text-primary-color border px-4 py-1 rounded-3xl border-second-border bg-white mb-8   w-max font-semibold">
                CONTRACTS & PAYMENTS
              </p>
              <h2 className="text-2xl xl:text-4xl mb-4 lg:mb-10 text-title-color font-semibold">
                Avoid legal and accounting headaches
              </h2>
              <p className="text-base text-para-color font-medium leading-normal mb-8">
                Contracts and payment collection are major pain points for
                unequipped organizations - evoJets provides dedicated
                infrastructure for both. Save your organization the balance
                sheet risk and administrative headache involved in complex and
                high-dollar charter flight contracts.
              </p>
              <button className="text-white text-base 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative px-4 py-6">
        <div className="bg-tab-bg rounded-3xl  p-4 lg:p-10">
          <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-5 lg:gap-10">
            <div className=" text-center mt-5 lg:mt-0">
              <Image src={expect} className=" w-full" alt="sourcing" />
            </div>
            <div className="lg:pl-28">
              <p className="uppercase text-xs text-primary-color border px-4 py-1 rounded-3xl border-second-border bg-white mb-8   w-max font-semibold">
                CLIENT SERVICES
              </p>
              <h2 className="text-2xl xl:text-4xl mb-4 lg:mb-10 text-title-color font-semibold">
                Outperform client expectations
              </h2>
              <p className="text-base text-para-color font-medium leading-normal mb-8">
                Private aviation clients require a sophisticated team with the
                knowledge and experience to service their requests. evoJets
                provides dedicated reps ready to handle any request from
                standard catering to more complex requirements, all over the
                world.
              </p>
              <button className="text-white text-base 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative px-4 py-6">
        <div className="bg-tab-bg rounded-3xl  p-4 lg:p-10">
          <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-5 lg:gap-10">
            <div className=" text-center mt-5 lg:mt-0">
              <Image src={offload} className=" w-full" alt="offload" />
            </div>
            <div className="lg:pl-28">
              <p className="uppercase text-xs text-primary-color border px-4 py-1 rounded-3xl border-second-border bg-white mb-8   w-max font-semibold">
                Flight Following
              </p>
              <h2 className="text-2xl xl:text-4xl mb-4 lg:mb-10 text-title-color font-semibold">
              Offload operation sto the experts
              </h2>
              <p className="text-base text-para-color font-medium leading-normal mb-8">
                Charter flights require consistent monitoring - late nights,
                early mornings, weekends, holidays, and everything in between.
                evoJets works 24/7/365 and is there to help recover from
                mechanical issues, weather events, crew concerns, and airport
                problems.
              </p>
              <button className="text-white text-base 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
