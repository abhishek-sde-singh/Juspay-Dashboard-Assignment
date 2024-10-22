import React from "react";
import { TIcon } from "./icon.type";

function PieCharIcon(props: TIcon) {
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
        d="M7.5 2.93v5.625l-4.875 2.812A7.5 7.5 0 017.5 2.93z"
      ></path>
      <path
        fill="currentColor"
        d="M7.812 9.096a.625.625 0 00.313-.541V2.93a.625.625 0 00-.833-.586 8.13 8.13 0 00-5.282 9.14.625.625 0 00.927.428l4.875-2.816zm-.937-5.22v4.318l-3.74 2.158c-.01-.118-.01-.236-.01-.352a6.884 6.884 0 013.75-6.123zm10.183 2.102c-.007-.014-.014-.029-.023-.043A8.129 8.129 0 0010 1.875a.625.625 0 00-.625.625v7.174L3.218 13.26a.624.624 0 00-.224.86 8.125 8.125 0 0014.064-8.142zm-6.433-2.825a6.879 6.879 0 014.991 2.886l-4.991 2.907V3.153zM10 16.875a6.91 6.91 0 01-5.585-2.866l5.89-3.43.018-.011 5.92-3.448A6.876 6.876 0 0110 16.875z"
      ></path>
    </svg>
  );
}

export default PieCharIcon;
