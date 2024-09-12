"use client";
// MenuContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import { getOrders } from "@/lib/orders/getLiveOrder";

// Create the context
const OrderContext = createContext();

// Create a custom hook to use the OrderContext
export const useOrderContext = () => useContext(OrderContext);

// Context provider component
export const OrderProvider = ({ children }) => {
  const [liveOrder, setOrder] = useState({
    newOrders: [],
    preparing: [],
    completed: [],
  });
  
  const fetchOrders = async () => {
    try {
      const data = await getOrders();
      setOrder(data);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  
  useEffect(() => {
    fetchOrders();
    console.log("fetching orders");
  }, []);
  
  return (
    <OrderContext.Provider value={{ liveOrder, fetchOrders, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
