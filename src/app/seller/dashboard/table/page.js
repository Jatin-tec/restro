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
import { Edit, QrCode, Trash } from "lucide-react";
import { Header } from "@/components/ui/dashboard/header";
import { Sidebar } from "@/components/ui/dashboard/sidebar";
import { Button } from "@/components/ui/button";

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
            <Button className="bg-primary text-white">+ Add Table</Button>
            <Button className="bg-primary text-white">+ Add Area</Button>
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
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">
              Table Management
            </h1>
          </div>
          <TableList />
        </main>
      </div>
    </div>
  );
}
