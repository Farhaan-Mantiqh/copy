export interface ByCategoryItem {
  imgSrc: string;
  category: string;
}

export interface EcoStoreItem {
  imgSrc: string;
  from: string;
  product: string;
  coins: number;
  discountPrice: number;
  price: number;
  buttonTitle: string;
}

export interface HeadingConfig {
  beforeText: string;
  highlightedText: string;
  afterText: string;
}

export interface EcoStoreProduct {
  id: string;
  tax: number;
  name: string;
  active: boolean;

  images: string[];

  brand_id: string;
  brand_name: string;
  brand_description: string;

  discount: number;
  discounted_price: number;
  original_price: number;

  redeemable_eco_points: number;

  trending: boolean;
  best_seller: boolean;
  out_of_stock: boolean;

  category_id: string;

  description: string;
  short_description: string;

  temp_rating: number;
  max_buyable_qty: number;

  created_on: string;
  updated_on: string;
  is_deleted: boolean;
}
