/* eslint-disable */
import React from "react";
import { ButtonOne, ButtonTwo } from "../common/Button";

interface IBreakPoints {
  title: string;
  points: string[];
  img: string;
}

interface IProps {
  briefPoints: IBreakPoints[]
}

const BriefPoints = ({ briefPoints }: IProps) => {
  return (
    <>
      <div className="container px-16">
        {briefPoints.map((data, i) =>
          i % 2 === 0 ? (
            <section key={data.title} className="text-gray-600 body-font">
              <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div
                  className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
                  data-aos="fade-right"
                >
                  <h3
                    className="title-font sm:text-4xl text-2xl font-bold font-sans text-center lg:text-3xl lg:text-left lg:leading-tight mb-5"
                    dangerouslySetInnerHTML={{
                      __html: data.title.replace(
                        /#(\w+)/g,
                        "<span class='text-violet-500 font-extrabold'>#$1</span>"
                      ),
                    }}
                  />
                  <p className="mb-8 text-gray-500 lg:text-left font-serif text-xl">
                    <ul className="list-disc">
                      {data.points.map((point, i) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </p>
                  <div className="flex justify-center">
                    <ButtonOne title={"START FREE TRIAL"} url={"http://app.footprynt.ai/"}/>
                  </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                  <img
                    className="object-cover object-center rounded shadow-lg shadow-gray-400"
                    alt="hero"
                    src={data.img}
                  />
                </div>
              </div>
            </section>
          ) : (
            <section key={data.title} className="text-gray-600 body-font">
              <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                  <img
                    className="object-cover object-center rounded shadow-lg shadow-gray-400"
                    alt="hero"
                    src={data.img}
                  />
                </div>
                <div
                  className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
                  data-aos="fade-left"
                >
                  <h3
                    className="title-font sm:text-4xl text-3xl font-bold font-sans text-center lg:text-3xl lg:text-left lg:leading-tight mb-5"
                    dangerouslySetInnerHTML={{
                      __html: data.title.replace(
                        /#(\w+)/g,
                        "<span class='text-violet-500 font-extrabold'>#$1</span>"
                      ),
                    }}
                  />
                  <p className="mb-8 text-gray-500 lg:text-left font-serif text-xl">
                    <ul className="list-disc">
                      {data.points.map((point, i) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </p>
                  <div className="flex justify-center">
                    <ButtonTwo title={"START FREE TRIAL"} url={"http://app.footprynt.ai/"}/>
                  </div>
                </div>
              </div>
            </section>
          )
        )}
      </div>
    </>
  );
};

export default BriefPoints;
