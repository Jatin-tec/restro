"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QRCodeSVG } from "qrcode.react"; // Only using QRCodeSVG

export default function Home() {
  const [table, setTable] = useState("");
  const [color1, setColor1] = useState("#000000");
  const [color2, setColor2] = useState("#FFFFFF");

  const handleTableChange = (value) => setTable(value);
  const handleColor1Change = (event) => setColor1(event.target.value);
  const handleColor2Change = (event) => setColor2(event.target.value);

  // Generate QR code text based on the selected table
  const qrText = table ? `https://your-restaurant-url.com/table/${table}` : "";

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">QR Codes</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start justify-start">
        {/* QR Downloader */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>QR Downloader</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center h-96">
            {" "}
            {/* Adjust height for centering */}
            <div className="flex items-center justify-center w-full h-full mb-4">
              {table && (
                <QRCodeSVG
                  value={qrText}
                  fgColor={color1}
                  bgColor={color2}
                  size={150} // Size of the QR Code
                  className="w-40 h-40" // Adjusted width and height
                />
              )}
            </div>
            <Button
              className="w-full mt-4"
              onClick={() => alert("Download JPG functionality coming soon!")}
            >
              Download JPG
            </Button>
          </CardContent>
        </Card>

        {/* QR Template with QR Code */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>QR Template</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-auto mb-4">
              <img
                src="https://i.postimg.cc/3wYgrQ1G/Made-with-by-Cafe.png"
                alt="Template"
                className="w-full h-auto"
              />
              {table && (
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
                  <QRCodeSVG
                    value={qrText}
                    fgColor={color1}
                    bgColor={color2}
                    size={150} // Increased size
                    className="w-40 h-40" // Adjusted width and height
                  />
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* QR Generator */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Select Table</CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={table} onValueChange={handleTableChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a table" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">No specific table</SelectItem>
                <SelectItem value="table1">Table 1</SelectItem>
                <SelectItem value="table2">Table 2</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>

          <CardContent>
            <div className="mt-4">
              <label className="block font-medium mb-2">
                Select QR Color 1
              </label>
              <Input
                type="color"
                value={color1}
                onChange={handleColor1Change}
                className="w-full"
              />
            </div>
            <div className="mt-4">
              <label className="block font-medium mb-2">
                Select QR Color 2
              </label>
              <Input
                type="color"
                value={color2}
                onChange={handleColor2Change}
                className="w-full"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
