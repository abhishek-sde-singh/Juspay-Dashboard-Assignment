"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Avatar from "./avatar";
import NavItem from "./nav-item";
import PieCharIcon from "@/icons/pie-chart-icon";
import ShoppingBagIcon from "@/icons/shopping-bag-icon";
import FolderIcon from "@/icons/folder-icon";
import OpenBookIcon from "@/icons/open-book-icon";
import UserProfileIcon from "@/icons/user-profile-icon";
import IdCardIcon from "@/icons/id-card-icon";
import UserGroupIcon from "@/icons/user-group-icon";
import BlogIcon from "@/icons/blog-icon";
import ChatIcon from "@/icons/chat-icon";
import Link from "next/link";

type Props = JSX.IntrinsicElements["div"] & {};

const data = [
  {
    title: "Dashboard",
    items: [
      {
        label: "Default",
        icon: <PieCharIcon className="w-5 h-5" />,
      },
      {
        label: "eCommerce",
        icon: <ShoppingBagIcon className="w-5 h-5" />,
        list: ["Commerce", "Shop"],
      },
      {
        label: "Projects",
        icon: <FolderIcon className="w-5 h-5" />,
        list: ["Project 1", "Project 2"],
      },
      {
        label: "Online Courses",
        icon: <OpenBookIcon className="w-5 h-5" />,
        list: ["Course 1", "Course 2"],
      },
    ],
  },
  {
    title: "Pages",
    items: [
      {
        label: "User Profile",
        icon: <UserProfileIcon className="w-5 h-5" />,
        list: ["Overview", "Projects", "Campaigns", "Documents", "Followers"],
      },
      {
        label: "Account",
        icon: <IdCardIcon className="w-5 h-5" />,
        list: ["Details", "Settings"],
      },
      {
        label: "Corporate",
        icon: <UserGroupIcon className="w-5 h-5" />,
        list: ["Office", "Employees"],
      },
      {
        label: "Blog",
        icon: <BlogIcon className="w-5 h-5" />,
        list: ["All blogs", "Favorites"],
      },
      {
        label: "Social",
        icon: <ChatIcon className="w-5 h-5" />,
        list: ["Profiles", "Channels"],
      },
    ],
  },
];

const LeftSideBar = ({ className, ...rest }: Props) => {
  const [selectedTab, setSelectedTab] = useState(data[0].items[0].label);
  return (
    <div
      className={cn(
        "bg-background border-r border-foreground/10 text-sm",
        className
      )}
      {...rest}
    >
      <div className="py-5 px-4 flex flex-col gap-4">
        <div className="flex p-1 gap-2 items-center">
          <Avatar src={"/images/current-user.png"} alt="" />
          <p className="text-sm">ByeWind</p>
        </div>
        <div className="flex flex-col gap-1 pb-3">
          <div className="flex font-medium gap-1">
            <button className="py-1 px-2 text-foreground/40">Favorites</button>
            <button className="py-1 px-2 text-foreground/20">Recently</button>
          </div>
          <Link
            href={"/"}
            className="h-[28px] flex items-center gap-4 px-4 hover:bg-foreground/5 rounded-lg"
          >
            <div className="bg-foreground/20 w-1.5 h-1.5 rounded-full" />
            Overview
          </Link>
          <Link
            href={"/orders"}
            className="h-[28px] flex items-center gap-4 px-4 hover:bg-foreground/5 rounded-lg"
          >
            <div className="bg-foreground/20 w-1.5 h-1.5 rounded-full" />
            Orders
          </Link>
        </div>

        {data.map(({ title, items }) => (
          <div className="pb-3 flex flex-col gap-1">
            <div className="py-1 px-3 h-[28px] text-foreground/40">{title}</div>
            {items &&
              items.map((item) => (
                <NavItem
                  icon={item.icon}
                  title={item.label}
                  list={item.list}
                  selected={selectedTab}
                  onSelectChange={setSelectedTab}
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
