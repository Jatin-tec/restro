import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MenuAccordion } from "./MenuAccordion";
import { AddonsAccordion } from "./AddonsAccordion";
import { EditForm } from "./EditForm";
import { apiGet } from "@/handlers/apiHandler";
import { MenuProvider } from "@/context/MenuContext";


export default async function Menu() {

  const items = await apiGet("/api/shop/menu/1")

  const addonsData = [
    {
      name: "Condiments",
      addonItems: [
        {
          name: "Butter",
          price: "₹20 +",
          statusColor: "text-yellow-500",
          description: "Add a rich buttery taste"
        },
        {
          name: "Dahi",
          price: "₹30 +",
          statusColor: "text-green-500",
          description: "Served chilled"
        }
      ]
    }
  ];

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Menu</h1>
      </div>
      <div className="grid grid-cols-2">
        <MenuProvider>
          <div className="col-span-1">
            <Tabs defaultValue="items">
              <TabsList>
                <TabsTrigger value="items">Items</TabsTrigger>
                <TabsTrigger value="addons">Add-ons</TabsTrigger>
              </TabsList>
              <MenuAccordion categories={items} />
              <AddonsAccordion categories={addonsData} />
            </Tabs>
          </div>
          <EditForm />
        </MenuProvider>
      </div>
    </main>
  );
}
