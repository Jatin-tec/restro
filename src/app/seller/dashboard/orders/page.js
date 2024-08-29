import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Header } from "@/components/ui/dashboard/header";
import { Sidebar } from "@/components/ui/dashboard/sidebar";
import Link from "next/link";

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
          <div className="grid grid-cols-3 items-center justify-center gap-4">
            <Card className="col-span-1">
              <CardHeader className="border-b mb-2">
                <CardTitle className="text-lg">New Order</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative flex rounded-lg border p-4">
                  <div>
                    <Badge>Status</Badge>
                    <p>Tuesday, August 27, 2024 8:28 PM</p>
                    <p className="font-bold">Order #123456</p>
                    <p>Table: 4 | ₹1499</p>
                  </div>

                  <Button className="absolute bottom-4 right-4">
                    <Link href="orders/detail">View</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-1">
              <CardHeader className="border-b mb-2">
                <CardTitle className="text-lg">Accepted</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative flex rounded-lg border p-4">
                  <div>
                    <Badge>Status</Badge>
                    <p>Tuesday, August 27, 2024 8:28 PM</p>
                    <p className="font-bold">Order #123456</p>
                    <p>Table: 4 | ₹1499</p>
                  </div>
                  <Button className="absolute bottom-4 right-4">View</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-1">
              <CardHeader className="border-b mb-2">
                <CardTitle className="text-lg">Completed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative flex rounded-lg border p-4">
                  <div>
                    <Badge>Status</Badge>
                    <p>Tuesday, August 27, 2024 8:28 PM</p>
                    <p className="font-bold">Order #123456</p>
                    <p>Table: 4 | ₹1499</p>
                  </div>
                  <Button className="absolute bottom-4 right-4">View</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
