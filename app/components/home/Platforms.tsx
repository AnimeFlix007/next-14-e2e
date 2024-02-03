import Image from "next/image";
import { ButtonTwo } from "../common/Button";

const Platform = () => {
  return (
    <div className="mt-10 mb-20">
      <section>
        <Image
          className="h-28 w-28 float-left"
          data-aos="zoom-in"
          src={"/common/star.png"}
          alt="star-image"
          width={300}
          height={300}
        />
        <div className="container mx-auto flex px-5 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h4 className="text-4xl font-bold text-black" data-aos="fade-up">
              Why{" "}
              <span className="bg-gray-200 rounded-full px-6 py-2">
                Footprynt.ai
              </span>
            </h4>
            <p
              className="mb-8 mt-8 leading-relaxed text-xl text-gray-500 font-serif"
              data-aos="fade-up"
            >
              {" "}
              FootPrynt.ai is not just a tool to find influencer, we’re your
              partner in influencer marketing success. With our easy-to-use
              platform, you’ll plan better, organize well, and execute
              brilliant. The service and dedication of our client servicing team
              is legendary. Join leading brands and agencies who trust
              FootPrynt.ai to power their influencer marketing campaigns.
            </p>
            <div className="flex justify-center">
              <ButtonTwo
                title={"GET STARTED WITH FootPrynt.AI TODAY"}
                data-aos="fade-up"
                url={"http://app.footprynt.ai/"}
              />
            </div>
          </div>
        </div>
        <Image
          className="h-28 w-28 float-right hidden md:block"
          src={"/common/star.png"}
          alt="star-image"
          width={300}
          height={300}
        />
      </section>
    </div>
  );
};

export default Platform;
