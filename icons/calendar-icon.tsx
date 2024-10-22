import React from "react";
import { TIcon } from "./icon.type";

function CalendarIcon(props: TIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        d="M13 2h-1.5v-.5a.5.5 0 00-1 0V2h-5v-.5a.5.5 0 10-1 0V2H3a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V3a1 1 0 00-1-1zM4.5 3v.5a.5.5 0 101 0V3h5v.5a.5.5 0 001 0V3H13v2H3V3h1.5zM13 13H3V6h10v7z"
      ></path>
    </svg>
  );
}

export default CalendarIcon;
