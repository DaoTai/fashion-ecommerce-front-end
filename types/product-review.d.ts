type IProductReview = {
  id: string;
  rating: number;
  comment: string;
  createdAt: string;
  account: Pick<IAccount, "username" | "avatar">;
};
