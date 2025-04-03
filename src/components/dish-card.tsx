import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Info } from "lucide-react";
import type { Dish } from "@/lib/types";

export default function DishCard({ food }: { food: Dish }) {
  const { id, categoryId, name, chineseName, description, imageUrl } = food;
  return (
    <a href={`/${categoryId}/${id}`}>
      <Card className="overflow-hidden w-full max-w-md transition-all duration-300 hover:shadow-lg">
        <div className="relative h-60 overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <Badge className="absolute top-3 left-3 capitalize bg-red-600 hover:bg-red-700">
            {categoryId}
          </Badge>
        </div>

        <CardContent className="pt-6 pb-2">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">{name}</h2>
              <p className="text-sm text-muted-foreground mt-1">
                {chineseName}
              </p>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </CardContent>

        <CardFooter className="flex justify-between pt-2 pb-6">
          <div className="flex items-center text-sm text-muted-foreground">
            <Info className="h-4 w-4 mr-1" />
            <span>ID: {id}</span>
          </div>
        </CardFooter>
      </Card>
    </a>
  );
}
