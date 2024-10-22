import React from "react";
import { TIcon } from "./icon.type";

function SearchIcon(props: TIcon) {
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
        fillOpacity="0.2"
        d="M14.35 14.356a.5.5 0 01-.35.144.519.519 0 01-.356-.144l-2.7-2.706a5.762 5.762 0 11.706-.706l2.7 2.7a.501.501 0 010 .712zM7.25 12A4.75 4.75 0 102.5 7.25 4.756 4.756 0 007.25 12z"
      ></path>
    </svg>
  );
}

export default SearchIcon;
