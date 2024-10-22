import React from "react";
import { TIcon } from "./icon.type";

function UserProfileIcon(props: TIcon) {
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
        fill="#currentColor"
        fillOpacity="0.1"
        d="M15.625 2.5H4.375a.625.625 0 00-.625.625v13.75a.625.625 0 00.625.625h11.25a.624.624 0 00.625-.625V3.125a.625.625 0 00-.625-.625zM10 13.125a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
      ></path>
      <path
        fill="currentColor"
        d="M5.874 15.5a.624.624 0 00.876-.125 4.062 4.062 0 016.5 0 .623.623 0 00.875.125.623.623 0 00.125-.875 5.302 5.302 0 00-2.14-1.694 3.125 3.125 0 10-4.215 0c-.85.367-1.59.951-2.145 1.694a.625.625 0 00.124.875zM10 8.75a1.875 1.875 0 110 3.75 1.875 1.875 0 010-3.75zm5.625-6.875H4.375a1.25 1.25 0 00-1.25 1.25v13.75a1.25 1.25 0 001.25 1.25h11.25a1.25 1.25 0 001.25-1.25V3.125a1.25 1.25 0 00-1.25-1.25zm0 15H4.375V3.125h11.25v13.75zM6.875 5a.625.625 0 01.625-.625h5a.625.625 0 110 1.25h-5A.625.625 0 016.875 5z"
      ></path>
    </svg>
  );
}

export default UserProfileIcon;