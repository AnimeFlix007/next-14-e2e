import MainBanner from "../components/home/MainBanner";
import Customers from "../components/home/Customers";
import Platform from "../components/home/Platforms";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testiminials";
import ClientOnly from "../client/ClientOnly";
import Brands from "../components/home/Brands";
import FAQ from "../components/home/FAQ";
import { ButtonOne } from "../components/common/Button";
import Footer from "../components/common/Footer";

export default function Home() {
  return (
    <>
      <MainBanner />
      <Customers />
      <Platform />
      <ClientOnly>
        <Services />
        <Testimonials />
      </ClientOnly>
      <Brands />
      <FAQ />

      <div
        className="p-4 items-center justify-center mx-auto mt-10 md:px-18 mb-4"
        data-aos="zoom-in"
      >
        <h3 className="text-center text-3xl font-extrabold mb-6">
          Discover &amp; Analyse influencers in over 15 countries, over 1
          million influencer <br /> and Automate your Influencer marketing.
        </h3>
        <div className="flex flex-wrap gap-6 items-center justify-center mx-auto md:px-18">
          <div className="w-full md:w-auto">
            <ButtonOne title={"Start 7-Day Free Trial"} url={"/pricing"} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
