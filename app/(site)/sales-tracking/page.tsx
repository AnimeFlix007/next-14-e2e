import Brands from "@/app/components/home/Brands";
import FAQ from "@/app/components/home/FAQ";
import Platform from "@/app/components/home/Platforms";
import Banner from "@/app/components/ourplatform/Banner";
import BriefPoints from "@/app/components/ourplatform/BriefPoints";
import DemoVideo from "@/app/components/ourplatform/DemoVideo";
import Plans from "@/app/components/pricing/Plans";
import { salesTracking } from "@/app/mock/platforms";
import { Fragment } from "react";

const SalesTracking = () => {
  return (
    <div>
      {salesTracking.map((item, i) => (
        <Fragment key={i}>
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
};

export default SalesTracking