import { customerImages } from "@/app/mock/customer";
import Image from "next/image";

const Brands = () => {
  return (
    <div className="my-10">
      <div
        className="container items-center justify-center mx-auto py-4 md:py-12"
        data-aos="zoom-in"
      >
        <h2 className="text-center text-2xl md:text-4xl font-extrabold">
          Join hundreds of happy{" "}
          <span className="text-violet-500 font-bold rounded-full p-1">
            #brands
          </span>{" "}
        </h2>

        <div className="container mt-6 md:mt-8 items-center justify-center">
          <h6
            className="text-gray-800 font-serif text-center text-lg md:text-2xl"
            data-aos="zoom-in"
          >
            FootPrynt.ai enhances the entire influencer experience and campaign
            management. From discovery to campaign measurement. Find the perfect
            influencers for your campaigns using our dynamic AI system. Agencies
            and Brands and Influencers and Content Management Companies, this
            the dashboard you were looking for.
          </h6>
          <div className="slider">
            <div className="slide-track">
              {[...customerImages, ...customerImages].map((company, index) => (
                <div key={index} className="slide px-4">
                  <Image
                    width={200}
                    height={200}
                    src={company}
                    alt={company}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
