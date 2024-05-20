"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductReview from "../Product/ProductReview";

const mockData: IProductReview[] = [
  {
    id: "c5bf739c-0a2a-4777-b8dc-99c1e4fb5c85",
    rating: 5,
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    createdAt: "2024-05-17T07:32:34.069Z",
    account: {
      username: "user111",
      avatar: {
        id: "fashion-ecommerce/accounts/1715935451431-11836575",
        type: "image",
        provider: "cloudinary",
        uri: "https://res.cloudinary.com/diublfpli/image/upload/v1715935473/fashion-ecommerce/accounts/1715935451431-11836575.jpg",
      },
    },
  },
  {
    id: "f420404b-4b50-42bb-b154-fb5248d7d221",
    rating: 2,
    comment: "So flashy",
    createdAt: "2024-05-17T07:32:30.296Z",
    account: {
      username: "user111",
      avatar: {
        id: "fashion-ecommerce/accounts/1715935451431-11836575",
        type: "image",
        provider: "cloudinary",
        uri: "https://res.cloudinary.com/diublfpli/image/upload/v1715935473/fashion-ecommerce/accounts/1715935451431-11836575.jpg",
      },
    },
  },
  {
    id: "1a8a5e3d-d2f0-4712-9719-5a57aa2bdb27",
    rating: 3,
    comment: "So flashy",
    createdAt: "2024-05-17T07:25:59.958Z",
    account: {
      username: "user111",
      avatar: {
        id: "fashion-ecommerce/accounts/1715935451431-11836575",
        type: "image",
        provider: "cloudinary",
        uri: "https://res.cloudinary.com/diublfpli/image/upload/v1715935473/fashion-ecommerce/accounts/1715935451431-11836575.jpg",
      },
    },
  },
  {
    id: "c55a860e-f9c3-4fe2-b407-4564da58a1d4",
    rating: 3,
    comment: "Khuyên tai lấp lánh",
    createdAt: "2024-05-17T07:22:25.578Z",
    account: {
      username: "user123",
      avatar: null,
    },
  },
];

const ListReview = () => {
  return (
    <section className="container mt-[50px]">
      <Carousel>
        <div className="flex justify-between">
          <h1 className="home__title text-left">OUR HAPPY CUSTOMERS</h1>
          <div className="flex flex-1 items-center justify-end gap-4">
            <CarouselPrevious className="static translate-x-0" />
            <CarouselNext className="static translate-x-0" />
          </div>
        </div>
        <CarouselContent>
          {mockData.map((review) => (
            <CarouselItem className="basis-full lg:basis-1/3" key={review.id}>
              <ProductReview data={review} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default ListReview;
