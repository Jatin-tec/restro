"use client";

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

import * as React from "react";
import { Clock, LocateFixed } from "lucide-react";
import { TimePickerInput } from "@/components/ui/time-picker";
import { Separator } from "@/components/ui/separator";

export function TimePickerPage({ date, setDate }) {
  const minuteRef = React.useRef(null);
  const hourRef = React.useRef(null);

  return (
    <div className="flex items-end gap-2">
      <div className="grid gap-1 text-center">
        <Label htmlFor="hours" className="text-xs">
          Hours
        </Label>
        <TimePickerInput
          picker="hours"
          date={date}
          setDate={setDate}
          ref={hourRef}
          onRightFocus={() => minuteRef.current?.focus()}
        />
      </div>
      <div className="grid gap-1 text-center">
        <Label htmlFor="minutes" className="text-xs">
          Minutes
        </Label>
        <TimePickerInput
          picker="minutes"
          date={date}
          setDate={setDate}
          ref={minuteRef}
          onLeftFocus={() => hourRef.current?.focus()}
          onRightFocus={() => secondRef.current?.focus()}
        />
      </div>

      <div className="flex h-10 items-center">
        <Clock className="ml-2 h-4 w-4" />
      </div>
    </div>
  );
}

export default function Manage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Manage Restaurant</h1>
      </div>
      <Tabs defaultValue="account" className="w-full">
        <TabsList>
          <TabsTrigger value="account">Restaurant Management</TabsTrigger>
          <TabsTrigger value="hour">Working Hours</TabsTrigger>
          <TabsTrigger value="location">Location</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card className="p-8">
            <div className="grid grid-cols-2">
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

                <Label>Select Services</Label>

                <div className="flex items-center space-x-2">
                  <Checkbox id="pickup" />
                  <label
                    htmlFor="pickup"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Pickup
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="dinein" />
                  <label
                    htmlFor="dinein"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Dine In
                  </label>
                </div>

                <Label htmlFor="dropzone-file">Restaurant Logo</Label>
                <div class="flex items-center justify-center">
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                  </label>
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
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="hour">
          <Card className="p-8 gap-4 grid">
            <div className="flex justify-evenly font-bold">
              <p>Day</p>
              <p>Opening Time</p>
              <p>Closing Time</p>
            </div>
            <Separator className="my-4" />
            <div className="flex justify-evenly">
              <div className="flex items-center space-x-2">
                <Checkbox id="monday" />
                <label
                  htmlFor="monday"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Monday
                </label>
              </div>
              <TimePickerPage />
              <TimePickerPage />
            </div>
            <div className="flex justify-evenly">
              <div className="flex items-center space-x-2">
                <Checkbox id="tuesday" />
                <label
                  htmlFor="tuesday"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Tuesday
                </label>
              </div>
              <TimePickerPage />
              <TimePickerPage />
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="location">
          <Card className="p-8">
            <iframe
              frameBorder="0"
              className="w-full h-96 border-0 rounded-xl"
              src="https://www.google.com/maps/embed/v1/place?q=hotel+taj+mumbai&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            ></iframe>

            <Button className="mt-4">
              <LocateFixed className="w-4 h-4 mr-2" /> Select Location
            </Button>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
