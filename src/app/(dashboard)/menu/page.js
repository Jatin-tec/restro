import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MenuAccordion } from "./MenuAccordion";
import { AddonsAccordion } from "./AddonsAccordion";
import { EditForm } from "./EditForm";
import { apiGet } from "@/handlers/apiHandler";
import { MenuProvider } from "@/context/MenuContext";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { logout } from "@/auth/lib";
import { Badge } from "@/components/ui/badge";
import Gallery from "./gallery";

async function Menu() {
  const [items, status] = await apiGet("/api/shop/menu");
  const addonsData = [
    {
      name: "Condiments",
      addonItems: [
        {
          name: "Butter",
          price: "₹20 +",
          statusColor: "text-yellow-500",
          description: "Add a rich buttery taste",
        },
        {
          name: "Dahi",
          price: "₹30 +",
          statusColor: "text-green-500",
          description: "Served chilled",
        },
      ],
    },
  ];

  return (
    <main className="flex flex-1 flex-col gap-4 lg:gap-6 max-h-screen">
      <MenuProvider>
        <section className="grid grid-cols-2 h-full">
          <div className="col-span-1 p-6 overflow-y-scroll">
            <Tabs defaultValue="items">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-lg font-semibold md:text-2xl">Menu</h1>

                <TabsList className="relative">
                  <TabsTrigger value="items">
                    Items
                    <Badge className="ml-1 flex bg-muted-foreground shrink-0 items-center justify-center rounded-full">
                      32
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger value="addons">
                    Add-ons
                    <Badge className="ml-1 flex bg-muted-foreground shrink-0 items-center justify-center rounded-full">
                      4
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger value="combo">
                    Combos
                    <Badge className="ml-1 flex bg-muted-foreground shrink-0 items-center justify-center rounded-full">
                      0
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger value="gallery">
                    Gallery
                    <Badge className="ml-1 flex bg-muted-foreground shrink-0 items-center justify-center rounded-full">
                      76
                    </Badge>
                  </TabsTrigger>
                </TabsList>
              </div>
              <MenuAccordion categories={items} />
              <AddonsAccordion categories={addonsData} />
              <TabsContent value="combo">
                <AddCategory />
                <Button className="ml-2">Add Combo</Button>
              </TabsContent>
              <TabsContent value="gallery">
                <Gallery />
              </TabsContent>
            </Tabs>
          </div>
          <EditForm />
        </section>
      </MenuProvider>
    </main>
  );
}

export function AddCategory() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="ml-auto">Add Category</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 mr-[6.5vh]">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Add new category</h4>
            <p className="text-sm text-muted-foreground">Parent Category </p>
          </div>

          <div>
            <Label htmlFor="width">Name</Label>
            <Input id="width" placeholder="Name" className="col-span-2 h-8" />
          </div>
          <Button>Save</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default Menu;