"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import user from "../../../public/assets/user.png";

export const User = () => {
  return (
    <section className="relative py-10">
      <div className="bg-tab-bg rounded-3xl  p-8 lg:p-12">
        <div className="grid grid-cols-1 items-center lg:grid-cols-3 gap-5 lg:gap-10">
          <div>
            <h2 className="text-2xl xl:text-3xl mb-10 text-title-color font-semibold">
              User Authentication
            </h2>
            <p className="text-base text-para-color leading-normal mb-8">
              Request a JSON Web Token (JWT) with credentials provided in Flight
              Deck. Use this token to authenticate requests to all Flight Deck
              API endpoints.
            </p>
            <button className="text-white text-base 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
              Get Started
            </button>
          </div>
          <div className="lg:col-span-2 text-center">
            <Image src={user} className="lg:w-3/4 w-full lg:ml-auto" alt="user" />
          </div>
        </div>
      </div>
    </section>
  );
};
