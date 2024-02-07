/* eslint-disable  */
import React from "react";

const DemoVideo = () => {
  return (
    <div className="bg-emerald-50">
      <section className="text-gray-600 body-font">
        <div
          className="container mx-auto flex flex-col items-center justify-center px-5 py-10"
          data-aos="fade-up"
        >
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
              Watch Our Short Demo Video
            </h1>
            <p className="mb-8 leading-relaxed text-gray-500 font-serif text-xl">
              Foot Prynt.Ai enables you to discover Influencers and get in-depth
              insights into the demographic, geographic facts of over hundreds
              of influencers and their audience at some point of extraordinary
              types of social media on the internet. We help you find
              influencers on Youtube, Twitter, Instagram, Twitch, Tiktok,
              Linkedin, Sharechat, Belive.
            </p>
            <img
              className="mx-auto w-10 mb-4"
              src={"/common/star.png"}
              alt="star-image"
            />
          </div>
          <video
            className="lg:w-2/4 md:w-full w-full mb-8 object-cover object-center rounded-lg shadow-lg shadow-gray-400"
            controls
          >
            <source
              src="https://pridemediaassets.s3.ap-south-1.amazonaws.com/footprynt+ai+video.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <img
          className="mx-auto w-24 mt-8"
          src={"/common/star.png"}
          alt="star-image"
        />
      </section>
    </div>
  );
};

export default DemoVideo;
