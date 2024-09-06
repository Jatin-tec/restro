'use client';
import { useMenuContext } from "@/context/MenuContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TabsContent } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { EllipsisVertical, SquareDot, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AddCategory } from "./page";

// Recursive component to render categories, subcategories, and menu items
function CategoryComponent({ category }) {
  return (
    <Accordion type="single" collapsible value={category.name}>
      <AccordionItem value={category.name}>
        <AccordionTrigger>
          <div className="flex gap-8">{category.name}</div>
        </AccordionTrigger>
        <AccordionContent>
          {/* Check if sub_categories exists and has items */}
          {Array.isArray(category.sub_categories) &&
          category.sub_categories.length > 0
            ? // If subcategories exist, recursively render them
              category.sub_categories.map((subCategory) => (
                <CategoryComponent
                  key={subCategory.name}
                  category={subCategory}
                />
              ))
            : // If no subcategories, render the menu items
              category.food_items.map((item) => (
                <MenuItemComponent key={item.name} item={item} />
              ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

function MenuItemComponent({ item }) {
  const { toggleItemStockStatus, toggleItemFeaturedStatus, handleItemClick } =
    useMenuContext();
  return (
    <div
      className="grid grid-cols-4 w-full hover:shadow-sm p-4 border-b"
      onClick={() => handleItemClick(item)}
    >
      <div className="col-span-2">
        <span className="flex items-center font-bold cursor-pointer">
          <SquareDot className={`w-4 h-4 mr-2 ${item.status_color}`} />
          {item.name}
        </span>
        <p className="text-sm text-muted-foreground">{item.description}</p>
      </div>
      <p className="font-bold col-span-1 text-center">{item.price}</p>
      <div className="flex items-center gap-2 col-span-1 justify-end">
        <Switch onClick={() => toggleItemStockStatus()} />
        <Star className="w-6 h-6 text-gray-500 hover:fill-yellow-300" />
        <EllipsisVertical className="w-6 h-6 text-gray-500" />
      </div>
    </div>
  );
}

export function MenuAccordion({ categories }) {
  return (
    <TabsContent value="items" className="relative">
      <AddCategory />
      <Button className="ml-2">Add Item</Button>
      {categories &&
        categories.map((category) => (
          <CategoryComponent key={category.name} category={category} />
        ))}
    </TabsContent>
  );
}
