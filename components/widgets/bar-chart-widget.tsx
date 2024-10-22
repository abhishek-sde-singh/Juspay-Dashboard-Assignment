import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";

type Props = {
   config: ChartConfig
   chartData: any[],
   className?: string
};

const BarChartWidget = ({config, chartData, className }: Props) => {
  return (
    <div className={cn("rounded-2xl p-6 bg-primary-light dark:bg-white/5", className)}>
      <div className="font-semibold">Projections vs Actuals</div>
      <ChartContainer config={config} className="mt-4 -ml-8">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            tickFormatter={(value) => value.slice(0, 3)}
            color="#1C1C1C66"
          />
          <YAxis
            tickLine={false}
            tickFormatter={(value) => value + "M"}
            axisLine={false}
          />
          <ChartTooltip content={<ChartTooltipContent  hideLabel />} />
          <Bar
            dataKey="desktop"
            stackId="a"
            fill="#A8C5DA"
            className="max-w-[25px] hover:bg-black"
            radius={[0, 0, 4, 4]}
            barSize={25}
          />
          <Bar
            dataKey="mobile"
            stackId="a"
            barSize={25}
            fill="#a8c5da85"
            className="max-w-[25px]"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default BarChartWidget;
