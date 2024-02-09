import Brands from "@/app/components/home/Brands";
import FAQ from "@/app/components/home/FAQ";
import Platform from "@/app/components/home/Platforms";
import Banner from "@/app/components/ourplatform/Banner";
import BriefPoints from "@/app/components/ourplatform/BriefPoints";
import DemoVideo from "@/app/components/ourplatform/DemoVideo";
import SocialMedia from "@/app/components/ourplatform/SocialMedia";
import Plans from "@/app/components/pricing/Plans";
import { dashboard } from "@/app/mock/platforms";
import { Fragment } from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      {" "}
      {dashboard.map((item) => (
        <Fragment key={item.bannerTitle}>
          <Banner
            bannerTitle={item.bannerTitle}
            subtitles={item.subtitle}
            Bannerimage={item.bannerimage}
          />
          <DemoVideo />
          <BriefPoints briefPoints={item.briefPoints} />
        </Fragment>
      ))}
      <Plans />
      <Platform />
      <Brands />
      <FAQ />
    </div>
  );
}
