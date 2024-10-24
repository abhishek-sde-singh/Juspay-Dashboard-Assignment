import React from "react";
import { TIcon } from "./icon.type";

function IdCardIcon(props: TIcon) {
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
        d="M16.875 3.75H3.125a.625.625 0 00-.625.625v11.25a.625.625 0 00.625.625h13.75a.624.624 0 00.625-.625V4.375a.625.625 0 00-.625-.625zM7.5 11.25a1.875 1.875 0 110-3.75 1.875 1.875 0 010 3.75z"
      ></path>
      <path
        fill="currentColor"
        d="M15.625 8.75a.625.625 0 01-.625.625h-3.125a.625.625 0 110-1.25H15a.625.625 0 01.625.625zM15 10.625h-3.125a.624.624 0 100 1.25H15a.624.624 0 100-1.25zm3.125-6.25v11.25a1.25 1.25 0 01-1.25 1.25H3.125a1.25 1.25 0 01-1.25-1.25V4.375a1.25 1.25 0 011.25-1.25h13.75a1.25 1.25 0 011.25 1.25zm-1.25 11.25V4.375H3.125v11.25h13.75zm-6.27-2.656a.625.625 0 11-1.211.312c-.206-.801-1.02-1.406-1.895-1.406-.874 0-1.688.605-1.894 1.406a.625.625 0 11-1.211-.312 3.113 3.113 0 011.343-1.824 2.5 2.5 0 113.525 0 3.107 3.107 0 011.343 1.824zM7.5 10.625a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
      ></path>
    </svg>
  );
}

export default IdCardIcon;
