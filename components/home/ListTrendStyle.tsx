import React from "react";

const ListTrendStyle = () => {
  return (
    <section className="container px-16 py-[80px] ">
      <h1 className="home__title">BROWSE BY DRESS STYLE</h1>
      <div className="space-y-8">
        <div className="flex">
          <div className="bg-styleCasual h-[289px] w-full basis-4/12 bg-cover bg-no-repeat"></div>
          <div className="bg-styleFormal h-[289px] w-full basis-8/12 bg-cover bg-no-repeat"></div>
        </div>
        <div className="flex">
          <div className="bg-styleParty h-[289px] w-full basis-8/12 bg-cover bg-no-repeat"></div>
          <div className="bg-styleGym h-[289px] w-full basis-4/12 bg-cover bg-no-repeat"></div>
        </div>
      </div>
    </section>
  );
};

export default ListTrendStyle;
