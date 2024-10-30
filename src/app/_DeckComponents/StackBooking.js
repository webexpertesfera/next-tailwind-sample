"use client";

import React , {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import { User } from "./User";
import { AirportSearch } from "./AirportSearch";
import { PriceEstimates } from "./PriceEstimates";

export const StackBooking = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
      { name: "User Authentication", content: <User /> },
      { name: "Airport Search", content: <AirportSearch /> },
      { name: "Price Estimates", content: <PriceEstimates /> },
      { name: "Trip Requests", content: <User /> },
    ];
  return (
    <section className=" relative px-4 md:px-8 pb-20">
      <div className="container mx-auto">
        <div className="">
          <div>
            <h2 className="text-xl xl:text-3xl mb-8 text-title-color font-semibold">
            Full stack booking software
            </h2>
          </div>
          <div>
            <div className="w-full mx-auto pt-8">
              <div className="container mx-auto">
                <div className="text-sm font-medium text-center text-gray-500">
                  <ul className="flex flex-wrap justify-between z-20 relative -mb-px text-sm font-medium text-center">
                    {tabs.map((tab, index) => (
                      <li key={index} className="mr-2">
                        <button
                          className={`inline-block py-4 md:px-10  rounded-3xl ${
                            activeTab === index
                              ? "inline-block py-3  bg-lightbg px-4 md:px-8 md:py-3 text-primary-color  font-semibold rounded-3xl  active"
                              : "inline-block text-base text-title-color py-3 md:px-8 rounded-t-lg hover:text-primary-color hover:border-gray-300"
                          }`}
                          onClick={() => setActiveTab(index)}
                        >
                          {tab.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="px-4">{tabs[activeTab].content}</div>
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
};
