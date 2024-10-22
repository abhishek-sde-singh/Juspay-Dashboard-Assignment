import { cn } from "@/lib/utils";
import React from "react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

type Props = {
  config: ChartConfig;
  chartData: any[];
  className?: string;
};

const LineChartWidget = ({ className, chartData, config }: Props) => {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 bg-primary-light text-sm dark:bg-white/5",
        className
      )}
    >
      <div className="flex items-center gap-6">
        <div className="font-semibold">Revenue</div>
        <div className="w-px h-5 bg-foreground/20" />
        <div className="flex items-center">
          <div className="w-1.5 h-1.5 rounded-full bg-foreground mr-2" />
          Current Week <strong className="ml-1"> $58,211</strong>
        </div>
        <div className="flex items-center">
          <div className="w-1.5 h-1.5 rounded-full bg-secondary-cyan mr-2" />
          Previous Week <strong className="ml-1"> $68,768</strong>
        </div>
      </div>
      <ChartContainer config={config} className="mt-5 -ml-8">
        <LineChart
          accessibilityLayer
          data={chartData}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
            color="#1C1C1C66"
          />
          <YAxis
            tickLine={false}
            tickFormatter={(value) => value + "M"}
            axisLine={false}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Line
            dataKey="desktop"
            type="monotone"
            stroke="#A8C5DA"
            strokeWidth={2}
            dot={false}
          />
          <Line
            dataKey="mobile"
            type="monotone"
            stroke="#C6C7F8"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
};

export default LineChartWidget;
