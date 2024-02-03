import MainBanner from "../components/home/MainBanner";
import Customers from "../components/home/Customers";
import Platform from "../components/home/Platforms";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testiminials";
import ClientOnly from "../client/ClientOnly";

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
    </>
  );
}
