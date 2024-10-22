import SidebarIcon from "@/icons/sidebar-icon";
import StarIcon from "@/icons/star-icon";
import { cn } from "@/lib/utils";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import SunIcon from "@/icons/sun-icon";
import HistoryIcon from "@/icons/history-icon";
import BellIcon from "@/icons/bell-icon";
import SearchIcon from "@/icons/search-icon";
import CommandIcon from "@/icons/command-icon";
import { useDarkMode } from "@/context/dark-mode-context";
import { MoonIcon } from "lucide-react";

type Props = JSX.IntrinsicElements["div"] & {
  onLeftSideBarToggle?: () => void;
  onRightSideBarToggle?: () => void;
};

const Header = ({
  className,
  onLeftSideBarToggle,
  onRightSideBarToggle,
  ...rest
}: Props) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div
      className={cn(
        "h-[68px] py-5 px-7 border-b border-foreground/10 flex gap-1 text-foreground items-center",
        className
      )}
      {...rest}
    >
      <button onClick={onLeftSideBarToggle}>
        <SidebarIcon />
      </button>
      <button>
        <StarIcon />
      </button>
      <Breadcrumb className="px-2 flex-grow">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboards</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-foreground/20" />
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-foreground">
              Default
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex items-center gap-1 rounded-lg text-sm bg-foreground/5 w-[160px] h-[28px] py-1 px-2 focus-within:outline outline-foreground">
        <SearchIcon />
        <input
          className="flex-grow min-w-[98px] w-[98px] bg-transparent outline-none leading-5"
          placeholder="Search"
        />
        <CommandIcon />
      </div>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? (
          <MoonIcon
            className="p-[3px] m-0.5 fill-foreground/10"
            strokeWidth={1.5}
          />
        ) : (
          <SunIcon />
        )}
      </button>
      <button>
        <HistoryIcon />
      </button>
      <button>
        <BellIcon />
      </button>
      <button onClick={onRightSideBarToggle}>
        <SidebarIcon />
      </button>
    </div>
  );
};

export default Header;
