import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const cuisines = [
  {
    title: "Sichuan Cuisine",
    href: "/sichuan",
    description:
      "Known for bold flavors, particularly the pungency and spiciness resulting from liberal use of garlic and chili peppers.",
    image: "/sichuan/mapo-tofu.jpeg",
  },
  {
    title: "Hunan Cuisine",
    href: "/hunan",
    description:
      "Known for its hot spicy flavor, fresh aroma and deep color. Common cooking techniques include stewing, frying, pot-roasting, braising, and smoking.",
    image: "/hunan/sisters-dumplings.jpeg",
  },
  {
    title: "Cantonese Cuisine",
    href: "/cantonese",
    description:
      "Features mild, fresh and natural flavors, with a tender and slightly sweet taste. Steaming and stir-frying are the most common cooking methods.",
    image: "/cantonese/garlic-flavored-pork-ribs.jpeg",
  },
  {
    title: "Fujian Cuisine",
    href: "/fujian",
    description:
      "Known for its emphasis on umami taste, light but flavorful broths and soups, and expertise in cooking seafood.",
    image: "/fujian/finger-shaped-dried-scallops.jpeg",
  },
  {
    title: "Jiangsu Cuisine",
    href: "/jiangsu",
    description:
      "Known for its soft texture, moderate seasoning and emphasis on the original flavor of the ingredients.",
    image: "/jiangsu/crystal-pork-aspic.jpeg",
  },
  {
    title: "Zhejiang Cuisine",
    href: "/zhejiang",
    description:
      "Known for its fresh, tender, soft and smooth texture, with a mellow fragrance. Focus on seafood and freshwater fish.",
    image: "/zhejiang/dongpo-pork.jpeg",
  },
  {
    title: "Anhui Cuisine",
    href: "/anhui",
    description:
      "Known for its use of wild herbs and simple preparation methods. Braising and stewing are common cooking techniques.",
    image: "/anhui/huangshan-hairy-tofu.jpeg",
  },
  {
    title: "Shandong Cuisine",
    href: "/shandong",
    description:
      "Characterized by its emphasis on aroma, freshness, crispness and tenderness. Deep-frying, roasting, and braising are common cooking techniques.",
    image: "/shandong/dezhou-braised-chicken.jpeg",
  },
];

export function DesktopNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Cuisines</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[800px] p-4">
              <div className="grid grid-cols-2 gap-4">
                {cuisines.map((cuisine) => (
                  <CuisineCard
                    key={cuisine.title}
                    title={cuisine.title}
                    href={cuisine.href}
                    description={cuisine.description}
                    image={cuisine.image}
                  />
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/about">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-6 mt-6">
          <a href="/" className="flex items-center gap-2 text-lg font-semibold">
            Chinese Cuisine
          </a>

          <div>
            <h3 className="text-lg font-medium mb-3">Cuisines</h3>
            <div className="grid grid-cols-1 gap-4">
              {cuisines.map((cuisine) => (
                <a
                  key={cuisine.title}
                  href={cuisine.href}
                  className="flex items-center gap-3 hover:underline"
                >
                  <div className="relative w-16 h-12 overflow-hidden rounded-md">
                    <img
                      src={cuisine.image || "/placeholder.svg"}
                      alt={cuisine.title}
                      className="object-cover"
                    />
                  </div>
                  <span>{cuisine.title}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <a href="/about" className="text-lg hover:underline">
              About
            </a>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

interface CuisineCardProps {
  title: string;
  href: string;
  description: string;
  image: string;
}

function CuisineCard({ title, href, description, image }: CuisineCardProps) {
  return (
    <a href={href} className="group block">
      <div className="flex gap-4 rounded-lg p-3 transition-colors hover:bg-accent">
        <div className="relative w-24 h-22 overflow-hidden rounded-md shrink-0">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-base font-medium group-hover:underline">
            {title}
          </h3>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}
