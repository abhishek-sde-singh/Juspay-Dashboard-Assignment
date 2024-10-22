import TrendUpIcon from "@/icons/trend-up-icon";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  title: string;
  value: string;
  delta: string;
  isLoss?: boolean;
  className?: string;
};

const StatsCard = ({ title, value, delta, isLoss, className }: Props) => {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 bg-primary-blue flex flex-col justify-between gap-2 w-[202px]",
        className
      )}
    >
      <div className="font-semibold hover:bg-foreground/5 rounded-lg p-0.5">{title}</div>
      <div className="flex items-center justify-between hover:flex-row-reverse cursor-pointer hover:bg-foreground/5 rounded-lg p-0.5 transition-all group">
        <div className="text-2xl font-semibold leading-9">{value}</div>
        <div className="text-xs flex items-center justify-center gap-1">
          {delta}
          <TrendUpIcon className={cn(isLoss && "rotate-180")} />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
