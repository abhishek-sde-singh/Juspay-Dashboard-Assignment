import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const data = [
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: "82",
    amount: "$6,518.18",
  },
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: "82",
    amount: "$6,518.18",
  },
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: "82",
    amount: "$6,518.18",
  },
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: "82",
    amount: "$6,518.18",
  },
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: "82",
    amount: "$6,518.18",
  },
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: "82",
    amount: "$6,518.18",
  },
];

const TableWidget = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 bg-primary-light text-sm dark:bg-white/5",
        className
      )}
    >
      <div className="font-semibold px-2">Top Selling Products</div>
      <Table className="mt-2">
        <TableHeader>
          <TableRow className="h-[40px] py-0">
            <TableHead className="w-[224px] h-[40px] px-2">Name</TableHead>
            <TableHead className="w-[130px] h-[40px]">Price</TableHead>
            <TableHead className="w-[130px] h-[40px]">Quantity</TableHead>
            <TableHead className="w-[130px] h-[40px]">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow>
              <TableCell className="px-2 py-2.5">{item.name}</TableCell>
              <TableCell className="py-2.5">{item.price}</TableCell>
              <TableCell className="py-2.5">{item.quantity}</TableCell>
              <TableCell className="py-2.5">{item.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableWidget;
