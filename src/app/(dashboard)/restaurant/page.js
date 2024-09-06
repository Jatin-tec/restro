"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  CloudUpload,
  Edit,
  HandPlatter,
  Images,
  LocateFixed,
  Plus,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { TimePickerDemo } from "./timeSelect";

export default function Manage() {
  const [date, setDate] = React.useState(new Date());

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Manage Restaurant</h1>
      </div>
      <Tabs defaultValue="info" className="w-full">
        <TabsList>
          <TabsTrigger value="info">Restaurant Management</TabsTrigger>
          <TabsTrigger value="hour">Images</TabsTrigger>
          <TabsTrigger value="documents">Documnets</TabsTrigger>
          <TabsTrigger value="location">Payments</TabsTrigger>
        </TabsList>
        <TabsContent value="info">
          <Card className="p-8">
            <div className="grid grid-cols-3">
              <div className="grid md:col-span-1 w-full max-w-sm items-center gap-3">
                <p className="font-bold mb-2">Restaurant Details</p>
                <Label htmlFor="name">Restaurant Name</Label>
                <Input type="text" id="name" placeholder="Sagar Gaire" />

                <Label htmlFor="description">Restaurant Description</Label>
                <Textarea
                  placeholder="Type your description here."
                  id="description"
                />

                <Label htmlFor="address">Restaurant Address</Label>
                <Input
                  type="text"
                  id="address"
                  placeholder="6 Yukon Drive Raeford, NC 28376"
                />

                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />

                <Label htmlFor="email">Phone</Label>
                <Input type="phone" id="email" placeholder="+91-8877665522" />

                <div className="mt-4">
                  <h2 className="flex items-center font-semibold text-base mb-1">
                    Service Type
                  </h2>
                  <Card className="flex gap-2 p-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="dineIn" />
                      <label
                        htmlFor="dineIn"
                        className=" flex gap-2 items-center leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        <HandPlatter /> DineIn
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="takeaway" />
                      <label
                        htmlFor="takeaway"
                        className=" flex gap-2 items-center leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        <ShoppingBag /> Takeaway
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox />
                      <label
                        htmlFor="delivery"
                        className=" flex gap-2 items-center leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        <Truck /> Delivery
                      </label>
                    </div>
                  </Card>
                </div>

                <div className="relative">
                  <Label htmlFor="dropzone-file">Location</Label>
                  <iframe
                    className="w-full h-52 border-0 rounded-xl"
                    src="https://www.google.com/maps/embed/v1/place?q=hotel+taj+mumbai&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  />
                  <Button className="absolute top-4 right-2 mt-4">
                    <LocateFixed className="w-4 h-4 mr-2" /> Select Location
                  </Button>
                </div>
              </div>

              <div className="flex flex-col md:col-span-1 w-full max-w-sm gap-3">
                <p className="font-bold mb-2">Orders</p>
                <Label htmlFor="min">Minimun Order Value</Label>
                <Input type="number" id="min" placeholder="Rs. 149" />

                <Label htmlFor="avgtime">
                  Average order prepare time in minutes
                </Label>
                <Select id="avgtime">
                  <SelectTrigger>
                    <SelectValue placeholder="Select Time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 Mins</SelectItem>
                    <SelectItem value="45">45 Mins</SelectItem>
                    <SelectItem value="60">60 Mins</SelectItem>
                  </SelectContent>
                </Select>

                <Label htmlFor="septime">Time slots separated in minutes</Label>
                <Select id="septime">
                  <SelectTrigger>
                    <SelectValue placeholder="Select Time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10 Mins</SelectItem>
                    <SelectItem value="20">20 Mins</SelectItem>
                    <SelectItem value="30">30 Mins</SelectItem>
                  </SelectContent>
                </Select>

                <p className="font-bold my-4">Whatsapp</p>
                <Label htmlFor="whatsapp">Whatsapp Number</Label>
                <Input
                  type="phone"
                  id="whatsapp"
                  placeholder="+91-8877665522"
                />
              </div>

              <div className="flex flex-col col-span-1">
                <p className="font-bold mb-2">Operational Timings</p>
                <div className="w-fit border rounded-lg p-4">
                  <OutletTimings />
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="documents">
          <Card className="p-8">
            <OutletDocuments />
          </Card>
        </TabsContent>
        <TabsContent value="hour">
          <Card className="p-8">
            <Image />
          </Card>
        </TabsContent>
        <TabsContent value="location">
          <Card className="p-8">
            <PaymentSettings />
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}

export function OutletTimings() {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const initialDate = new Date(); // Initialize with current time

  const [dates, setDates] = React.useState(
    daysOfWeek.map(() => ({
      opening: new Date(initialDate),
      closing: new Date(initialDate),
    })),
  );

  const handleDateChange = (dayIndex, type, newDate) => {
    const updatedDates = [...dates];
    updatedDates[dayIndex][type] = newDate;
    setDates(updatedDates);
  };

  return (
    <Table>
      <TableCaption>
        Your outlet will be automatically marked online in these timings.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Day</TableHead>
          <TableHead>Opening</TableHead>
          <TableHead></TableHead>
          <TableHead>Closing</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dates.map((dayData, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">
              <div className="flex items-center space-x-2">
                <Checkbox id={`day${index}`} />
                <label
                  htmlFor={`day${index}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {daysOfWeek[index]}
                </label>
              </div>
            </TableCell>
            <TableCell>
              <TimePickerDemo
                id={`opening-${index}`}
                date={dayData.opening}
                setDate={(newDate) =>
                  handleDateChange(index, "opening", newDate)
                }
              />
            </TableCell>
            <TableCell>-</TableCell>
            <TableCell>
              <TimePickerDemo
                id={`closing-${index}`}
                date={dayData.closing}
                setDate={(newDate) =>
                  handleDateChange(index, "closing", newDate)
                }
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export function Image({ n = 4 }) {
  return (
    <div className="flex flex-col w-full gap-3">
      <p className="font-bold mb-2">Outlet Images</p>
      <Label htmlFor="dropzone-file">Logo</Label>
      <div class="flex items-center">
        <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center aspect-square h-40 border-2 border-gray-300 border-dashed rounded-full cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <CloudUpload class="text-gray-500 dark:text-gray-400" size={32} />
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Upload your logo</span>
              <br /> or drag and drop
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              (MAX. 400x400px)
            </p>
          </div>
          <input id="dropzone-file" type="file" class="hidden" />
        </label>
      </div>
      <Label htmlFor="dropzone-file">Restaurant Images</Label>
      <div className="grid grid-cols-4 w-full gap-3">
        {Array.from({ length: n }).map((_, index) => (
          <label
            key={index}
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <CloudUpload class="text-gray-500 dark:text-gray-400" size={32} />
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        ))}
      </div>
    </div>
  );
}

export function PaymentSettings() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="font-bold mb-2">Restaurant Details</p>
        <Button className="text-sm">
          <Edit className="w-4 h-4 mr-2" /> Edit Account Details
        </Button>
      </div>

      <Label htmlFor="name">Account Number</Label>
      <Input type="text" id="name" placeholder="Account Number" />

      <Label htmlFor="name">Re-enter Account Number</Label>
      <Input type="text" id="name" placeholder="Account Number" />

      <Label htmlFor="name">Account Holder Name</Label>
      <Input type="text" id="name" placeholder="Name" />

      <Label htmlFor="name">IFSC Code</Label>
      <Input type="text" id="name" placeholder="IFSC Code" />

      <Label htmlFor="name">Bank Name</Label>
      <Input type="text" id="name" placeholder="Bank Name" />

      <Label htmlFor="name">Branch Name</Label>
      <Input type="text" id="name" placeholder="Branch Name" />

      <Label htmlFor="name">Branch Address</Label>
      <Input type="text" id="name" placeholder="Branch Address" />

      <Label htmlFor="name">Upload Passbook or Cancelled Cheque</Label>
      <label
        for="dropzone-file"
        class="flex flex-col items-center justify-center aspect-video w-80 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <CloudUpload class="text-gray-500 dark:text-gray-400" size={32} />
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span class="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
      </label>
    </div>
  );
}

export function OutletDocuments() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="font-bold mb-2">Outlet Documentation</p>
        <Button className="text-sm">
          <Edit className="w-4 h-4 mr-2" /> Edit
        </Button>
      </div>

      <Label htmlFor="name">Business PAN</Label>
      <Input type="text" id="name" placeholder="PAN" />

      <Label htmlFor="name">Name on PAN</Label>
      <Input type="text" id="name" placeholder="Name" />

      <Label htmlFor="name">FSSAI License Number</Label>
      <Input type="text" id="name" placeholder="License Number" />

      <Label htmlFor="name">Renewal/Expiry Date</Label>
      <Input type="text" id="name" placeholder="IFSC Code" />

      <Label htmlFor="name">Upload FSSAI Certificate</Label>
      <label
        for="dropzone-file"
        class="flex flex-col items-center justify-center aspect-video w-80 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <CloudUpload class="text-gray-500 dark:text-gray-400" size={32} />
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span class="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
      </label>

      <Label htmlFor="name">GST Number</Label>
      <Input type="text" id="name" placeholder="Bank Name" />
    </div>
  );
}
