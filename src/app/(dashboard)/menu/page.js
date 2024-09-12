"use server";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MenuAccordion } from "./MenuAccordion";
import { AddonsAccordion, AddCategory } from "./AddonsAccordion";
import { EditForm } from "./EditForm";
import { apiGet } from "@/handlers/apiHandler";
import { MenuProvider } from "@/context/MenuContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Gallery from "./gallery";
import { cookies } from "next/headers";
import { getSession } from "@/auth/lib";

export default async function Menu() {
  const cookieStore = cookies();
  const session = cookieStore.get("session")?.value;
  const user = await getSession(session);

  const items = await apiGet("/api/shop/menu", {
    headers: {
      Authorization: `Bearer ${user.tokens.access}`,
    },
  });
  console.log(items, 'items');

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
      </main>
    </MenuProvider>
  );
}
