"use server";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MenuAccordion, AddCategory } from "./MenuAccordion";
import { AddonsAccordion } from "./AddonsAccordion";
import { EditForm } from "./EditForm";
import { MenuProvider } from "@/context/MenuContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getMenu } from "@/lib/menu/getMenu";
import { getAddons } from "@/lib/menu/getAddons";
import Gallery from "./gallery";

export default async function Menu() {
  const items = await getMenu();
  const addons = await getAddons();

  return (
    <MenuProvider>
      <main className="flex flex-1 flex-col gap-4 lg:gap-6 max-h-screen">
        <section className="grid grid-cols-2 h-full">
          <div className="col-span-1 p-6 overflow-y-scroll">
            <Tabs defaultValue="items">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-lg font-semibold md:text-2xl">Menu</h1>
                <TabsList className="relative">
                  <TabsTrigger value="items">
                    Items
                    <Badge className="ml-1 flex bg-muted-foreground shrink-0 items-center justify-center rounded-full">
                      {items.length}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger value="addons">
                    Add-ons
                    <Badge className="ml-1 flex bg-muted-foreground shrink-0 items-center justify-center rounded-full">
                      {addons.length}
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
              <AddonsAccordion categories={addons} />
              <TabsContent value="combo">
                <AddCategory />
                <Button className="ml-2">Add Combo</Button>
              </TabsContent>
              <TabsContent value="gallery">
                <Gallery />
              </TabsContent>
            </Tabs>
          </div>
          <EditForm foodCategory={items} addonCategory={addons} />
        </section>
      </main>
    </MenuProvider>
  );
}
