import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[#F2F0F1]">
      <div className="container flex h-auto min-h-[663px] flex-wrap  md:bg-none  md:bg-cover md:bg-no-repeat lg:bg-banner">
        {/* Introduce */}
        <div className="flex basis-full flex-col justify-center gap-y-6 lg:basis-1/2">
          <h1 className="text-5xl font-extrabold leading-tight">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <article className="text-black/60">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </article>
          <Button className="w-full rounded-full  bg-black px-16 py-6 sm:w-fit">
            Shop Now
          </Button>

          {/* Amounts */}
          <div className="flex flex-wrap items-center justify-between gap-2 md:flex-nowrap">
            <div className="h-fit">
              <b className="text-[40px] font-bold">200+</b>
              <p className="text-black/60">International Brands</p>
            </div>
            <div className="h-1/2 w-[1px] bg-black/10 md:h-full"></div>
            <div className="h-fit">
              <b className="text-[40px] font-bold">2,000+</b>
              <p className="text-black/60">High-Quality Products</p>
            </div>
            <div className="hidden h-1/2 w-[1px] bg-black/10 sm:block md:h-full"></div>
            <div className="h-fit flex-1 text-center sm:flex-none">
              <b className="text-[40px] font-bold">30,000+</b>
              <p className="text-black/60">Happy Customers</p>
            </div>
          </div>
        </div>
        {/* Banner image */}
        <div className="relative basis-full lg:basis-1/2">
          <Image
            unoptimized
            src="/img/banner-mobile.png"
            alt="bling"
            width={103}
            height={103}
            className="block h-full w-full lg:hidden"
          />
          <Image
            quality={100}
            src="/icon/bling.svg"
            alt="bling"
            width={103}
            height={103}
            className="absolute left-10 top-1/2 size-14"
          />
          <Image
            quality={100}
            src="/icon/bling.svg"
            alt="bling"
            width={103}
            height={103}
            className="absolute right-10 top-24 size-24"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
