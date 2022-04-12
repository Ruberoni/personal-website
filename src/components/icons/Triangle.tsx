import React from "react";

const Triangle = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="12"
      height="14"
      viewBox="0 0 12 14"
      fill="#7B61FF"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 7L0 13.9282L0 0.0717969L12 7Z" />
    </svg>
  );
};

export default Triangle;
