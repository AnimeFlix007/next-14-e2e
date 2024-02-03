// import { services } from "@/public/mock/Services";
import React from "react";
import { ButtonOne, ButtonTwo } from "../common/Button";
import Image from "next/image";

interface IServices {
  heading: string;
  subtitles: string[];
  image: string;
  button: string;
  color?: string;
}

export default function Services() {
  const services: IServices[] = [
    {
      heading: "Get the right Influencers for Your Campaigns",
      subtitles: [
        "Millions of Influencers primarily based on your needs, and your brand expectations of engagement and keywords.",
        "Curate customized list for your social media needs.",
        "KPIs for your campaign and how our influencer management will work on that.",
      ],
      image: "/home/1.avif",
      button: "Start Finding Influencers Today",
      color: "blue",
    },
    {
      heading: "Data Driven Influencer Insights",
      subtitles: [
        "Compare influencers, compare your competition, compare analytics.",
        "Thorough knowledge before choosing the right set of influencers.",
        "Literature on right content strategies.",
      ],
      image: "/home/2.avif",
      button: "Access Detailed Insights",
    },
    {
      heading: "Creative Brief Creation",
      subtitles: [
        "FootPrynt helps you get your brief correctly asking relevant questions.",
        "The potency of AI is able to produce electronic mail that is more effective for communication.",
        "With FootPrynt&#39;s AI-driven language model chatbot, we will get you to define your goals correctly.",
      ],
      image: "/home/3.avif",
      button: "Create Your Next Creative Brief",
    },
    {
      heading: "Influencer management",
      subtitles: [
        "Our approach is derived from a combination of tech and service solutions.",
        "Streamlines workflows, decreasing time spent on administrative steps, completion of tasks quickly.",
        "Sustainably connects with influencers and content creators to create effective campaigns.",
      ],
      image: "/home/4.avif",
      button: "Simplify Your Influencer Management",
    },
    {
      heading: "Empowering Influencers &amp; Brands",
      subtitles: [
        "We empower influencers with complete freedom to create content.",
        "The Brands are given dashboards and live links of partnership.",
        "LiveLinks encourages a sense of ownership and partnership the influencers have and helps in understanding returns on investments.",
      ],
      image: "/home/5.avif",
      button: "Unlock LiveLinks Today",
    },
    {
      heading: "Campaign Tracking",
      subtitles: [
        "Campaign information tracking and live dashboards.",
        "This dashboard can help you to make persuasive decision-making and identification of top-performing influencers easier.",
        "The entry detailed analytics for individual links, which contain metrics for clicks, views, likes, comments, and involvement. Also involves positive and negative comment analysis.",
      ],
      image: "/home/6.avif",
      button: "Start Tracking Your Campaign",
    },
    {
      heading: "Sales Reporting",
      subtitles: [
        "Leverage the power of data through our comprehensive Sales Reporting feature for optimal campaign returns and money spent.",
        "Exhaustive metrics like clicks, sales, ROI, and conversion rates to help understand campaign effectiveness.",
        "Data is provided in a simple format helping you understand the exact sales derived from centred campaign.",
      ],
      image: "/home/7.avif",
      button: "Get Started with Sales Reporting",
    },
  ];

  return (
    <div className="container px-4 md:px-24">
      {services.map((data, i) =>
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
