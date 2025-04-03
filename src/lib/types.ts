export interface Dish {
  id: string;
  categoryId: string;
  name: string;
  chineseName: string;
  description: string;
  chineseDescription: string;
  imageUrl: string;
}

export interface Category {
  id: CuisineCategory;
  name: string;
  chineseName: string;
  imageUrl?: string;
  description: string;
  characteristics: string[];
  commonIngredients: string[];
}

export type CuisineCategory =
  | "sichuan"
  | "hunan"
  | "cantonese"
  | "fujian"
  | "jiangsu"
  | "zhejiang"
  | "anhui"
  | "shandong"
  | "other";
