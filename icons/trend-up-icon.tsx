import React from "react";
import { TIcon } from "./icon.type";

function TrendUpIcon(props: TIcon) {
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
        fillRule="evenodd"
        d="M8.455 5.608L14 4l-1.38 5.606-1.722-1.653-2.777 2.893a.5.5 0 01-.722 0L5.36 8.722l-3 3.124a.5.5 0 01-.72-.692L5 7.654a.5.5 0 01.72 0l2.04 2.124 2.417-2.517-1.722-1.653z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default TrendUpIcon;
