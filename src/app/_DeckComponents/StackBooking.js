"use client";

import React , {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import { User } from "./User";
import { AirportSearch } from "./AirportSearch";
import { PriceEstimates } from "./PriceEstimates";
import { TripReq } from "./TripReq";

export const StackBooking = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
      { name: "User Authentication", content: <User />, icon: <i className="fa-solid bg-tab-bg h-8 w-8 flex items-center rounded-full justify-center text-link-color fa-lock"></i> },
      { name: "Airport Search", content: <AirportSearch />, icon: <i className="fa-solid bg-tab-bg h-8 w-8 flex items-center rounded-full justify-center text-link-color fa-plane-up"></i> },
      { name: "Price Estimates", content: <PriceEstimates />, icon: <i className="fa-solid bg-tab-bg h-8 w-8 flex items-center rounded-full justify-center text-link-color fa-dollar-sign"></i> },
      { name: "Trip Requests", content: <TripReq />, icon: <i class="fa-solid fa-route bg-tab-bg h-8 w-8 flex items-center rounded-full justify-center text-link-color "></i> },
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
            <div className="w-full mx-auto lg:pt-8">
              <div className="container mx-auto">
                <div className="text-sm font-medium text-center text-gray-500">
                  <ul className="flex flex-wrap gap-2 lg:gap-1 justify-center items-center lg:justify-between  z-20 relative -mb-px text-sm font-medium text-center">
                    {tabs.map((tab, index) => (
                      <li key={index} className="mr-2">
                        <button
                          className={`inline-block tb-btn py-4 md:px-10  rounded-3xl ${
                            activeTab === index
                              ? "inline-block py-3  bg-lightbg px-4 md:px-8 md:py-3 text-primary-color  font-semibold rounded-3xl  active"
                              : "inline-block text-base text-title-color py-3 md:px-8 rounded-t-lg hover:text-primary-color hover:border-gray-300"
                          }`}
                          onClick={() => setActiveTab(index)}
                        >
                       <span> {tab.icon} {tab.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="lg:px-4">{tabs[activeTab].content}</div>
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
};
