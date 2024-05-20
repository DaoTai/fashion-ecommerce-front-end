import React from "react";

const ListTrendStyle = () => {
  return (
    <section className="container mt-[50px] bg-[#F0F0F0]  py-[40px] md:px-16">
      <h1 className="home__title text-5xl font-extrabold">
        BROWSE BY DRESS STYLE
      </h1>
      <div className="space-y-8">
        <div className="flex flex-wrap gap-4 md:flex-nowrap">
          <div className="h-[310px] w-full basis-full rounded-lg bg-styleCasual bg-cover bg-no-repeat md:h-[289px] md:basis-6/12 lg:basis-4/12"></div>
          <div className="h-[310px] w-full basis-full rounded-lg bg-styleFormal bg-cover bg-no-repeat md:h-[289px] md:basis-6/12 lg:basis-8/12"></div>
        </div>
        <div className="flex flex-wrap gap-4 md:flex-nowrap">
          <div className="h-[310px] w-full basis-full rounded-lg bg-styleParty bg-cover bg-no-repeat md:h-[289px] md:basis-6/12 lg:basis-8/12"></div>
          <div className="h-[310px] w-full basis-full rounded-lg bg-styleGym bg-cover bg-no-repeat md:h-[289px] md:basis-6/12 lg:basis-4/12"></div>
        </div>
      </div>
    </section>
  );
};

export default ListTrendStyle;
