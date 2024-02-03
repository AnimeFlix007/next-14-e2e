import Image from "next/image";
import { ButtonTwo } from "../common/Button";

const Platform = () => {
  return (
    <div className="my-10">
      <section>
        <Image
          className="h-28 w-28 float-left"
          data-aos="zoom-in"
          src={"/common/star.png"}
          alt="star-image"
          width={300}
          height={300}
          loading="lazy"
        />
        <div className="container mx-auto flex items-center justify-center flex-col px-4 md:px-16">
          <div className="text-center w-full">
            <h4 className="text-3xl md:text-4xl font-extrabold text-black" data-aos="fade-up">
              Why{" "}
              <span className="bg-gray-200 rounded-full px-3 py-2">
                Footprynt.ai
              </span>
            </h4>
            <p
              className="my-8 leading-relaxed text-2xl text-gray-800 font-medium"
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
          loading="lazy"
        />
      </section>
    </div>
  );
};

export default Platform;
