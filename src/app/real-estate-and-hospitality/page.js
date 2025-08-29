"use client";
import Image from "next/image";
import { Header } from "../_homeComponents/Header";
import { Footer } from "../_homeComponents/Footer";
import React from "react";
import shape from "../../../public/assets/shape.png";
import shape1 from "../../../public/assets/shape1.png";
import real from "../../../public/assets/realestate.json";
import { Utilization } from "../_EstateComponents/Utilization";
import { Engagements } from "../_EstateComponents/Engagements";
import { AboveFooterCta } from "../_homeComponents/AboveFooterCta";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
export default function RealEstateAndHospitality() {
  return (
    <div className="bg-darkmode bg-cover">
      <Header />
      <section className="pt-32 pb-16 lg:pt-36 relative px-4 bg-banner-bg bg-bottom bg-no-repeat b bg-cover">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
            <div className="text-white lg:pr-10">
              <p className="uppercase text-xs text-green-color border px-6 py-2 rounded-3xl border-cyan-800 mb-8 w-max font-semibold">
                Real Estate & Hospitality
              </p>
              <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold mb-8">
                Back of house for your front of house
              </h2>
              <p className="text-base leading-normal">
                Integrate a full-service flight booking workflow on your website
                or app, with evoJets there for fulfillment. With the resources
                available at evoJets Tech Services, your private jet booking
                possibilities are endless.
              </p>
              <div className="banenr-btns pt-10 flex gap-5">
                <button className="text-white text-sm 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
                  Contact Sales
                </button>
              </div>
            </div>
            <div className=" text-end">
              <div className="lottie-chart">
                <Lottie
                  animationData={real}
                  loop={true}
                  className="w-full lg:ml-auto"
                  autoplay={true}
                  rendererSettings={{
                    preserveAspectRatio: "xMidYMid slice",
                  }}
                />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Image
            src={shape}
            className="absolute top-0 left-1/2 h-8 lg:h-auto w-auto lg:left-2/3"
            alt="shape"
          />
        </div>
        <div className="">
          <Image
            src={shape1}
            className="absolute left-0 h-24 w-auto top-2/3"
            alt="shape"
          />
        </div>
      </section>
      <Utilization />
      <Engagements />
      <div className="-mt-36">
        <AboveFooterCta />
      </div>
      <Footer />
    </div>
  );
}
