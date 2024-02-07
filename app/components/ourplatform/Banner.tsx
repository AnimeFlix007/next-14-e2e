/* eslint-disable  */
import React from "react";
import { ButtonOne } from "../common/Button";

interface IProps {
  bannerTitle: string;
  subtitles: string[];
  Bannerimage: any;
}

const Banner = ({ bannerTitle, subtitles, Bannerimage } : IProps) => {
  return (
    <section className="py-10 px-4 md:px-8 lg:px-16 xl:px-20">
      <div className="container flex flex-wrap items-center justify-center mx-auto md:mt-5 md:mb-5">
        <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-12">
          <h3 className="max-w-xl text-[1rem] leading-none text-black font-medium font-sans text-center lg:text-4xl lg:text-left lg:leading-tight mb-5">
            {bannerTitle}
          </h3>
          <p className="max-w-xl text-center text-gray-500 lg:text-left font-serif text-xl">
            <ul className="list-disc">
              {subtitles?.map((subtitle, index) => (
                <li key={index}>{subtitle}</li>
              ))}
            </ul>
          </p>
          <div className="flex flex-wrap items-center mt-6 lg:mt-10">
            <ButtonOne title={"START FREE TRIAL"} url={"http://app.footprynt.in/"}/>
            <a
              href="/contact-us"
              className="px-4 font-extrabold text-rose-500 cursor-pointer mt-4 md:mt-0"
            >
              SCHEDULE A DEMO MEETING
            </a>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img className="w-full h-auto" src={Bannerimage} alt={bannerTitle} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
