import { xiangcai } from "@/data/hunan";
import { chuancai } from "@/data/sichuan";
import type { CuisineCategory } from "@/lib/types";

export const getDishes = (category: CuisineCategory) => {
  switch (category) {
    case "hunan":
      return xiangcai;
    case "sichuan":
      return chuancai;
    case "cantonese":
      return chuancai;
    case "fujian":
      return chuancai;
    case "jiangsu":
      return chuancai;
    case "zhejiang":
      return chuancai;
    case "anhui":
      return chuancai;
    case "shandong":
      return chuancai;
    default:
      return [];
  }
};
