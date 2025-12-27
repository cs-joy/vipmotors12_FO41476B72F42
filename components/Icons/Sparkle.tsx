import React from "react";

export default function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M10.0009 0.500488C9.14786 6.48649 7.27066 9.04249 2.39746 9.99909C7.27066 10.9583 9.14786 13.5145 10.0009 19.5005C10.8509 13.5145 12.7313 10.9585 17.6015 9.99909C12.7315 9.04249 10.8511 6.48649 10.0009 0.500488Z"
        fill="#B59945"
      />
    </svg>
  );
}
