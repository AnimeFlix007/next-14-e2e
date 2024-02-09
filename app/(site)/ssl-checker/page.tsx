import Brands from "@/app/components/home/Brands";
import FAQ from "@/app/components/home/FAQ";
import Platform from "@/app/components/home/Platforms";
import SeoRanking from "@/app/components/freeTools/SeoRanking";
import ClientOnly from "@/app/client/ClientOnly";

type Props = {};

export default function page({}: Props) {
  return (
    <>
    <ClientOnly>
      <SeoRanking />
    </ClientOnly>
      <Platform />
      <Brands />
      <FAQ />
    </>
  );
}
