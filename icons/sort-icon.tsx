import React from "react";
import { TIcon } from "./icon.type";

function SortIcon(props: TIcon) {
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
        d="M8.192 17.308a.625.625 0 10-.884.884l2.5 2.5a.625.625 0 00.884 0l2.5-2.5a.626.626 0 00-.884-.884l-2.058 2.058-2.058-2.058z"
      ></path>
      <path
        fill="currentColor"
        d="M9.625 7.75v12.5a.625.625 0 101.25 0V7.75a.625.625 0 10-1.25 0zM19.808 10.692a.626.626 0 00.884-.884l-2.5-2.5a.625.625 0 00-.884 0l-2.5 2.5a.625.625 0 10.884.884l2.058-2.058 2.058 2.058z"
      ></path>
      <path
        fill="currentColor"
        d="M18.375 20.25V7.75a.625.625 0 10-1.25 0v12.5a.625.625 0 101.25 0z"
      ></path>
    </svg>
  );
}

export default SortIcon;
