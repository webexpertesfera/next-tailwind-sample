"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import house from "../../../public/assets/flightdeck2.json";
import hands from "../../../public/assets/flightdeck3.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
export const ChooseIntegration = () => {
  return (
    <section className="bg-deck-bg bg-cover bg-no-repeat bg-top  relative px-4 md:px-8 pb-56 pt-16 lg:pt-24">
      <div className="container mx-auto">
        <p className="uppercase  text-xs text-primary-color bg-lightbg border px-6 py-2 rounded-3xl border-second-border mb-8 w-max font-semibold">
          Integration
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
          <div>
            <h2 className="text-3xl xl:text-5xl mb-5 lg:mb-14 text-title-color font-semibold">
              Choose the right integration approach for your business
            </h2>
          </div>
          <div>
            <p className="text-base text-para-color leading-normal mb-5 lg:w-4/5">
              Build a highly customized booking workflow yourself, or leave the
              technical aspects to our onboarding team. Either way, your website
              or app will be outfitted with a complete solution for online
              flight booking.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
          <div>
            <div className="card-image bg-white rounded-3xl p-5 lg:p-10 border border-white hover:cursor-pointer hover:border-border-hover">
              <div className="lottie-chart">
                <Lottie
                  animationData={house}
                  loop={true}
                  className="w-full"
                  autoplay={true}
                  rendererSettings={{
                    preserveAspectRatio: "xMidYMid slice",
                  }}
                />{" "}
              </div>
              <h3 className="text-xl xl:text-2xl mt-6 mb-4 text-title-color font-semibold">
                In-house, install it yourself
              </h3>
              <p className="text-base text-para-color leading-normal">
                Have your own engineers? Our developer docs create a complete
                roadmap for any application of our APIs imaginable, including
                code snippets, live demos, and all the technical elements your
                developers need.
              </p>
            </div>
          </div>
          <div>
            <div className="card-image bg-white rounded-3xl  p-5 lg:p-10 border border-white hover:cursor-pointer hover:border-border-hover">
              <div className="lottie-chart">
                <Lottie
                  animationData={hands}
                  loop={true}
                  className="w-full"
                  autoplay={true}
                  rendererSettings={{
                    preserveAspectRatio: "xMidYMid slice",
                  }}
                />{" "}
              </div>

              <h3 className="text-xl xl:text-2xl mt-6 mb-4 text-title-color font-semibold">
                Hands-off, leave it to the pros
              </h3>
              <p className="text-base text-para-color leading-normal">
                Need a no-code solution? Our onboarding team can deliver a
                white-label workflow with minimal resource drain on your team,
                incorporating your branding, UX considerations, and existing
                workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
