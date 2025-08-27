"use client"
import Image from "next/image";
import { Header } from "../_homeComponents/Header";
import { Footer } from "../_homeComponents/Footer";
import banner from "../../../public/assets/flightdeck1.json";
import shape from "../../../public/assets/shape.png";
import shape1 from "../../../public/assets/shape1.png";
import { HowItWorks } from "../_DeckComponents/HowItWorks";
import { ChooseIntegration } from "../_DeckComponents/ChooseIntegration";
import { AboveFooterCta } from "../_homeComponents/AboveFooterCta";
import { StackBooking } from "../_DeckComponents/StackBooking";
import { BuiltFlight } from "../_DeckComponents/BuiltFlight";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
export default function FlightDeckApi() {
  return (
    <main className="bg-darkmode bg-cover">
      <Header />
      <section className="pt-32 lg:pt-36 relative px-4 bg-banner-bg bg-bottom bg-no-repeat b bg-cover">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
            <div className="text-white lg:pr-10">
              <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold mb-8">
                Offer private flight booking on your website or app
              </h2>
              <p className="text-base leading-normal">
                Our combined API resources cover every aspect of the private
                flight booking process. With a single integration, display
                tailored pricing and aircraft options, collect user information,
                field booking requests, and manage all requests on a centralized
                platform.
              </p>
              <div className="banenr-btns pt-10 flex gap-5">
                <button className="text-white text-sm 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
                  Get Started
                </button>
                <button className="text-white  text-sm 2xl:text-base px-1 py-2 border-b border-border-color">
                  Developer Docs
                </button>
              </div>
            </div>
            <div className=" text-end">
            
              <div className="lottie-chart">
                <Lottie
                  animationData={banner}
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
          <Image src={shape} className="absolute top-0 left-1/2 h-8 lg:h-auto w-auto lg:left-2/3" alt="shape" />
        </div>
        <div className="">
          <Image
            src={shape1}
            className="absolute left-0 h-24 w-auto top-2/3"
            alt="shape"
          />
        </div>
      </section>
      <HowItWorks />
      <StackBooking />
      <BuiltFlight />
      <ChooseIntegration />
      <div className="-mt-36">
        <AboveFooterCta />
      </div>
      <Footer />
    </main>
  );
}
