import { cn } from "@/lib/utils";
import React from "react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { Pie, PieChart } from "recharts";

type Props = {
  className?: string;
};

const chartData = [
  { browser: "chrome", visitors: 275, fill: "#95A4FC" },
  { browser: "safari", visitors: 200, fill: "#B1E3FF" },
  { browser: "firefox", visitors: 187, fill: "#BAEDBD" },
  { browser: "edge", visitors: 173, fill: "#C6C7F8" },
];
const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "#95A4FC",
  },
  chrome: {
    label: "Chrome",
    color: "#95A4FC",
  },
  safari: {
    label: "Safari",
    color: "#B1E3FF",
  },
  firefox: {
    label: "Firefox",
    color: "#BAEDBD",
  },
  edge: {
    label: "Edge",
    color: "#C6C7F8",
  },
} satisfies ChartConfig;

const PieChartWidget = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "bg-primary-light dark:bg-white/5 p-6 rounded-2xl flex flex-col text-sm",
        className
      )}
    >
      <div className="font-semibold">Total Sales</div>
      <ChartContainer
        config={chartConfig}
        className="aspect-square max-h-[250px] w-[200px] -ml-5 "
        
      >
        <PieChart width={730} height={250} barSize={25}>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="visitors"
            nameKey="browser"
            innerRadius={50}
            paddingAngle={5}
          />
        </PieChart>
      </ChartContainer>
      <div className="flex flex-col gap-3 w-full">
        {chartData.map((item) => (
          <div className="flex items-center">
            <div
              style={{ background: item.fill }}
              className="w-1.5 h-1.5 rounded-full mr-2"
            />
            {item.browser}
            <div className="ml-auto"> ${item.visitors}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartWidget;
