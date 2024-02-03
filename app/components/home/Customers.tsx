import { customerImages } from "@/app/mock/customer";
import Image from "next/image";

const Customers = () => {
  return (
    <div className="mt-20 mb-20">
      <div
        className="container items-center justify-center mx-auto p-12"
        data-aos="fade-up"
      >
        <h2 className="text-center text-3xl md:text-4xl font-bold text-black">
          Customers that use us
        </h2>
        <div className="slider">
          <div className="slide-track">
            {[...customerImages, ...customerImages].map((company, index) => (
              <div key={index} className="slide px-4">
                <Image width={200} height={200} src={company} alt={company} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
