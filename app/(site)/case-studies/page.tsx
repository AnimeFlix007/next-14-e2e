import Footer from "@/app/components/common/Footer";
import { caseStudies } from "@/app/mock/CaseStudies";
import Link from "next/link";
import React from "react";

type Props = {};

export default function CaseStudies({}: Props) {
  return (
    <>
      <div className="container items-center justify-center mx-auto p-10">
        <h2 className="text-center text-4xl font-bold text-black">
          Influencer Marketing{" "}
          <span className="text-violet-500 font-bold">#Case Studies</span>
        </h2>
        <p className="text-center text-2xl mt-5">
          All about influencer marketing.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-3 justify-items-center mt-20">
          {caseStudies.map((caseStudy, index) => (
            <Link href={`/case-study/${caseStudy.id}`} key={index}>
              <div className="max-w-lg mx-auto" data-aos="zoom-out">
                <div
                  className="bg-white shadow-lg rounded-lg max-w-sm mb-5"
                  style={{ height: "550px", overflow: "hidden" }}
                >
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src={caseStudy.actualImg}
                      alt=""
                      style={{ height: "250px" }}
                    />
                  </a>
                  <div className="p-5">
                    <p>
                      <h5 className="text-gray-400 font-bold text-sm tracking-tight mb-2">
                        {caseStudy.date}
                      </h5>
                    </p>
                    <a href="#">
                      <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                        {caseStudy.title}
                      </h5>
                    </a>
                    <p className="font-normal text-gray-700 mb-3">
                      {caseStudy.summary}
                    </p>
                    <a
                      className="text-teal-500 font-bold underline underline-offset-4 float-right"
                      href={`/case-study/${caseStudy.id}`}
                    >
                      Read more
                    </a>
                    <br />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
