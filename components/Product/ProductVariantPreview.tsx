import { StarIcon } from "lucide-react";

const ProductVariantPreview = ({ data }: { data: IProductVariantPreview }) => {
  const { averageRating, id, image, name, percentDiscount, sellingPrice } =
    data;
  return (
    <div className="space-y-2 border bg-white p-2 hover:shadow-xl">
      <img
        src={image.uri}
        alt="product-image"
        className="h-[300px] w-full bg-white bg-cover bg-center"
      />
      <h4 className="text-xl font-bold">{name}</h4>
      {/* Avg rating */}
      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          {Array.from(Array(Math.floor(averageRating)).keys()).map((i) => (
            <StarIcon key={i} className="fill-current text-yellow-400" />
          ))}
        </div>
        <p className="text-sm">{averageRating}/5</p>
      </div>
      <div className="flex items-center gap-3 text-xl">
        <b>${(sellingPrice * (100 - percentDiscount)) / 100}</b>
        <b className="text-black/40 line-through">${sellingPrice}</b>
        <span className="text-sm text-red-700">-{percentDiscount}%</span>
      </div>
    </div>
  );
};

export default ProductVariantPreview;
