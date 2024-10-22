import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  type: keyof typeof STATUS;
};

export const STATUS = {
  IN_PROGRESS: "In Progress",
  COMPLETE: "Complete",
  REJECTED: "Rejected",
  APPROVED: "Approved",
  PENDING: "Pending",
} as const;

const Status = ({ type }: Props) => {
  const statusColor = (() => {
    switch (type) {
      case "APPROVED":
        return "#FFC555";
      case "COMPLETE":
        return "#4AA785";
      case "IN_PROGRESS":
        return "#8A8CD9";
      case "PENDING":
        return "#59A8D4";
      case "REJECTED":
        return "";
    }
  })();

  return (
    <div
      style={{
        color: statusColor,
      }}
      className="flex py-px items-center whitespace-nowrap text-foreground/40"
    >
      <div
        className={"bg-foreground/40 w-1.5 h-1.5 rounded-full m-[10px] "}
        style={{
          backgroundColor: statusColor,
        }}
      />
      {STATUS[type]}
    </div>
  );
};

export default Status;
