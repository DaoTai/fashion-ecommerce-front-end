import React from "react";
import ProductVariantPreview from "../Product/ProductVariantPreview";
import { Button } from "../ui/button";

const mockData: IProductVariantPreview[] = [
  {
    id: "123",
    averageRating: 4.5,
    name: "T shirt caro",
    percentDiscount: 20,
    sellingPrice: 300,
    image: {
      id: "121212",
      provider: "cloudinary",
      type: "image",
      uri: "https://i.pinimg.com/originals/f7/1c/5c/f71c5c1e89dbb27a7e840b6fb60932eb.png",
    },
  },
  {
    id: "123456",
    averageRating: 3,
    name: "Jean",
    percentDiscount: 10,
    sellingPrice: 300,
    image: {
      id: "121212",
      provider: "cloudinary",
      type: "image",
      uri: "https://i.pinimg.com/736x/82/43/cb/8243cb3fe7f5c6a93aed0e5f14721f06.jpg",
    },
  },
  {
    id: "abc",
    averageRating: 4,
    name: "$maker T-shirt",
    percentDiscount: 5,
    sellingPrice: 260,
    image: {
      id: "313",
      provider: "cloudinary",
      type: "image",
      uri: "https://img.lazcdn.com/g/p/d2dacacd8a75bc86906aadd90bff3250.jpg_720x720q80.jpg",
    },
  },
  {
    id: "abc",
    averageRating: 4,
    name: "$maker Hat Truckers",
    percentDiscount: 5,
    sellingPrice: 150,
    image: {
      id: "313",
      provider: "cloudinary",
      type: "image",
      uri: "https://img.ws.mms.shopee.vn/a3e59669c6550beba0c580c9b04d5b12",
    },
  },
];

const ListTrendProductVariant = () => {
  return (
    <section className="container mt-[50px] space-y-20 md:mt-[72px]">
      {/* NEW ARRIVALS */}
      <div>
        <h1 className="home__title">NEW ARRIVALS</h1>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2  md:grid-cols-4">
          {mockData.map((productVariant, i) => (
            <ProductVariantPreview key={i} data={productVariant} />
          ))}
        </div>
        <Button className="mx-auto mt-9 flex items-center rounded-full border border-black/20 bg-white px-16 py-6  text-black hover:bg-black hover:text-white">
          View All
        </Button>
      </div>

      {/* TOP SELLING */}
      <div>
        <h1 className="home__title">TOP SELLING</h1>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2  md:grid-cols-4">
          {mockData.map((productVariant, i) => (
            <ProductVariantPreview key={i} data={productVariant} />
          ))}
        </div>
        <Button className="mx-auto mt-9 flex items-center  rounded-full border border-black/20 bg-white px-16 py-6 text-black hover:bg-black hover:text-white">
          View All
        </Button>
      </div>
    </section>
  );
};

export default ListTrendProductVariant;
