import { huicai } from "@/data/cuisines/anhui";
import { yuecai } from "@/data/cuisines/cantonese";
import { mincai } from "@/data/cuisines/fujian";
import { xiangcai } from "@/data/cuisines/hunan";
import { sucai } from "@/data/cuisines/jiangsu";
import { lucai } from "@/data/cuisines/shandong";
import { chuancai } from "@/data/cuisines/sichuan";
import { zhecai } from "@/data/cuisines/zhejiang";
import type { CuisineCategory } from "@/lib/types";

export const getDishes = (category: CuisineCategory) => {
  switch (category) {
    case "hunan":
      return xiangcai;
    case "sichuan":
      return chuancai;
    case "cantonese":
      return yuecai;
    case "fujian":
      return mincai;
    case "jiangsu":
      return sucai;
    case "zhejiang":
      return zhecai;
    case "anhui":
      return huicai;
    case "shandong":
      return lucai;
    default:
      return [];
  }
};

export const getCategories = (): CuisineCategory[] => {
  const categories: CuisineCategory[] = [
    "sichuan",
    "hunan",
    "cantonese",
    "fujian",
    "jiangsu",
    "zhejiang",
    "anhui",
    "shandong",
  ];

  return categories;
};

export const getFoodDetails = (category: CuisineCategory, foodId: string) => {
  return getDishes(category).find((food) => food.id === foodId);
};
