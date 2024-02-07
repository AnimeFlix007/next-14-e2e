import Blogs from "@/app/components/blogs";
import Footer from "@/app/components/common/Footer";
import Brands from "@/app/components/home/Brands";
import FAQ from "@/app/components/home/FAQ";
import Platform from "@/app/components/home/Platforms";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <Blogs />
      <Platform />
      <Brands />
      <FAQ />
      <br />
      <br />
      <Footer />
    </>
  );
}
