import dayjs from "dayjs";
import { CheckCircle2Icon, StarIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const ProductReview = ({ data }: { data: IProductReview }) => {
  const { account, comment, createdAt, id, rating } = data;
  const stars = Array.from(new Array(Math.floor(rating)).keys());
  const formatedCreatedAt = dayjs(createdAt).format("DD/MM/YYYY");
  return (
    <div className="h-full space-y-4 rounded-3xl border p-7">
      {/* Stars */}
      <div className="flex gap-2">
        {stars.map((star) => (
          <StarIcon key={star} className="fill-current text-yellow-400" />
        ))}
      </div>
      {/* Account */}
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage
            className="rounded-full border shadow-lg"
            src={account.avatar?.uri}
          />
          <AvatarFallback>{account.username}</AvatarFallback>
        </Avatar>
        <b className="text-xl">{account.username}</b>
        <CheckCircle2Icon className=" fill-green-400 text-white" />
      </div>
      {/* Comment */}
      <p className="line-clamp-3 text-justify text-black/60">"{comment}"</p>
      <p className="text-right text-sm">{formatedCreatedAt}</p>
    </div>
  );
};

export default ProductReview;
