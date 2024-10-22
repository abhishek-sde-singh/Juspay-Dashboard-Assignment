"use client";

import Header from "@/components/ui/header";
import LeftSideBar from "@/components/ui/left-sidebar";
import RightSidebar from "@/components/ui/right-sidebar";
import { useDarkMode } from "@/context/dark-mode-context";
import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useState } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  const { isDarkMode } = useDarkMode();
  const [openLeftSidebar, setOpenLeftSidebar] = useState(false);
  const [openRightSidebar, setOpenRightSidebar] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpenLeftSidebar(true);
      setOpenRightSidebar(true);
    }, 0);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div
      className={cn(
        "main-layout bg-background text-foreground",
        isDarkMode && "dark"
      )}
    >
      {/* left sidebar  */}
      <LeftSideBar
        className={cn(
          `left-sidebar w-[212px] h-full overflow-hidden duration-500 transition-[width]`,
          !openLeftSidebar && "w-0"
        )}
      />
      {/* header  */}
      <Header
        className="header"
        onLeftSideBarToggle={() => setOpenLeftSidebar((prev) => !prev)}
        onRightSideBarToggle={() => setOpenRightSidebar((prev) => !prev)}
      />
      {/* content  */}
      <div className="content max-h-[calc(100vh-80px)]">{children}</div>
      {/* right sidebar  */}
      <RightSidebar
        className={cn(
          "right-sidebar w-[280px] h-full overflow-hidden duration-500 transition-[width]",
          !openRightSidebar && "w-[0px]"
        )}
      />
    </div>
  );
}
