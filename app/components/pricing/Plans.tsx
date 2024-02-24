"use client";

import React, { useEffect, useState } from "react";
import { PlansData } from "@/app/mock/PlansData";
interface ILanguage {
  value: string;
  label: string;
}
const Plans = () => {
  let country: any = "IN";

  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    country =
      params.get("country") ||
      JSON.parse(window.localStorage.getItem("FP_Language") || "")?.value ||
      "IN";
  }
  const filteredPlans =
    country && PlansData.plans.filter((plan) => plan.country === country);
  return (
    <div className="sm:flex sm:flex-col sm:align-center p-10">
      <h2 className="text-3xl text-center leading-6 font-bold text-black">
        FootPrynt Ai Pricing Plans
      </h2>
      <p className="mt-5 text-xl font-normal text-center font-serif">
        Cost-effective pricing, for every scale.
      </p>
      {filteredPlans && filteredPlans.length === 0 && (
        <div className="flex justify-center items-center">
          <img
            src="https://img.freepik.com/free-vector/influencer-concept-illustration_114360-681.jpg"
            className="w-80"
          />
          <img
            src="https://elegantsupport.com/images/coming_soon.gif"
            className="w-60"
          />
        </div>
      )}
      <div
        className="mt-12 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 md:max-w-7xl md:mx-auto xl:grid-cols-3"
        data-aos="zoom-in"
      >
        {filteredPlans &&
          filteredPlans?.map((plan: any) => (
            <div
              key={plan.plan}
              className="border border-slate-500 rounded-lg shadow-sm divide-y divide-slate-200"
            >
              <div className="bg-[#1d42d9]">
                <div className="p-6">
                  <h2 className="text-2xl leading-6 font-extrabold text-white">
                    {plan.plan}
                  </h2>

                  <p className="mt-8">
                    <span className="text-4xl font-bold text-white tracking-tighter">
                      {plan.month}
                    </span>
                  </p>

                  <p className="mt-2 text-base text-white leading-tight">
                    {plan.desc}
                  </p>
                  <a
                    href="/sign-up"
                    className="mt-8 block w-full bg-[#ff2d55] rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-white hover:text-[#ff2d55]"
                  >
                    Join as a Starter
                  </a>
                </div>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
                  What&apos;s included
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {plan?.include?.map((point: any) => (
                    <li key={point} className="flex space-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0 h-5 w-5 text-green-400"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M5 12l5 5l10 -10"></path>
                      </svg>
                      <span className="text-base text-slate-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Plans;
