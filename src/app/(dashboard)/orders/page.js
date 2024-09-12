"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UtensilsCrossed } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { useOrderContext } from "@/context/OrderContext";
import { updateOrderStatus, getOrders } from "@/lib/orders/getLiveOrder";

const STATUS = {
  newOrders: "pending",
  preparing: "processing",
  completed: "completed",
};

export default function LiveOrder() {
  const { liveOrder, setOrder } = useOrderContext();

  const onDrop = async (event, toStatus) => {
    const orderId = event.dataTransfer.getData("order_id");
    const fromStatus = event.dataTransfer.getData("fromStatus");
    
    if (fromStatus === toStatus) return;

    // Update the order status on the server
    try {
      await updateOrderStatus(orderId, STATUS[toStatus]); // Update status via API

      // Update the local state after a successful API response
      setOrder((prev) => {
        const fromItems = prev[fromStatus].filter(
          (existingItem) => existingItem.order_id !== orderId,
        );
        const toItems = [
          ...prev[toStatus],
          prev[fromStatus].find(
            (existingItem) => existingItem.order_id === orderId,
          ),
        ];
        return {
          ...prev,
          [toStatus]: toItems,
          [fromStatus]: fromItems,
        };
      });
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDragStart = (event, order, fromStatus) => {
    event.dataTransfer.setData("order_id", order.order_id);
    event.dataTransfer.setData("fromStatus", fromStatus);
  };

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Live Orders</h1>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {Object.keys(liveOrder).map((status) => (
          <div
            key={status}
            className="flex flex-col gap-4"
            onDrop={(event) => onDrop(event, status)}
            onDragOver={onDragOver}
          >
            <div className="text-lg font-bold mb-2 flex gap-2 items-center">
              <span>{status.toUpperCase()}</span>
              <Badge className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                {liveOrder[status].length}
              </Badge>
            </div>
            <Card className="bg-muted pt-4 h-full">
              <CardContent>
                {liveOrder[status].map((order) => (
                  <div
                    className="order rounded-xl my-2 hover:shadow-md bg-white"
                    key={order.order_id}
                    onDragStart={(event) => onDragStart(event, order, status)}
                    draggable
                  >
                    <div className="grid gap-4 p-4">
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm font-medium text-muted-foreground">
                          Order placed on{" "}
                          {new Date(order.created_at).toLocaleString()}
                          <span className="flex item gap-2 text-lg mt-1">
                            ID: {order.order_id.split("-")[0]}
                            <Badge className="bg-blue-500 text-white">
                              {order.table}
                            </Badge>
                          </span>
                        </span>
                        <div className="flex flex-col items-end text-base font-medium">
                          Order by {order.user}
                          <div className="flex items-center border bg-muted px-2 rounded-full w-fit mt-2 animate-pulse">
                            <UtensilsCrossed className="w-5 h-5 mr-2" />
                            {order.order_type}
                          </div>
                        </div>
                      </div>
                      <Separator />
                      {order.items.map((item, key) => (
                        <div
                          className="flex items-center justify-between"
                          key={key}
                        >
                          <p className="font-medium flex items-center gap-2">
                            <Image
                              src="/veg.svg"
                              alt="Dash"
                              height="16"
                              width="16"
                            />
                            <span className="text-muted-foreground">{item.quantity} x </span>
                            {item.food_item.name}
                          </p>
                          <span className="flex items-center text-base font-medium">
                            ₹ {item.totalPrice}
                          </span>
                        </div>
                      ))}
                      <Separator />
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-base">
                          Total Bill
                          <span className="ml-2 px-2 text-sm font-semibold border border-blue-500 text-blue-500 bg-blue-100 rounded-lg">
                            PAID
                          </span>
                        </p>

                        <span className="flex items-center text-base font-medium">
                          ₹ {order.total}
                        </span>
                      </div>
                    </div>
                    <Progress
                      className="h-6 rounded-lg rounded-t-none"
                      value={50}
                    />
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
