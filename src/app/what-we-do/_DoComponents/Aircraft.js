"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import engage from "../../../../public/assets/follow.png";
import trusted from "../../../../public/assets/source.png";
import sol from "../../../../public/assets/use.png";
import level from "../../../../public/assets/pay.png";

export const Aircraft = () => {
  return (
    <section className="relative dedicated px-4 md:px-8 pt-5  lg:pt-12 lg:pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-5 lg:gap-6">
        <div>
          <div className="flex flex-row lg:flex-col gap-2">
            <div className="flex-none w-24 xl:w-30">
              <Image className="" src={trusted} alt="source" />
            </div>
            <div className="grow pt-3">
              <h4 className="text-xl  text-title-color lg:text-xl font-semibold mb-3">
                Aircraft Sourcing
              </h4>
              <p className="text-sm text-para-color  font-medium  flex items-center leading-normal mb-2 lg:w-4/5">
                <i className="fa-solid fa-circle text-primary-color text-icon"></i>
                Mission assessment
              </p>
              <p className="text-sm text-para-color font-medium leading-normal flex items-center  mb-2 lg:w-4/5">
                <i className="fa-solid fa-circle text-primary-color text-icon"></i>
                Quote collection and negotiation
              </p>
              <p className="text-sm text-para-color font-medium leading-normal flex items-center  mb-2 lg:w-4/5">
                <i className="fa-solid fa-circle text-primary-color text-icon"></i>
                Operator due diligence
              </p>
              <p className="text-sm text-para-color font-medium leading-normal flex items-center  mb-2 lg:w-4/5">
                <i className="fa-solid fa-circle text-primary-color text-icon"></i>
                Aircraft evaluation
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row lg:flex-col gap-2">
            <div className="flex-none w-24 xl:w-30">
              <Image className="" src={level} alt="pay" />
            </div>
            <div className="grow pt-3">
              <h4 className="text-xl text-title-color lg:text-xl font-semibold mb-3">
                Contracts & Payments
              </h4>
              <p className="text-sm text-para-color  font-medium  flex items-center leading-normal mb-2 lg:w-4/5">
                <i className="fa-solid fa-circle text-primary-color text-icon"></i>
                Client contract preparation and signing
              </p>
              <p className="text-sm text-para-color  font-medium  flex items-center leading-normal mb-2 lg:w-4/5">
                <i className="fa-solid fa-circle text-primary-color text-icon"></i>
                Operator contract review and signing
              </p>
              <p className="text-sm text-para-color  font-medium  flex items-center leading-normal mb-2 lg:w-4/5">
                <i className="fa-solid fa-circle text-primary-color text-icon"></i>
                Client payments and secure doc handling
              </p>
              <p className="text-sm text-para-color  font-medium  flex items-center leading-normal mb-2 lg:w-4/5">
                <i className="fa-solid fa-circle text-primary-color text-icon"></i>
                Operator payments
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
                Client Services
              </h4>
              <p className="text-sm text-para-color  font-medium  flex items-center leading-normal mb-2 lg:w-4/5">
                <i className="fa-solid fa-circle text-primary-color text-icon"></i>
                Catering and ground transportation
              </p>
              <p className="text-sm text-para-color  font-medium  flex items-center leading-normal mb-2 lg:w-4/5">
                <i className="fa-solid fa-circle text-primary-color text-icon"></i>
                Vendor management and payment
              </p>
              <p className="text-sm text-para-color  font-medium  flex items-center leading-normal mb-2 lg:w-4/5">
                <i className="fa-solid fa-circle text-primary-color text-icon"></i>
                QA and delivery confirmation
              </p>
              <p className="text-sm text-para-color  font-medium  flex items-center leading-normal mb-2 lg:w-4/5">
                <i className="fa-solid fa-circle text-primary-color text-icon"></i>
                Ad-hoc services
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
                Flight Following
              </h4>
              <p className="text-sm text-para-color  font-medium  flex items-center leading-normal mb-2 lg:w-4/5">
                <i className="fa-solid fa-circle text-primary-color text-icon"></i>
                24/7 flight following
              </p>
              <p className="text-sm text-para-color  font-medium  flex items-center leading-normal mb-2 lg:w-4/5">
                <i className="fa-solid fa-circle text-primary-color text-icon"></i>
                Operator & FBO communication
              </p>
              <p className="text-sm text-para-color  font-medium  flex items-center leading-normal mb-2 lg:w-4/5">
                <i className="fa-solid fa-circle text-primary-color text-icon"></i>
                72, 48, and 24hr weather checks
              </p>
              <p className="text-sm text-para-color  font-medium  flex items-center leading-normal mb-2 lg:w-4/5">
                <i className="fa-solid fa-circle text-primary-color text-icon"></i>
                Mechanical recovery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
