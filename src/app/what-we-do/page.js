import Image from "next/image";
import { Header } from "../_homeComponents/Header";
import { Footer } from "../_homeComponents/Footer";
import banner from "../../../public/assets/do.png";
import shape from "../../../public/assets/shape.png";
import shape1 from "../../../public/assets/shape1.png";
import { AboveFooterCta } from "../_homeComponents/AboveFooterCta";
import { Aircraft } from "../what-we-do/_DoComponents/Aircraft";
import { AircraftSourcing } from "../what-we-do/_DoComponents/AircraftSourcing";
export default function WhatWeDo() {
  return (
    <div className="bg-darkmode bg-cover">
      <Header />
      <section className="pt-32 pb-24 lg:pt-36 relative px-4 bg-banner-bg bg-bottom bg-no-repeat b bg-cover">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
            <div className="text-white lg:pr-10">
              <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold mb-8">
                Your trustedprivate jet partnerfor lead generation
              </h2>
              <p className="text-base leading-normal">
                With Flight Deck you can offer jet charter booking on your
                website or app, but that’s only the beginning. evoJets is there
                to handle all the headache, hassle, stress and risk involved in
                private aviation.
              </p>
              <div className="banenr-btns pt-10 flex gap-5">
                <button className="text-white text-sm 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
                  Get Started
                </button>
                <button className="text-white  text-sm 2xl:text-base px-1 py-2 border-b border-border-color">
                  More about evoJets
                </button>
              </div>
            </div>
            <div className=" text-end">
              <Image
                className="w-full lg:ml-auto pb-10"
                src={banner}
                alt="banner"
              />
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
      <div className="common pt-10 lg:pt-24">
        <div className="container mx-auto">
        <p className="uppercase mx-4 text-xs text-primary-color border px-4 py-1 rounded-3xl border-second-border bg-lightbg mb-8   w-max font-semibold">
        What we offer
        </p>
        <h2 className="text-3xl xl:text-5xl px-4 mb-8 text-title-color font-semibold">
        Frictionless private flight fulfillment
        </h2>
            <Aircraft />
            <AircraftSourcing />
        </div>
      </div>
      <div className="pt-20">
      <AboveFooterCta />
    </div>
      <Footer />
    </div>
  );
}
