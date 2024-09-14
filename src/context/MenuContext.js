'use client';
// MenuContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the context
const MenuContext = createContext();

// Create a custom hook to use the MenuContext
export const useMenuContext = () => useContext(MenuContext);

// Context provider component
export const MenuProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [menuItems, setMenuItems] = useState([]); // To manage all menu items
  const [featuredItems, setFeaturedItems] = useState([]); // To manage featured items
  const [addonItems, setAddonItems] = useState([]); // Manage addon items
  const [editType, setEditType] = useState("menu"); // New: To differentiate between item types

  // Function to handle item selection
  const handleItemClick = (item, type = "menu") => {
    setSelectedItem(item);
    setEditType(type);
  };

  // Function to toggle item in stock status
  const toggleItemStockStatus = (itemId) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, inStock: !item.inStock } : item
      )
    );
  };

  // Function to toggle item featured status
  const toggleItemFeaturedStatus = (itemId) => {
    setFeaturedItems((prevItems) =>
      prevItems.includes(itemId)
        ? prevItems.filter((id) => id !== itemId)
        : [...prevItems, itemId]
    );
  };

  // Function to save the edited item details
  const handleSave = (updatedItem, type="menu") => {
    console.log(updatedItem, "Updated Item");
    // setMenuItems((prevItems) =>
    //   prevItems.map((item) =>
    //     item.id === updatedItem.id ? updatedItem : item
    //   )
    // );
    // setSelectedItem(null); // Optionally reset selected item after saving
  };

  return (
    <MenuContext.Provider
      value={{
        selectedItem,
        editType,
        handleItemClick,
        toggleItemStockStatus,
        toggleItemFeaturedStatus,
        handleSave,
        menuItems,
        featuredItems,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
