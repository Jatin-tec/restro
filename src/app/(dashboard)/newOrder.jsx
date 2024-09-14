"use client";
import React, { useRef, useEffect, useState } from "react";
import InvoiceTemplate from "@/components/ui/bill/printInvoice";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Printer, UtensilsCrossed, VolumeX } from "lucide-react";
import Image from "next/image";
import { useOrderContext } from "@/context/OrderContext";

export function NewOrder() {
  const [drawerOpen, setDrawer] = useState(false);
  const [order, setLiveOrder] = useState(null);
  const { liveOrder, setOrder, subscriptionURL } = useOrderContext();
  
  useEffect(() => {
    const socket = new WebSocket(`ws://localhost:8000${subscriptionURL}/`);
    
    socket.onopen = () => {
      console.log("socket connected");
    };
    
    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setLiveOrder(data.message);
        setOrder({ ...liveOrder, newOrders: [...liveOrder.newOrders, data.message] });
        setDrawer(true);
      } catch (error) {
        console.error(error);
      }
    };

    return () => {
      socket.close();
    };
  }, [subscriptionURL, liveOrder, setOrder]);

  const printRef = useRef();

  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  return (
    <Dialog open={drawerOpen} onOpenChange={setDrawer}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle className="gap-6 flex items-center">
            New Order
            <Button size="sm" variant="outline" className="">
              Mute
              <VolumeX className="w-3.5 h-3.5 ml-1" />
            </Button>
          </DialogTitle>
        </DialogHeader>
        {order && (
          <div className="grid gap-4 p-4 border rounded-lg">
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm font-medium text-muted-foreground">
                Order placed on {new Date(order.created_at).toLocaleString()}
                <span className="flex item gap-2 text-lg mt-1">
                  ID: {order.order_id}
                  <Badge className="bg-blue-500 text-white">
                    {order.table}
                  </Badge>
                </span>
              </span>
              <div className="flex flex-col items-end text-base font-medium">
                1st Order by {order.user ? order.user : "Guest"}
                <div className="flex items-center border bg-muted px-2 rounded-full w-fit mt-2 animate-pulse">
                  <UtensilsCrossed className="w-5 h-5 mr-2" />
                  {order.order_type.toUpperCase()}
                </div>
              </div>
            </div>
            <Separator />
            {order.items.map((item, key) => (
              <div className="flex items-center justify-between" key={key}>
                <p className="font-medium flex items-center gap-2">
                  <Image src="/veg.svg" alt="Dash" height="16" width="16" />
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
            <Separator />
            <div className="flex items-center justify-between mt-2 gap-4">
              <Button
                onClick={handlePrint}
                className="w-full"
                variant="outline"
              >
                <Printer className="w-5 h-5 mr-2" />
                Print Bill
              </Button>
              <div className="hidden">
                <InvoiceTemplate ref={printRef} />
              </div>
              <Button className="w-full">Start Preparing</Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
