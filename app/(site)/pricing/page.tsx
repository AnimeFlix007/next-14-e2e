import Brands from "@/app/components/home/Brands";
import FAQ from "@/app/components/home/FAQ";
import Platform from "@/app/components/home/Platforms";
import Plans from "@/app/components/pricing/Plans";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <div className="sm:flex sm:flex-col sm:align-center p-10">
        <div className="text-center bg-rose-500 border border-black rounded-lg p-4">
          <h2 className="text-2xl leading-6 font-bold text-white">
            SAVE UP TO 25% WITH YEARLY PLANS
          </h2>
        </div>
      </div>
      <Plans />
      <Platform />
      <Brands />
      <FAQ />
    </>
  );
}
