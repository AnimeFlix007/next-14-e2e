import { ButtonOne, ButtonTwo } from "@/app/components/common/Button";
import Image from "next/image";
import Link from "next/link";

const MainBanner = () => {
  return (
    <section className="py-8 sm:py-12 md:py-10 lg:py-10 xl:py-10 px-4 md:px-24">
      <div className="container flex flex-col-reverse items-center justify-center mx-auto md:flex-row">
        <div className="lg:w-1/2 animate__animated animate__fadeInLeft mb-8 md:mb-0 md:w-1/2">
          <h1 className="max-w-xl leading-none text-teal-500 font-extrabold text-center text-3xl lg:text-5xl lg:text-left lg:leading-tight mb-5">
            Transform your Marketing, Branding Sales{" "}
            <span className="text-black font-extrabold">
              with the power of Influencer Marketing{" "}
              <span className="text-rose-500 font-extrabold">.</span>
            </span>
          </h1>
          <p className="max-w-xl text-center text-gray-800 lg:text-left text-xl">
            With footprint.ai you can achieve your marketing goals, help build
            your brand, manage your campaigns seamlessly and achieve great
            returns on money spent
          </p>
          <div className="flex flex-wrap items-center mt-6 lg:mt-10 gap-6">
            <Link
              href={"/contact-us"}
              className="relative z-10 inline-flex items-center justify-center w-full px-6 py-2 text-lg text-white font-bold transition-all duration-200 bg-rose-500 border-2 border-black sm:w-auto rounded-xl font-pj hover:bg-white hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-[1px_1px_10px_4px_#e2e8f0]"
            >
              CONTACT US
            </Link>
            <ButtonTwo title={"KNOW MORE"} url={"http://app.footprynt.ai/"} />
          </div>
        </div>
        <div className="lg:w-1/2 animate__animated animate__fadeInRight md:w-1/2">
          <Image
            className="w-full h-auto ml-0 md:ml-5"
            src={"/bannerImage.png"}
            alt="Banner"
            width={300}
            height={300}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
