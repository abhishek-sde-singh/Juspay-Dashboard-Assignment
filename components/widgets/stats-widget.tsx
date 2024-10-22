import React from "react";
import StatsCard from "../ui/stats-card";
import { cn } from "@/lib/utils";

type Props = {
  className?: string
};

const StatsWidget = ({className}: Props) => {
  return (
    <div className={cn("grid grid-cols-2 gap-7", className)}>
      <StatsCard
        title="Customers"
        value="3,781"
        delta="+11.01%"
        className="dark:text-primary-black"
      />
      <StatsCard
        title="Orders"
        value="1,219"
        delta="-0.03%"
        isLoss
        className="bg-primary-light dark:bg-white/5"
      />
      <StatsCard
        title="Revenue"
        value="$695"
        delta="+15.03%"
        className="bg-primary-light dark:bg-white/5"
      />
      <StatsCard
        title="Growth"
        value="30.1%"
        delta="+6.08%"
        className="bg-primary-purple dark:text-primary-black"
      />
    </div>
  );
};

export default StatsWidget;
