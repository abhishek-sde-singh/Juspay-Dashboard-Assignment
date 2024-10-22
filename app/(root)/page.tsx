"use client";

import { ChartConfig } from "@/components/ui/chart";
import React from "react";
import StatsWidget from "@/components/widgets/stats-widget";
import BarChartWidget from "@/components/widgets/bar-chart-widget";
import LineChartWidget from "@/components/widgets/line-chart-widget";
import MapWidget from "@/components/widgets/map-widget";
import TableWidget from "@/components/widgets/table-widget";
import PieChartWidget from "@/components/widgets/pie-chart-widget";

type Props = {};

const chartData = [
  { month: "January", desktop: 12, mobile: 10 },
  { month: "February", desktop: 10, mobile: 15 },
  { month: "March", desktop: 13, mobile: 12 },
  { month: "April", desktop: 15, mobile: 10 },
  { month: "May", desktop: 14, mobile: 11 },
  { month: "June", desktop: 12, mobile: 14 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
  },
  mobile: {
    label: "Mobile",
  },
} satisfies ChartConfig;

const page = (props: Props) => {
  return (
    <div className="px-7 py-8 h-full w-full text-sm overflow-scroll scrollbar-hide">
      <div className="max-w-[952px] mx-auto">
        <div className="px-2 py-1 font-semibold">eCommerce</div>
        <div className="mt-3 grid grid-cols-4 gap-7">
          <StatsWidget className="col-span-2" />
          <BarChartWidget
            className="col-span-2"
            chartData={chartData}
            config={chartConfig}
          />
          <LineChartWidget
            className="col-span-3 h-[342px]"
            chartData={chartData}
            config={chartConfig}
          />
          <MapWidget className="col-span-1 min-w-[202px]" />
          <TableWidget className="col-span-3" />
          <PieChartWidget />
        </div>
      </div>
    </div>
  );
};

export default page;
