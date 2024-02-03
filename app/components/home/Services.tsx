// import { services } from "@/public/mock/Services";
import React from "react";
import { ButtonOne, ButtonTwo } from "../common/Button";
import Image from "next/image";
import { ServicesData } from "@/app/mock/Services";

interface IServices {
  heading: string;
  subtitles: string[];
  image: string;
  button: string;
  color?: string;
}

export default function Services() {
  return (
    <div className="container px-4 md:px-24">
      {ServicesData.map((data, i) =>
        i % 2 === 0 ? (
          <section key={data.image} className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div
                className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
                data-aos="fade-right"
              >
                <h3
                  className="title-font sm:text-4xl text-2xl font-bold font-sans text-center lg:text-3xl lg:text-left lg:leading-tight mb-5"
                  dangerouslySetInnerHTML={{
                    __html: data.heading.replace(
                      /#(\w+)/g,
                      "<span class='text-violet-500 font-extrabold'>#$1</span>"
                    ),
                  }}
                />
                <p className="mb-8 text-xl font-serif text-gray-600">
                  <ul className="list-disc">
                    {data.subtitles.map((subtitle, index) => (
                      <li key={index}>{subtitle}</li>
                    ))}
                  </ul>
                </p>
                <div className="flex justify-center">
                  <ButtonOne
                    title={data.button}
                    url={"http://app.footprynt.ai/"}
                  />
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Image
                  className=" w-full h-96 object-cover object-center rounded shadow-lg shadow-gray-400"
                  alt={data.image}
                  src={data.image}
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        ) : (
          <section key={data.image} className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <Image
                  className="object-cover object-center rounded shadow-lg shadow-gray-400 w-full h-96"
                  alt={data.image}
                  src={data.image}
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div
                className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
                data-aos="fade-left"
              >
                <h3
                  className="title-font sm:text-4xl text-3xl font-bold font-sans text-center lg:text-3xl lg:text-left lg:leading-tight mb-5"
                  dangerouslySetInnerHTML={{
                    __html: data.heading.replace(
                      /#(\w+)/g,
                      "<span class='text-violet-500 font-extrabold'>#$1</span>"
                    ),
                  }}
                />
                <p className="mb-8 text-xl font-serif text-gray-600  ">
                  <ul className="list-disc">
                    {data.subtitles.map((subtitle, index) => (
                      <li key={index}>{subtitle}</li>
                    ))}
                  </ul>
                </p>
                <div className="flex justify-center">
                  <ButtonTwo
                    title={data.button}
                    url={"http://app.footprynt.ai/"}
                  />
                </div>
              </div>
            </div>
          </section>
        )
      )}
    </div>
  );
}
