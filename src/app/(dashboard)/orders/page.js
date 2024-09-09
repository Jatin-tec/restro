"use client";
import { useState } from "react";
import {
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UtensilsCrossed } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

export default function LiveOrder() {
  const [orders, setOrders] = useState({
    "newOrders": [{orderId: "23"}, {orderId: "24"}],
    "preparing": [{orderId: "22"}],
    "completed": [{orderId: "100"}],
  });

  const onDrop = (event, toStatus) => {
    const orderId = event.dataTransfer.getData("orderId");
    const fromStatus = event.dataTransfer.getData("fromStatus");

    if (fromStatus === toStatus) return;

    setOrders((prev) => {
      const fromItems = prev[fromStatus].filter((existingItem) => existingItem.orderId !== orderId);
      const toItems = [...prev[toStatus], prev[fromStatus].find((existingItem) => existingItem.orderId === orderId)];
      console.log(`${prev[fromStatus]},  fromItems: ${fromItems} toItems: ${toItems}`);
      return {
        ...prev,
        [toStatus]: toItems,
        [fromStatus]: fromItems,
      };
    });
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDragStart = (event, order, fromStaus) => {
    event.dataTransfer.setData("orderId", order.orderId);
    event.dataTransfer.setData("fromStatus", fromStaus);
  };

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Live Orders</h1>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {Object.keys(orders).map((status) => (
          <div 
            key={status} 
            className="flex flex-col gap-4" 
            onDrop={(event) => onDrop(event, status)}
            onDragOver={onDragOver}
          >
            <div className="text-lg font-bold mb-2 flex gap-2 items-center">
              <span>{status.toUpperCase()}</span>
              <Badge className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                {orders[status].length}
              </Badge>
            </div>
            <Card className="bg-muted pt-4 h-full">
              <CardContent>
                {orders[status].map((order) => (
                  <div 
                    className="order rounded-xl my-2 hover:shadow-md bg-white" 
                    key={order.orderId}
                    onDragStart={(event) => onDragStart(event, order, status)}
                    draggable>
                    <div className="grid gap-4 p-4">
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm font-medium text-muted-foreground">
                          Order placed on 23 Mar, 08:23 PM
                          <span className="flex item gap-2 text-lg mt-1">
                            ID: {order.orderId}
                            <Badge className="bg-blue-500 text-white">Table - 4 Inside</Badge>
                          </span>
                        </span>
                        <div className="flex flex-col items-end text-base font-medium">
                          1st Order by Rahul
                          <div className="flex items-center border bg-muted px-2 rounded-full w-fit mt-2 animate-pulse">
                            <UtensilsCrossed className="w-5 h-5 mr-2" />
                            DineIn
                          </div>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <p className="font-medium flex items-center gap-2">
                          <Image src="/veg.svg" alt="Dash" height="16" width="16" />
                          <span className="text-muted-foreground">1 x </span>
                          Chole Bhature
                        </p>
                        <span className="flex items-center text-base font-medium">₹ 120</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="font-medium flex items-center gap-2">
                          <Image src="/veg.svg" alt="Dash" height="16" width="16" />
                          <span className="text-muted-foreground">2 x </span>
                          Masala Dosa
                        </p>
                        <span className="flex items-center text-base font-medium">₹ 200</span>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-base">
                          Total Bill
                          <span className="ml-2 px-2 text-sm font-semibold border border-blue-500 text-blue-500 bg-blue-100 rounded-lg">
                            PAID
                          </span>
                        </p>

                        <span className="flex items-center text-base font-medium">₹ 320</span>
                      </div>
                    </div>
                    <Progress className="h-6 rounded-lg rounded-t-none" value={50} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </main>
  );
}
