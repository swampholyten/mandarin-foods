import { huicai } from "@/data/anhui";
import { yuecai } from "@/data/cantonese";
import { mincai } from "@/data/fujian";
import { xiangcai } from "@/data/hunan";
import { sucai } from "@/data/jiangsu";
import { lucai } from "@/data/lusu";
import { chuancai } from "@/data/sichuan";
import { zhecai } from "@/data/zhejiang";
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
