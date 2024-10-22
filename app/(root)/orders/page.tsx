"use client";

import AddIcon from "@/icons/add-icon";
import FilterIcon from "@/icons/filter-icon";
import SortIcon from "@/icons/sort-icon";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import UserProfile from "@/components/ui/user-profile";
import CalendarIcon from "@/icons/calendar-icon";
import Status from "@/components/ui/status";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { SearchIcon } from "lucide-react";

type Props = {};

const data = [
  {
    orderId: "#CM9801",
    user: { profilePic: "/images/user-2.png", name: "Natali Craig" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "IN_PROGRESS",
  },
  {
    orderId: "#CM9802",
    user: { profilePic: "/images/user-3.png", name: "Kate Morrison" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "COMPLETE",
  },
  {
    orderId: "#CM9803",
    user: { profilePic: "/images/user-4.png", name: "Drew Cano" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "PENDING",
  },
  {
    orderId: "#CM9804",
    user: { profilePic: "/images/user-5.png", name: "Orlando Diggs" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "APPROVED",
  },
  {
    orderId: "#CM9805",
    user: { profilePic: "/images/user-2.png", name: "Natali Craig" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "REJECTED",
  },
  {
    orderId: "#CM9806",
    user: { profilePic: "/images/user-6.png", name: "Andi Lane" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "IN_PROGRESS",
  },
];

const OrdersPage = (props: Props) => {
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
  return (
    <div className="px-7 py-8 h-full text-sm">
      <div className="px-2 py-1 font-semibold">Orders List</div>
      <div className="bg-primary-light dark:bg-primary-light/5 gap-1 p-2 rounded-lg mt-4 flex items-center">
        <button className="p-1">
          <AddIcon />
        </button>
        <button className="p-1">
          <FilterIcon />
        </button>
        <button className="p-1">
          <SortIcon />
        </button>
        <div className="ml-auto flex items-center gap-1 rounded-lg text-sm border border-foreground/10 bg-background/40 w-[160px] h-[28px] py-1 px-2 focus-within:outline outline-foreground">
          <SearchIcon className="w-4 h-4 text-foreground/20" />
          <input
            className="flex-grow min-w-[98px] w-[98px] bg-transparent outline-none leading-5 placeholder:text-foreground/20"
            placeholder="Search"
          />
        </div>
      </div>
      <Table className="mt-2">
        <TableHeader>
          <TableRow className="py-4">
            <TableHead className="w-[30px] pl-4 ">
              <Checkbox
                checked={
                  data
                    .map((item) => item.orderId)
                    .sort()
                    .toString() === selectedOrders.sort().toString()
                }
                onCheckedChange={(checked) => {
                  if (checked)
                    setSelectedOrders([...data.map((item) => item.orderId)]);
                  else setSelectedOrders([]);
                }}
              />
            </TableHead>
            <TableHead className="w-[100px]">Order ID</TableHead>
            <TableHead className="w-[214px]">User</TableHead>
            <TableHead className="w-[214px]">Project</TableHead>
            <TableHead className="w-[270px]">Address</TableHead>
            <TableHead className="w-[192px]">Date</TableHead>
            <TableHead className="w-[120px]">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow>
              <TableCell>
                <Checkbox
                  checked={selectedOrders.includes(item.orderId)}
                  onCheckedChange={(checked) => {
                    if (checked)
                      setSelectedOrders((prev) => [...prev, item.orderId]);
                    else
                      setSelectedOrders([
                        ...selectedOrders.filter((id) => id !== item.orderId),
                      ]);
                  }}
                />
              </TableCell>
              <TableCell>{item.orderId}</TableCell>
              <TableCell>
                <UserProfile
                  profilePic={item.user.profilePic}
                  name={item.user.name}
                />
              </TableCell>
              <TableCell>{item.project}</TableCell>
              <TableCell>{item.address}</TableCell>
              <TableCell>
                <div className="flex gap-1 items-center">
                  <CalendarIcon />
                  {item.date}
                </div>
              </TableCell>
              <TableCell>
                <Status type={item.status as any} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination className="flex w-full">
        <PaginationContent className="ml-auto mt-3">
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default OrdersPage;
