import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Progress } from "../ui/progress";

type Props = {
  className?: string;
};

const LOCATION_DATA = [
  { label: "New York", value: 72 },
  { label: "San Francisco", value: 39 },
  { label: "Sydney", value: 25 },
  { label: "Singapore", value: 61 },
];

const MapWidget = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "bg-primary-light dark:bg-white/5 p-6 rounded-2xl flex flex-col gap-4 text-sm",
        className
      )}
    >
      <div className="font-semibold">Revenue by Location</div>
      <Image src={"/images/world-map.png"} alt="" width={154} height={82} className="w-full" />
      {LOCATION_DATA.map((item) => (
        <div>
          <div className="flex w-full justify-between h-[20px]">
            <p>{item.label}</p>
            <p>{item.value}K</p>
          </div>
          <Progress value={item.value} className="h-1 mt-1" />
        </div>
      ))}
    </div>
  );
};

export default MapWidget;
