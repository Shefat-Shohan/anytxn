import React from "react";

const Path = (props: any) => {
  return (
    <svg
      width="1920"
      height="300"
      viewBox="0 0 1920 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.7"
        d="M-240 0L1680 0L-240 280L-240 0Z"
        fill="url(#paint0_linear_6055_471)"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_6055_471"
          x1="458.5"
          y1="1561.14"
          x2="392.705"
          y2="52.1879"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1F80F0"></stop>
          <stop offset="1" stop-color="#1F80F0" stop-opacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
export default Path;
