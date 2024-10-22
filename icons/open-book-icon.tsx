import React from "react";
import { TIcon } from "./icon.type";

function OpenBookIcon(props: TIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        fillOpacity="0.1"
        d="M18.125 5v10a.624.624 0 01-.625.625h-5a2.5 2.5 0 00-2.5 2.5 2.5 2.5 0 00-2.5-2.5h-5A.625.625 0 011.875 15V5a.625.625 0 01.625-.625h5a2.5 2.5 0 012.5 2.5 2.5 2.5 0 012.5-2.5h5a.625.625 0 01.625.625z"
      ></path>
      <path
        fill="currentColor"
        d="M17.5 3.75h-5A3.125 3.125 0 0010 5a3.125 3.125 0 00-2.5-1.25h-5A1.25 1.25 0 001.25 5v10a1.25 1.25 0 001.25 1.25h5a1.875 1.875 0 011.875 1.875.625.625 0 101.25 0A1.875 1.875 0 0112.5 16.25h5A1.25 1.25 0 0018.75 15V5a1.25 1.25 0 00-1.25-1.25zM7.5 15h-5V5h5a1.875 1.875 0 011.875 1.875v8.75A3.11 3.11 0 007.5 15zm10 0h-5a3.11 3.11 0 00-1.875.625v-8.75A1.875 1.875 0 0112.5 5h5v10z"
      ></path>
    </svg>
  );
}

export default OpenBookIcon;