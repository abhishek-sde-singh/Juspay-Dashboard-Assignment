import React from "react";
import { TIcon } from "./icon.type";

function AddIcon(props: TIcon) {
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
        d="M14.625 8.375a.625.625 0 10-1.25 0v5h-5a.625.625 0 100 1.25h5v5a.625.625 0 101.25 0v-5h5a.625.625 0 100-1.25h-5v-5z"
      ></path>
    </svg>
  );
}

export default AddIcon;