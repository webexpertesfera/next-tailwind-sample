"use client"
import Image from "next/image";

import { Header } from "../_homeComponents/Header";
import { Footer } from "../_homeComponents/Footer";
import banner from "../../../public/assets/flightdeck-hq.json";
import shape from "../../../public/assets/shape.png";
import shape1 from "../../../public/assets/shape1.png";
import { AboveFooterCta } from "../_homeComponents/AboveFooterCta";
import { Dedicated } from "../flight-deck-hq/_HqComponents/Dedicated";
import { TrackManage } from "../flight-deck-hq/_HqComponents/TrackManage";
import { ResearchFlight } from "../flight-deck-hq/_HqComponents/ResearchFlight";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
export default function FlightDeckHq() {
  return (
    <main className="bg-darkmode bg-cover">
      <Header />
      <section className="pt-32 relative z-20 lg:pt-60  px-4 bg-banner-bg bg-bottom bg-no-repeat pb-10 mb-10 lg:pb-40 lg:mb-52  xl:pb-96 xl:mb-96 xxl:pb-96 xxl:mb-96 bg-cover">
        <div className="container mx-auto">
          <div className="">
            <div className="text-white text-center xl:w-2/4 m-auto">
              <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold mb-8">
                A central hub for your charter sales ecosystem
              </h2>
              <p className="text-base leading-normal">
                Flight Deck HQ consolidates your flight requests, connects your
                team to evoJets for transparent fulfillment, and provides
                valuable jet charter tools and insights.
              </p>
              <div className="banenr-btns pt-10 flex items-center justify-center gap-5">
                <button className="text-white text-sm 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
                  Get Started
                </button>
                <button className="text-white  text-sm 2xl:text-base px-1 py-2 border-b border-border-color">
                  How to work with us
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative lg:absolute -bottom-20 left-0 right-0 m-auto lg:top-64">
          <div className="lottie-chart">
            <Lottie
              animationData={banner}
              loop={true}
              className="w-full hq-banner-icn lg:ml-auto object-contain h-auto"
              autoplay={true}
              rendererSettings={{
                preserveAspectRatio: "xMidYMid slice",
              }}
            />{" "}
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

      <Dedicated />
      <TrackManage />
      <ResearchFlight />
      <div className="-mt-36">
        <AboveFooterCta />
      </div>
      <Footer />
    </main>
  );
}
