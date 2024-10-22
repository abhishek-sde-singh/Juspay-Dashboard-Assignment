import React from "react";
import { TIcon } from "./icon.type";

function BugIcon(props: TIcon) {
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
        d="M13 9h1a.5.5 0 000-1h-1V7h1a.5.5 0 000-1h-1.025a4.985 4.985 0 00-1.34-2.928l1.219-1.218a.5.5 0 00-.708-.708l-1.268 1.269a4.984 4.984 0 00-5.756 0L3.854 1.146a.5.5 0 00-.708.708l1.219 1.218c-.758.8-1.23 1.83-1.34 2.928H2a.5.5 0 100 1h1v1H2a.5.5 0 100 1h1v.5c0 .169.009.336.025.5H2a.5.5 0 000 1h1.23a5 5 0 009.54 0H14a.5.5 0 100-1h-1.025c.016-.164.025-.331.025-.5V9zM8 2.5A4.005 4.005 0 0111.967 6H4.03A4.004 4.004 0 018 2.5zm.5 10.967V8.5a.5.5 0 00-1 0v4.967A4.004 4.004 0 014 9.5V7h8v2.5a4.004 4.004 0 01-3.5 3.967z"
      ></path>
    </svg>
  );
}

export default BugIcon;
