import Image from "next/image";
import React from "react";

const ListBrand = () => {
  return (
    <section className="w-screen bg-black py-6">
      <div className="container flex flex-wrap items-center justify-center gap-4 drop-shadow-md md:justify-between">
        <Image
          quality={100}
          src="/icon/versace.svg"
          alt="brand"
          width={100}
          height={50}
          className="w-24 md:w-32"
        />
        <Image
          quality={100}
          src="/icon/zara.svg"
          alt="brand"
          width={100}
          height={50}
          className="w-24 md:w-32"
        />
        <Image
          quality={100}
          src="/icon/gucci.svg"
          alt="brand"
          width={100}
          height={50}
          className="w-24 md:w-32"
        />
        <Image
          quality={100}
          src="/icon/prada.svg"
          alt="brand"
          width={100}
          height={50}
          className="w-24 md:w-32"
        />
        <Image
          quality={100}
          src="/icon/calvin-klein.svg"
          alt="brand"
          width={100}
          height={50}
          className="w-24 md:w-32"
        />
      </div>
    </section>
  );
};

export default ListBrand;
