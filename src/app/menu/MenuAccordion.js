// File: MenuAccordion.js

'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TabsContent } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import {
  EllipsisVertical,
  SquareDot,
  Star,
} from "lucide-react";


// Recursive component to render categories, subcategories, and menu items
function CategoryComponent({ category }) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={category.name}>
        <AccordionTrigger>
          <div className="flex gap-8">
            {category.name}
          </div>
        </AccordionTrigger>
        <AccordionContent>
          {category.subCategories ? (
            // If subcategories exist, recursively render them
            category.subCategories.map((subCategory) => (
              <CategoryComponent key={subCategory.name} category={subCategory} />
            ))
          ) : (
            // If no subcategories, render the menu items
            category.menuItems.map((item) => <MenuItemComponent key={item.name} item={item} />)
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

function MenuItemComponent({ item }) {
  return (
    <div className="grid grid-cols-4 w-full hover:shadow-inner p-4">
      <div className="col-span-2">
        <span className="flex items-center font-bold">
          <SquareDot className={`w-4 h-4 mr-2 ${item.statusColor}`} />
          {item.name}
        </span>
        <p className="text-sm text-muted-foreground">{item.description}</p>
      </div>
      <p className="font-bold col-span-1 text-center">{item.price}</p>
      <div className="flex items-center gap-2 col-span-1 justify-end">
        <Switch />
        <Star className="w-6 h-6 text-gray-500 hover:fill-yellow-300" />
        <EllipsisVertical className="w-6 h-6 text-gray-500" />
      </div>
    </div>
  );
}

export function MenuAccordion({ categories }) {
  console.log(categories, "categories");
  return (
    <TabsContent value="items" className="p-4">
      {categories && categories.map((category) => (
        <CategoryComponent key={category.name} category={category} />
      ))}
    </TabsContent>
  );
}
