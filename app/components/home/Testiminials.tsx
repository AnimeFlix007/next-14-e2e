import Image from "next/image";
import React from "react";
import SliderCSS from "@/app/css/testimonials.module.css";
import { TestimonialsData } from "@/app/mock/Testimonials";

interface ITestimonials {
  title: string;
  profile: string;
  name: string;
  designation: string;
}

const Testimonials = () => {
  return (
    <div className="bg-violet-500 mt-10 md:mt-20">
      <div className="container mx-auto p-4 md:p-12" data-aos="fade-up">
        <h2 className="text-center text-2xl md:text-4xl font-normal text-white">
          Customers that got{" "}
          <span className="bg-white text-violet-500 font-bold rounded-full p-1">
            #elevated
          </span>{" "}
          by Footprynt.ai
        </h2>
        <div className={SliderCSS["slider"]}>
          <div className={SliderCSS["slide-track"]}>
            {TestimonialsData.map((testimonial, index) => (
              <div key={index} className={SliderCSS["slide"]}>
                <h2 className="text-md md:text-lg lg:text-xl font-bold text-white italic mb-2">
                  {testimonial.title}
                </h2>
                <p className="text-gray-100 italic">
                  {testimonial.designation}
                </p>
                <Image
                  className="w-16 h-16 md:w-20 md:h-20 p-1 mt-4 md:mt-5 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src={testimonial.profile}
                  alt="Bordered avatar"
                  width={60}
                  height={60}
                  loading="lazy"
                />
                <p className="text-white font-bold mt-4 md:mt-5">
                  {testimonial.name}
                </p>
                <p className="text-gray-300 font-bold">
                  {testimonial.designation}
                </p>
                <div className="flex p-1">
                  {[1, 2, 3, 4].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-yellow-300 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
