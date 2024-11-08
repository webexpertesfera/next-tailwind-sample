"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import engage from "../../../../public/assets/engage.png";
import trusted from "../../../../public/assets/use.png";
import integration from "../../../../public/assets/integration.png";
import sol from "../../../../public/assets/sol.png";
import level from "../../../../public/assets/level.png";

export const Dedicated = () => {
  return (
    <section className="relative dedicated px-4 md:px-8 lg:pt-48 pt-24 pb-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-5 lg:gap-10">
          <div>
            <div className="flex flex-row lg:flex-col gap-2">
              <div className="flex-none w-24 xl:w-30">
                <Image className="" src={trusted} alt="trusted" />
              </div>
              <div className="grow pt-3">
                <h4 className="text-xl  text-title-color lg:text-xl font-semibold mb-3">
                  Dedicated evoJets reps
                </h4>
                <p className="text-sm text-para-color leading-normal mb-5 lg:w-4/5">
                  Aliquet enim tortor at auctor urna nunc id cursus metus
                  aliquam eleifend mi in nulla posuere sollicitudin aliquam
                  ultrices.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row lg:flex-col gap-2">
              <div className="flex-none w-24 xl:w-30">
                <Image className="" src={level} alt="level" />
              </div>
              <div className="grow pt-3">
                <h4 className="text-xl text-title-color lg:text-xl font-semibold mb-3">
                  Multi-level access
                </h4>
                <p className="text-sm text-para-color leading-normal mb-5 lg:w-4/5">
                  Aliquet enim tortor at auctor urna nunc id cursus metus
                  aliquam eleifend mi in nulla posuere sollicitudin aliquam
                  ultrices.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row lg:flex-col gap-2">
              <div className="flex-none w-24 xl:w-30">
                <Image className="" src={sol} alt="trusted" />
              </div>
              <div className="grow pt-3">
                <h4 className="text-xl text-title-color lg:text-xl font-semibold mb-3">
                  Versatile solutions
                </h4>
                <p className="text-sm text-para-color leading-normal mb-5 lg:w-4/5">
                  Aliquet enim tortor at auctor urna nunc id cursus metus
                  aliquam eleifend mi in nulla posuere sollicitudin aliquam
                  ultrices.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row lg:flex-col gap-2">
              <div className="flex-none w-24 xl:w-30">
                <Image className="" src={engage} alt="trusted" />
              </div>
              <div className="grow pt-3">
                <h4 className="text-xl text-title-color lg:text-xl font-semibold mb-3">
                  Custom engagements
                </h4>
                <p className="text-sm text-para-color leading-normal mb-5 lg:w-4/5">
                  Aliquet enim tortor at auctor urna nunc id cursus metus
                  aliquam eleifend mi in nulla posuere sollicitudin aliquam
                  ultrices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
