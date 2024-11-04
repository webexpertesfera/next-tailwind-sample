"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import house from "../../../public/assets/house.png";
import hands from "../../../public/assets/hands.png";

export const BuiltFlight = () => {
  return (
    <section className="bg-built-bg bg-cover bg-center  py-16 lg:bg-[length:100%_100%] bg-no-repeat lg:bg-right-top  relative px-4 md:px-8 lg:pb-40 lg:pt-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
          <div>
            <h2 className="text-2xl xl:text-4xl mb-5 lg:mb-14 text-white font-semibold">
              Built-in flight fulfillment
            </h2>
          </div>
          <div>
            <p className="text-base text-white leading-normal mb-5">
              Flight Deck was built in partnership with{" "}
              <Link className="text-link-color underline" href="#">
                evoJets,{" "}
              </Link>{" "}
              a leader in on-demand charter and pioneer in private flight lead
              generation, qualification, and conversion.
            </p>
            <p className="text-base text-white leading-normal mb-5 ">
              With Flight Deck’s proven technology facilitating your trip
              requests and evoJets there for fulfillment, converting users to
              flyers is seamless and hassle-free.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-0 pt-14">
          <div className="lg:col-span-2 mb-5 lg:mb-0">
            <div className="flex flex-col">
              <div className="pb-3 lg:pr-3 lg:border-r lg:border-bg-main lg:border-b border-bg-main">
                <h6 className="text-white bg-bg-main rounded-xl text-center px-3 py-3 text-sm ">
                  Your website/app
                </h6>
              </div>
              <div className="lg:border-r lg:border-bg-main lg:pt-3 lg:pr-3 ">
                <p className="text-white min-h-col text-sm  text-center rounded-xl px-3 py-12 bg-para-color">
                  Initial client discovery
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 mb-5 lg:mb-0">
            <div className="flex flex-col">
              <div className="pb-3 lg:px-3  lg:border-r lg:border-bg-main lg:border-b border-bg-main">
                <h6 className="text-white bg-bg-main rounded-xl text-center px-3 py-3 text-sm ">
                  evoJets API
                </h6>
              </div>
              <div className="lg:border-r lg:border-bg-main lg:pt-3 ">
                <div className="grid gap-2 grid-cols-2 lg:px-3  pb-3 lg:border-b border-bg-main">
                  <p className="text-white  min-h-api text-sm  text-center rounded-xl px-3 py-3 bg-para-color">
                    Flight pricing
                  </p>
                  <p className="text-white  min-h-api text-sm text-center rounded-xl px-3 py-3 bg-para-color">
                    Aircraft data
                  </p>
                </div>
              </div>
              <div className="lg:border-r lg:border-bg-main lg:pt-3 ">
                <div className="grid gap-2 grid-cols-2 lg:px-3">
                  <p className="text-white  min-h-api text-sm  text-center rounded-xl px-3 py-3 bg-para-color">
                    Booking requests
                  </p>
                  <p className="text-white  min-h-api text-sm text-center rounded-xl px-3 py-3 bg-para-color">
                    User validation
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 mb-5 lg:mb-0">
            <div className="flex flex-col">
              <div className="pb-3 lg:px-3  lg:border-r lg:border-bg-main lg:border-b border-bg-main">
                <h6 className="text-white bg-bg-main rounded-xl text-center lg:px-3 py-3 text-sm ">
                  evoJets HQ
                </h6>
              </div>
              <div className="lg:border-r lg:border-bg-main lg:pt-3 ">
                <div className="grid gap-2 grid-cols-2 lg:px-3  pb-3 lg:border-b border-bg-main">
                  <p className="text-white  min-h-api text-sm  text-center rounded-xl px-3 py-3 bg-para-color">
                    Trip monitoring
                  </p>
                  <p className="text-white  min-h-api text-sm text-center rounded-xl px-3 py-3 bg-para-color">
                    Management
                  </p>
                </div>
              </div>
              <div className="lg:border-r lg:border-bg-main lg:pt-3 ">
                <div className="grid gap-2 grid-cols-2 lg:px-3">
                  <p className="text-white  min-h-api text-sm  text-center rounded-xl px-3 py-3 bg-para-color">
                    User insights
                  </p>
                  <p className="text-white  min-h-api text-sm text-center rounded-xl px-3 py-3 bg-para-color">
                    Charter sales tools
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 mb-5 lg:mb-0">
            <div className="flex flex-col">
              <div className="pb-3 lg:px-3   lg:border-b border-bg-main">
                <h6 className="text-white bg-bg-main rounded-xl text-center px-3 py-3 text-sm ">
                  evoJets Charter Team
                </h6>
              </div>
              <div className="lg:block hidden lg:pt-3">
                <div className="grid gap-2 grid-cols-3 lg:px-3  pb-3 lg:border-b border-bg-main">
                  <p className="text-white text-sm  text-center rounded-xl px-3 py-3 bg-para-color">
                    Aircraft sourcing
                  </p>
                  <p className="text-white text-sm text-center rounded-xl px-3 py-3 bg-para-color">
                    Contracts
                  </p>
                  <p className="text-white text-sm text-center rounded-xl px-3 py-3 bg-para-color">
                    Payments
                  </p>
                </div>
              </div>
              <div className="lg:block hidden lg:pt-3 ">
                <div className="grid gap-2 grid-cols-3 lg:px-3">
                  <p className="text-white text-sm  text-center rounded-xl px-3 py-3 bg-para-color">
                    Flight following
                  </p>
                  <p className="text-white text-sm text-center rounded-xl px-3 py-3 bg-para-color">
                    Concierge services
                  </p>
                  <p className="text-white text-sm text-center rounded-xl px-3 py-3 bg-para-color">
                    Mechanical recovery
                  </p>
                </div>
              </div>

              <div className="lg:hidden">
                <div className="grid gap-2 grid-cols-2 lg:grid-cols-3 lg:px-3  pb-3 lg:border-b border-bg-main">
                  <p className="text-white text-sm  text-center rounded-xl px-3 py-3 bg-para-color">
                    Aircraft sourcing
                  </p>
                  <p className="text-white text-sm text-center rounded-xl px-3 py-3 bg-para-color">
                    Contracts
                  </p>
                  <p className="text-white text-sm text-center rounded-xl px-3 py-3 bg-para-color">
                    Payments
                  </p>
             
                  <p className="text-white text-sm  text-center rounded-xl px-3 py-3 bg-para-color">
                    Flight following
                  </p>
                  <p className="text-white text-sm text-center rounded-xl px-3 py-3 bg-para-color">
                    Concierge services
                  </p>
                  <p className="text-white text-sm text-center rounded-xl px-3 py-3 bg-para-color">
                    Mechanical recovery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
