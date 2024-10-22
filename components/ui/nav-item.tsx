"use client";

import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import React, { ReactNode, useState } from "react";

type Props = JSX.IntrinsicElements["div"] & {
  list?: string[];
  icon?: ReactNode;
  title: string;
  selected?: string;
  onSelectChange?: (value: string) => void;
};

const NavItem = ({
  title,
  icon,
  list,
  selected,
  onSelectChange,
  ...rest
}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onTriggerClick = () => {
    if (list) setIsExpanded((prev) => !prev);
    else onSelectChange?.(title);
  };

  return (
    <div {...rest}>
      <button
        onClick={onTriggerClick}
        className={cn(
          "py-1 pr-2 flex items-center gap-1 rounded-lg w-full",
          selected === title && "bg-foreground/5"
        )}
      >
        <div
          className={cn(
            "bg-foreground dark:bg-primary-brand h-4 w-1 rounded-full",
            selected !== title && "invisible"
          )}
        />
        <ChevronRightIcon
          className={cn(
            "w-4 h-4 text-foreground/20 transition-all",
            !list && "invisible",
            isExpanded && "rotate-90"
          )}
        />
        {icon}
        {title}
      </button>
      <div className={cn("", !isExpanded && "hidden")}>
        {list?.map((item) => (
          <button
            onClick={() => onSelectChange?.(item)}
            className={cn(
              "py-1 pl-[52px] relative pr-2 flex items-center gap-1 rounded-lg w-full",
              selected === item && "bg-foreground/5"
            )}
          >
            <div
              className={cn(
                "bg-foreground dark:bg-primary-brand h-4 w-1 rounded-full absolute left-0",
                selected !== item && "invisible"
              )}
            />
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavItem;
