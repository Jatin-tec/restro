import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/dashboard/header";
import { Sidebar } from "@/components/ui/dashboard/sidebar";
import { OrderTable } from "./data";

export default function Dashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Orders</h1>
          </div>
          <OrderTable />
        </main>
      </div>
    </div>
  );
}
