import React from "react";
import { TIcon } from "./icon.type";

function HistoryIcon(props: TIcon) {
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
        d="M20.875 14a6.875 6.875 0 11-13.75 0 6.875 6.875 0 0113.75 0z"
      ></path>
      <path
        fill="currentColor"
        d="M14.625 10.25v3.396l2.822 1.693a.626.626 0 01-.644 1.072l-3.125-1.875a.625.625 0 01-.303-.536v-3.75a.625.625 0 111.25 0zM14 6.5a7.456 7.456 0 00-5.306 2.2 32.237 32.237 0 00-1.569 1.706V9a.625.625 0 00-1.25 0v3.125a.625.625 0 00.625.625h3.125a.625.625 0 100-1.25H7.828a33.812 33.812 0 011.75-1.92 6.25 6.25 0 11.129 8.965.626.626 0 00-.86.91A7.5 7.5 0 1014 6.5z"
      ></path>
    </svg>
  );
}

export default HistoryIcon;
