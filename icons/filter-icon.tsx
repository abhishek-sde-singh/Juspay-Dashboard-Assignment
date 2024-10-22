import React from "react";
import { TIcon } from "./icon.type";

function FilterIcon(props: TIcon) {
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
        d="M19.625 14a.624.624 0 01-.625.625H9a.625.625 0 110-1.25h10a.624.624 0 01.625.625zm2.5-4.375H5.875a.625.625 0 000 1.25h16.25a.624.624 0 100-1.25zm-6.25 7.5h-3.75a.624.624 0 100 1.25h3.75a.624.624 0 100-1.25z"
      ></path>
    </svg>
  );
}

export default FilterIcon;