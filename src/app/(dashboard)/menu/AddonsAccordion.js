'use client';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { TabsContent } from "@/components/ui/tabs";
import {
    EllipsisVertical,
    SquareDot,
    Star,
} from "lucide-react";


// Recursive component to render categories and add-on items
function AddonCategoryComponent({ category, handleItemClick }) {
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
                            <AddonCategoryComponent key={subCategory.name} category={subCategory} handleItemClick={handleItemClick} />
                        ))
                    ) : (
                        // If no subcategories, render the addon items
                        category.addonItems.map((item) => <AddonItemComponent key={item.name} item={item} handleItemClick={handleItemClick} />)
                    )}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}

function AddonItemComponent({ item, handleItemClick }) {
    return (
        <div className="grid grid-cols-4 w-full hover:shadow-inner p-4" onClick={() => handleItemClick(item)}>
            <div className="col-span-2">
                <span className="flex items-center font-bold">
                    <SquareDot className={`w-4 h-4 mr-2 ${item.statusColor}`} />
                    {item.name}
                </span>
                <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
            <p className="font-bold col-span-1 text-center">{item.price}</p>
            <div className="flex items-center gap-2 col-span-1 justify-end">
                <Star className="w-6 h-6 text-gray-500 hover:fill-yellow-300" />
                <EllipsisVertical className="w-6 h-6 text-gray-500" />
            </div>
        </div>
    );
}

export function AddonsAccordion({ categories = [], handleItemClick }) {
    return (
        <TabsContent value="addons" className="p-4">
            {categories.map((category) => (
                <AddonCategoryComponent key={category.name} category={category} handleItemClick={handleItemClick} />
            ))}
        </TabsContent>
    );
}