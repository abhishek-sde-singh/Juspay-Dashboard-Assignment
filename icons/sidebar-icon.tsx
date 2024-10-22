import React from "react";
import { TIcon } from "./icon.type";

function SidebarIcon(props: TIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="none"
      viewBox="0 0 28 28"
      {...props}
    >
      <path
        fill="currentColor"
        fillOpacity="0.1"
        d="M10.875 7.75v12.5h-3.75a.625.625 0 01-.625-.625V8.375a.625.625 0 01.625-.625h3.75z"
      ></path>
      <path
        fill="currentColor"
        d="M20.875 7.125H7.125a1.25 1.25 0 00-1.25 1.25v11.25a1.25 1.25 0 001.25 1.25h13.75a1.25 1.25 0 001.25-1.25V8.375a1.25 1.25 0 00-1.25-1.25zm-13.75 8.75h1.25a.625.625 0 100-1.25h-1.25v-1.25h1.25a.625.625 0 100-1.25h-1.25v-1.25h1.25a.625.625 0 100-1.25h-1.25v-1.25h3.125v11.25H7.125v-3.75zm13.75 3.75H11.5V8.375h9.375v11.25z"
      ></path>
    </svg>
  );
}

export default SidebarIcon;
