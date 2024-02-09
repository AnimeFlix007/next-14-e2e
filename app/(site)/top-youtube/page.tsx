import React from "react";
import Image from "next/image";
import InfluencerTable from "@/app/components/top/InfluencerTable";
import ClientOnly from "@/app/client/ClientOnly";

const TopYoutube = () => {
  return (
    <div className="container mt-10 mb-10 text-center">
      <div className="inline-flex items-center justify-center mb-10">
        <Image
          width={50}
          height={50}
          src={"/common/YoutubeCircle.png"}
          className="w-10 mr-5"
          alt="topyoutube"
        />
        <h1 className="text-center text-2xl font-serif text-gray-700 font-extrabold">
          TOP YOUTUBE INFLUENCERS
        </h1>
      </div>
      <ClientOnly>
        <InfluencerTable filter="topyoutube" />
      </ClientOnly>
    </div>
  );
};

export default TopYoutube;
