import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Edit, QrCode, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const tables = [
  {
    name: "Table 1",
    size: "2",
    area: "Inside",
  },
  {
    name: "Table 2",
    size: "4",
    area: "Inside",
  },
  {
    name: "Table 3",
    size: "4",
    area: "Outside",
  },
];

export function TableList() {
  return (
    <Card className="p-4">
      <CardHeader>
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold">Tables</h2>
          <div className="flex items-center gap-4">
            <AddTable />
            <AddArea />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Area</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tables.map((name) => (
              <TableRow key={name.name}>
                <TableCell className="font-medium">{name.name}</TableCell>
                <TableCell>{name.size}</TableCell>
                <TableCell>{name.area}</TableCell>
                <TableCell className="justify-end flex gap-2">
                  <QrCode />
                  <Edit />
                  <Trash />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default function TablePage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Table Management</h1>
      </div>
      <TableList />
    </main>
  );
}

function AddArea() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Add Area</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 mr-[6.5vh]">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Add Area</h4>
            <p className="text-sm text-muted-foreground">
              Areas where tables are placed.
            </p>
          </div>

          <div>
            <Label htmlFor="width">Name</Label>
            <Input
              id="width"
              placeholder="Area name"
              className="col-span-2 h-8"
            />
          </div>
          <Button>Save</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function AddTable() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Add Table</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 mr-[6.5vh]">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Add Table</h4>
            <p className="text-sm text-muted-foreground">
              Select area and add table.
            </p>
          </div>

          <div>
            <Label htmlFor="number">Number</Label>
            <Input
              id="number"
              placeholder="Area name"
              className="col-span-2 h-8"
            />
            <Label htmlFor="area">Area</Label>
            <Select id="area">
              <SelectTrigger>
                <SelectValue placeholder="Select Area" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button>Save</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
