type IProduct = {
  id: string;
  name: string;
  description: string;
  category: string;
  purchasePrice: number;
  sellingPrice: number;
  createdAt: string;
  slug: string;
  deletedAt: null | string;
};

type IProductVariantPreview = {
  id: string;
  image: IAttachment;
  name: string;
  averageRating: number;
  sellingPrice: number;
  percentDiscount: number;
};
