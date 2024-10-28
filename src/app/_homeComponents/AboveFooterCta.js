"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import rect from "../../../public/assets/rect.png";
import rect1 from "../../../public/assets/rect-bottom.png";

export const AboveFooterCta = () => {
  return (
    <section className="relative z-20 mb-20">
      <div className="container mx-auto">
        <div className="text-center mx-10 lg:mx-0 bg-second-color bg-cover bg-left-top text-white rounded-3xl relative p-10 md:p-20">
          <h2 className="text-3xl xl:text-5xl mb-10 md:w-3/6 md:m-auto font-semibold md:mb-10">
            See what evoJets can do for your business
          </h2>
          <button className="text-white text-base 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
            Get Started
          </button>
          <div className="absolute -bottom-5 -left-5 -z-10">
            <Image src={rect1} className="" alt="rectangle" />
          </div>
          <div className="absolute -right-5 -top-5 -z-10">
            <Image src={rect} className="" alt="rectangle" />
          </div>
        </div>
      </div>
    </section>
  );
};
