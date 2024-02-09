import Brands from "@/app/components/home/Brands";
import FAQ from "@/app/components/home/FAQ";
import Platform from "@/app/components/home/Platforms";
import FreeInfluencerOutrichForm from "@/app/components/freeTools/FreeInfluencerOutrichForm"
import ClientOnly from "@/app/client/ClientOnly";


const FreeInfluencerOutrich = () => {
  return (
    <>
    <ClientOnly>
      <FreeInfluencerOutrichForm />
    </ClientOnly>
      <Platform />
      <Brands />
      <FAQ />
    </>
  );
};

export default FreeInfluencerOutrich;