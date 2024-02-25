import React from "react";
const UploadIcon = ({ width = 20, height = 20 }) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="m11.991 1.966-4 4h3v10a1 1 0 0 0 2 0v-10h3l-4-4Zm-8 12a1 1 0 0 0-1 1v2a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-2a1 1 0 0 0-2 0v2a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-2a1 1 0 0 0-1-1Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default UploadIcon;
