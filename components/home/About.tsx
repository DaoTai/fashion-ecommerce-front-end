import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[#F2F0F1]">
      <div className="container grid grid-cols-2 h-[663px] bg-banner bg-no-repeat bg-cover ">
        {/* Introduce */}
        <div className="flex flex-col justify-center gap-y-8">
          <h1 className="text-5xl leading-tight">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <article className="text-black/60">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </article>
          <Button className="rounded-full w-fit px-16 py-6 bg-black">
            Shop Now
          </Button>

          {/* Amounts */}
          <div className="flex justify-between ">
            <div className="">
              <b className="text-[40px] font-bold">200+</b>
              <p className="text-black/60">International Brands</p>
            </div>
            <div className="line h-full w-[1px] bg-black/10"></div>
            <div className="">
              <b className="text-[40px] font-bold">2,000+</b>
              <p className="text-black/60">High-Quality Products</p>
            </div>
            <div className="line h-full w-[1px] bg-black/10"></div>
            <div className="">
              <b className="text-[40px] font-bold">30,000+</b>
              <p className="text-black/60">Happy Customers</p>
            </div>
          </div>
        </div>
        {/* Banner image */}
        <div className="relative">
          <Image
            quality={100}
            src="/icon/bling.svg"
            alt="bling"
            width={103}
            height={103}
            className="size-14 absolute top-1/2 left-10"
          />
          <Image
            quality={100}
            src="/icon/bling.svg"
            alt="bling"
            width={103}
            height={103}
            className="size-24 absolute top-24 right-10"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
