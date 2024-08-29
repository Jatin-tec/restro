import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/dashboard/header";
import { Sidebar } from "@/components/ui/dashboard/sidebar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  CircleHelp,
  Cross,
  EllipsisVertical,
  HandPlatter,
  ImagePlus,
  IndianRupee,
  Link,
  ShoppingBag,
  SquareDot,
  Star,
  Trash,
  Truck,
  X,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export default function Menu() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Menu</h1>
      </div>

      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <Tabs defaultValue="items">
            <TabsList>
              <TabsTrigger value="items">Items</TabsTrigger>
              <TabsTrigger value="addons">Add-ons</TabsTrigger>
              <TabsTrigger value="image">Images</TabsTrigger>
            </TabsList>
            <TabsContent value="items" className="p-4">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className="flex gap-8">
                      All Day Breakfast
                      <Switch />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="sub-cat">
                        <AccordionTrigger>
                          <div className="flex gap-8">
                            Breakfast
                            <Switch />
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="grid-cols-4 grid w-full hover:shadow-inner p-4">
                            <div className="col-span-2">
                              <span className="flex items-center font-bold">
                                <SquareDot className="w-4 h-4 mr-2 text-green-500" />
                                Chole Bhature
                              </span>
                              <p className="text-sm text-muted-foreground">
                                No time set, Turn item on stock manually
                              </p>
                            </div>
                            <p className="font-bold col-span-1 justify-center">
                              ₹99 +
                            </p>
                            <div className="flex items-center gap-2 col-span-1 justify-end">
                              <Switch />
                              <Star className="w-6 h-6 text-gray-500 hover:fill-yellow-300" />
                              <EllipsisVertical className="w-6 h-6 text-gray-500" />
                            </div>
                          </div>
                          <div className="grid-cols-4 grid w-full hover:shadow-inner p-4">
                            <div className="col-span-2">
                              <span className="flex items-center font-bold">
                                <SquareDot className="w-4 h-4 mr-2 text-yellow-500" />
                                Egg Omlete
                              </span>
                              <p className="text-sm text-muted-foreground">
                                No time set, Turn item on stock manually
                              </p>
                            </div>
                            <p className="font-bold col-span-1 justify-center">
                              ₹49 +
                            </p>
                            <div className="flex items-center gap-2 col-span-1 justify-end">
                              <Switch />
                              <Star className="w-6 h-6 text-gray-500 hover:fill-yellow-300" />
                              <EllipsisVertical className="w-6 h-6 text-gray-500" />
                            </div>
                          </div>
                          <div className="grid-cols-4 grid w-full hover:shadow-inner p-4">
                            <div className="col-span-2">
                              <span className="flex items-center font-bold">
                                <SquareDot className="w-4 h-4 mr-2 text-red-500" />
                                Chicken Omlete
                              </span>
                              <p className="text-sm text-muted-foreground">
                                No time set, Turn item on stock manually
                              </p>
                            </div>
                            <p className="font-bold col-span-1 justify-center">
                              ₹199 +
                            </p>
                            <div className="flex items-center gap-2 col-span-1 justify-end">
                              <Switch />
                              <Star className="w-6 h-6 text-gray-500 hover:fill-yellow-300" />
                              <EllipsisVertical className="w-6 h-6 text-gray-500" />
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            <TabsContent value="password">
              Change your password here.
            </TabsContent>
          </Tabs>
        </div>

        <div className="col-span-1 p-8 bg-accent overflow-y-scroll">
          <div className="flex items-center justify-between  my-3">
            <Input
              className="text-lg w-fit bg-white"
              placeholder="Item Name"
            />
            <div className="flex gap-2 text-gray-500">
              <Link className="h-5 w-5" /> <Trash className="h-5 w-5" />
              <X className="h-5 w-5" />
            </div>
          </div>
          <Separator className="mb-4" />
          <Label>Category</Label>
          <Select>
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>

          <div className="mt-4">
            <h2 className="flex items-center font-semibold text-base mb-1">
              Food Type <CircleHelp className="ml-2 h-5 w-5" />
            </h2>
            <Card className="flex gap-4 p-4">
              <Button variant="outline">
                <SquareDot className="w-4 h-4 mr-2 text-green-500" /> Veg
              </Button>
              <Button variant="outline">
                <SquareDot className="w-4 h-4 mr-2 text-yellow-500" /> Egg
              </Button>
              <Button variant="outline">
                <SquareDot className="w-4 h-4 mr-2 text-red-500" /> Non-Veg
              </Button>
            </Card>
          </div>

          <div className="mt-4">
            <h2 className="flex items-center font-semibold text-base mb-1">
              Service Type <CircleHelp className="ml-2 h-5 w-5" />
            </h2>
            <Card className="flex gap-4 p-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className=" flex gap-2 items-center leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <HandPlatter /> Dine In
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
                <Checkbox id="takeaway" />
                <label
                  htmlFor="takeaway"
                  className=" flex gap-2 items-center leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <Truck /> Delivery
                </label>
              </div>
            </Card>
          </div>

          <div className="mt-4">
            <h2 className="flex items-center font-semibold text-base mb-1">
              Pricing <CircleHelp className="ml-2 h-5 w-5" />
            </h2>
            <Card className="flex gap-4 p-4">
              <div>
                <Label>Base Price</Label>
                <div className="flex items-center">
                  <IndianRupee className="w-4 h-4 text-gray-500 mr-2" />
                  <Input type="number" placeholder="Enter Base Price" />
                </div>
              </div>
              <div>
                <Label>Taxes and Charges</Label>
                <div className="flex items-center gap-2">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="GST 5.0%" />
                    </SelectTrigger>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Charges" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Default</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-4">
            <h2 className="flex items-center font-semibold text-base mb-1">
              Images <CircleHelp className="ml-2 h-5 w-5" />
            </h2>
            <Card className="flex gap-4 p-4">
              <div className="flex items-center justify-center p-4 w-24 h-20 border rounded-lg">
                <ImagePlus className="w-8 h-8 text-blue-500" />
              </div>
              <div className="flex items-center justify-center p-4 w-24 h-20 border rounded-lg">
                <ImagePlus className="w-8 h-8 text-blue-500" />
              </div>
            </Card>
          </div>

          <div className="mt-4">
            <h2
              htmlFor="item-description"
              className="flex items-center font-semibold text-base mb-1"
            >
              Item Description <CircleHelp className="ml-2 h-5 w-5" />
            </h2>
            <Textarea
              id="item-description"
              placeholder="Enter Description"
              className="bg-white"
            />
          </div>

          <div className="mt-4">
            <h2 className="flex items-center font-semibold text-base mb-1">
              Customization <CircleHelp className="ml-2 h-5 w-5" />
            </h2>
            <sdiv className="grid grid-cols-2 gap-4">
              <Card className="col-span-1">
                <CardHeader>Variants</CardHeader>
                <CardContent>
                  <Badge className="m-1">Size: Small | ₹49</Badge>
                  <Badge className="m-1">Size: Medium | ₹149</Badge>
                  <Badge className="m-1">Size: Large | ₹199</Badge>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Add Variant +</Button>
                </CardFooter>
              </Card>
              <Card className="col-span-1">
                <CardHeader>Add-ons</CardHeader>
                <CardContent>
                  <Select>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Select Add-on" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">
                        <span className="flex items-center">
                          <SquareDot className="w-4 h-4 mr-2 text-green-500" />
                          1 x Dahi
                        </span>
                      </SelectItem>
                      <SelectItem value="egg">
                        <span className="flex items-center">
                          <SquareDot className="w-4 h-4 mr-2 text-yellow-500" />
                          1 x Egg
                        </span>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>
            </sdiv>
          </div>

          <div className="mt-4">
            <h2
              htmlFor="item-description"
              className="flex items-center font-semibold text-base mb-1"
            >
              Dish Details
            </h2>
            <Card className="p-8 grid grid-cols-2 gap-2">
              <div className="col-span-2">
                <Label>Category</Label>
                <Select>
                  <SelectTrigger className="w-[180px] bg-white">
                    <SelectValue placeholder="Select Dish Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Main course</SelectItem>
                    <SelectItem value="dark">South Indian</SelectItem>
                    <SelectItem value="system">Chinese</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Serving Info</Label>
                <Select>
                  <SelectTrigger className="w-[180px] bg-white">
                    <SelectValue placeholder="Select Qty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">1 Person</SelectItem>
                    <SelectItem value="dark">1-2 People</SelectItem>
                    <SelectItem value="system">2-4 People</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Preparation Time</Label>
                <Select>
                  <SelectTrigger className="w-[180px] bg-white">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">10 Mins</SelectItem>
                    <SelectItem value="dark">20 Mins</SelectItem>
                    <SelectItem value="system">30 Mins</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-2">
                <Label>Spice Level</Label>
                <div className="flex gap-2">
                  <Button variant="outline">Medium Spicy</Button>
                  <Button variant="outline">Mild</Button>
                  <Button variant="outline">Very Spicy</Button>
                </div>
              </div>
              <div className="col-span-2">
                <Label>Beverages</Label>
                <div className="flex gap-2">
                  <Button variant="outline">Coke</Button>
                  <Button variant="outline">Pespsi</Button>
                  <Button variant="outline">Sprite</Button>
                  <Button variant="outline">Diet Coke</Button>
                </div>
              </div>
              <div className="col-span-2">
                <Label>Tags</Label>
                <div className="flex gap-2">
                  <Button variant="outline">Exclusive</Button>
                  <Button variant="outline">Chefs Special</Button>
                  <Button variant="outline">New</Button>
                </div>
              </div>
            </Card>
            <Button className="mt-4">Save Changes</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
