import Banner from "@/app/components/ourplatform/Banner";
import BriefPoints from "@/app/components/ourplatform/BriefPoints";
import DemoVideo from "@/app/components/ourplatform/DemoVideo";
import SocialMedia from "@/app/components/ourplatform/SocialMedia";
import { agencies } from "@/app/mock/ECommerceData";
import React from "react";
import Brands from "@/app/components/home/Brands";
import FAQ from "@/app/components/home/FAQ";
import Platform from "@/app/components/home/Platforms";
import Plans from "@/app/components/pricing/Plans";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      {" "}
      {agencies.map((item) => (
        <div key={item.bannerTitle}>
          <Banner
            bannerTitle={item.bannerTitle}
            subtitles={item.subtitle}
            Bannerimage={item.bannerimage}
          />
          <DemoVideo />
          <SocialMedia />
          <BriefPoints briefPoints={item.briefPoints} />
        </div>
      ))}
      <Plans />
      <Platform />
      <Brands />
      <FAQ />
    </div>
  );
}
