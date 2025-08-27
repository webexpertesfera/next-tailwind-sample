"use client";

import React from "react";
import Image from "next/image";
import rect from "../../../public/assets/rect.png";
import rect1 from "../../../public/assets/rect-bottom.png";
import pattern from "../../../public/assets/ctabg.json";
import road from "../../../public/assets/road.svg";
import road2 from "../../../public/assets/road2.svg";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
export const AboveFooterCta = () => {
  return (  
    <section className="relative z-20 mb-20">
      <div className="container mx-auto">
        <div className="text-center  mx-10 lg:mx-0 bg-second-color bg-cover bg-left-top text-white rounded-3xl relative">
        <div className="lottie-chart mx-auto hidden md:block rounded-lg md:top-3 lg:top-2 left-0 right-0 absolute md:w-[96%] lg:w-[98%] h-full pb-4">
                <Lottie
                  animationData={pattern}
                  loop={true}
                  className="w-full h-full "
                  autoplay={true}
                  rendererSettings={{
                    preserveAspectRatio: "xMidYMid slice",
                  }}
                />{" "}
              </div>
          <div className="grid relative grid-cols-1 lg:grid-cols-4 gap-5 overflow-hidden">
            <div className="relative h-full  bg-contain bg-bottom bg-no-repeat">
               
           
              {/* <Image src={pattern1} className="w-32 h-52 md:hidden absolute top-28 -left-10 object-cover object-bottom" alt="rectangle" /> */}
              <Image src={road2} className="w-16 h-20 md:hidden absolute top-[200px] -left-1 object-contain object-bottom" alt="rectangle" />
            </div>
            <div className="lg:col-span-2 py-10 md:py-16 xl:py-20">
              <h2 className="text-2xl sm:text-3xl  md:text-4xl px-4 lg:px-0 xl:text-5xl mb-10  md:m-auto font-semibold md:mb-10">
                See what evoJets can do for your business
              </h2>
              <button className="text-white text-base 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
                Get Started
              </button>
            </div>
            <div className="relative bg-contain mt-6 bg-bottom bg-no-repeat">
              {/* <Image src={pattern} className="w-32 h-52 md:hidden absolute bottom-0 -right-16 object-cover object-bottom" alt="rectangle" /> */}
              <Image src={road} className="w-16 h-20 md:hidden absolute bottom-[60px] -right-3 object-contain object-bottom" alt="rectangle" />
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 -z-10">
            <Image src={rect1} className="" alt="rectangle" />
          </div>
          <div className="absolute -right-5 -top-5 -z-10">
            <Image src={rect} className="md:h-72" alt="rectangle" />
          </div>
        </div>
      </div>
    </section>
  );
};
