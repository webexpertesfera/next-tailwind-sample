"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import network from "../../../public/assets/network.png";
import trusted from "../../../public/assets/trusted.png";
import integration from "../../../public/assets/integration.png";
import power from "../../../public/assets/power.png";
import split from "../../../public/assets/lottie4.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
export const WhyEvojets = () => {
  return (
    <section className="bg-gradient-top  relative px-4 md:px-8 lg:pt-24 pt-12 pb-56">
      <div className="container mx-auto">
        <p className="uppercase text-center text-xs text-primary-color border px-6 py-2 rounded-3xl border-second-border mb-8 w-max m-auto font-semibold">
          Why evoJets
        </p>
        <h2 className="text-3xl xl:text-5xl mb-14 text-title-color font-semibold text-center lg:w-3/5 m-auto">
          Your instant, in-house flight department
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
          <div>
            <div className="flex gap-5">
              <div className="flex-none w-24 xl:w-30">
                <Image className="" src={trusted} alt="trusted" />
              </div>
              <div className="grow pt-3">
                <h4 className="text-xl  text-title-color lg:text-2xl font-medium mb-3">
                  Trusted charter partner
                </h4>
                <p className="text-base text-para-color leading-normal mb-5 lg:w-4/5">
                  Hand the transaction over to the professionals at evoJets to
                  manage the{" "}
                  <Link href="#" className="text-primary-color underline">
                    full lifecycle{" "}
                  </Link>{" "}
                  of your flight, including aircraft sourcing, payments, flight
                  following, and more.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-5">
              <div className="flex-none w-24 xl:w-30">
                <Image className="" src={network} alt="trusted" />
              </div>
              <div className="grow pt-3">
                <h4 className="text-xl text-title-color lg:text-2xl font-medium mb-3">
                  Scalable solutions
                </h4>
                <p className="text-base text-para-color leading-normal mb-5 lg:w-4/5">
                  Our API resources can handle any organization’s demand flow,
                  and the evoJets team is on standby to field as many flight
                  requests as your company can generate.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-5">
              <div className="flex-none w-24 xl:w-30">
                <Image className="" src={integration} alt="trusted" />
              </div>
              <div className="grow pt-3">
                <h4 className="text-xl text-title-color lg:text-2xl font-medium mb-3">
                  Limitless integration options
                </h4>
                <p className="text-base text-para-color leading-normal mb-5 lg:w-4/5">
                  Deploy our APIs on your website, ERP, or mobile app however
                  you choose with our detailed
                  <Link href="#" className="text-primary-color ms-1 underline">
                    developer docs
                  </Link>{" "}
                  packed with code snippets and live demos.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-5">
              <div className="flex-none w-24 xl:w-30">
                <Image className="" src={power} alt="trusted" />
              </div>
              <div className="grow pt-3">
                <h4 className="text-xl text-title-color lg:text-2xl font-medium mb-3">
                  Powerful, actionable data
                </h4>
                <p className="text-base text-para-color leading-normal mb-5 lg:w-4/5">
                  Gain real-time insights into customer behavior with dashboard
                  analytics, and instantly respond to private flight inquiries
                  with powerful research tools.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-2 gap-5  flex flex-col-reverse mt-10  lg:mt-20 items-center">
          <div className="text-center">
            <div className="lottie-chart pb-4">
              <Lottie
                animationData={split}
                loop={true}
                className="w-full lg:w-4/5"
                autoplay={true}
                rendererSettings={{
                  preserveAspectRatio: "xMidYMid slice",
                }}
              />{" "}
            </div>
          </div>
          <div className="">
            <p className="uppercase text-xs text-primary-color border px-6 py-2 rounded-3xl border-second-border mb-8 w-max font-semibold">
              Engagement
            </p>
            <h2 className="text-3xl text-title-color xl:text-5xl mb-10 font-semibold">
              Custom account configurations
            </h2>
            <p className="text-base text-para-color leading-normal mb-5">
              Whether your business uses private flights internally for
              employees and stakeholders or books flights on behalf of
              customers, evoJets can improve the process.
            </p>
            <p className="text-base text-para-color leading-normal font-medium">
              <Link href="#" className="text-primary-color underline">
                {" "}
                Contact us
              </Link>{" "}
              to discuss your integration and what kind of account setup will best suit your needs.
            </p>
            <div className="banenr-btns pt-6 flex gap-5">
              <button className="text-white text-base 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
                Explore Engagement
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
