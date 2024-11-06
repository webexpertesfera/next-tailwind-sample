import Image from "next/image";
import { Header } from "../_homeComponents/Header";
import { Footer } from "../_homeComponents/Footer";
import React from "react";
import shape from "../../../public/assets/shape.png";
import shape1 from "../../../public/assets/shape1.png";
import { AboveFooterCta } from "../_homeComponents/AboveFooterCta";
import { WhatWeDo } from "../_ProcessComponents/WhatWeDo";
import { Faq } from "../_ProcessComponents/Faq";

export default function AboutUs() {
  return (
    <div className="">
      <Header />
      <section className="pt-32 pb-24 lg:py-52 relative px-4 bg-banner-bg bg-bottom bg-no-repeat b bg-cover">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-center">
            <div className="text-white lg:pr-10 lg:col-span-3">
              <p className="uppercase text-xs bg-para-color text-border-hover border px-4 py-1  rounded-3xl border-border-hover w-max font-semibold">
                About Us
              </p>
              <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold mb-8 mt-10">
              evoJets is a business aviation services and technology company.
              </h2>
            
            </div>
            <div></div>
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
      <WhatWeDo />
      <Faq />
      <div className="-mt-36">
        <AboveFooterCta />
      </div>
      <Footer />
    </div>
  );
}
