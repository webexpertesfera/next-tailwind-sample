import Image from "next/image";
import { Header } from "../_homeComponents/Header";
import { Footer } from "../_homeComponents/Footer";
import React from "react";
import shape from "../../../public/assets/shape.png";
import shape1 from "../../../public/assets/shape1.png";
import real from "../../../public/assets/location.png";
import { AboveFooterCta } from "../_homeComponents/AboveFooterCta";
import { Utilization } from "../_AgentComponents/Utilization";
import { Engagements } from "../_AgentComponents/Engagements";


export default function AgentsAndAdvisors() {
  return (
    <div className="bg-darkmode bg-cover">
      <Header />
      <section className="pt-32 pb-24 lg:pt-36 relative px-4 bg-banner-bg bg-bottom bg-no-repeat b bg-cover">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
            <div className="text-white lg:pr-10">
              <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold mb-8">
                Your trusted private jet platform and partner
              </h2>
              <p className="text-base leading-normal">
                Give your clients more than just a recommendation with Flight
                Deck, a complete solution for charter flight research and
                booking. Your clients come to you for counsel and vetted
                providers. evoJets is a staple in on-demand charter serving US
                Government officials, foreign royalty, Fortune 100 CEOs, and
                more.  Our tools give you the resources to deliver reliable
                private jet insight with integrated booking and backend
                fulfillment.
              </p>
              <div className="banenr-btns pt-10 flex gap-5">
                <button className="text-white text-sm 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
                  Get Started
                </button>
              </div>
            </div>
            <div className=" text-end">
              <Image className="w-full lg:ml-auto" src={real} alt="banner" />
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
