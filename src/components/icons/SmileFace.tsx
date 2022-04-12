import React from "react";

const SmileFace = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="white"
      stroke-width="3"
      stroke-linecap="round"
      {...props}
    >
      <path d="M2.13324 5.43964C2.28408 7.46449 1.23338 8.82159 3.85031 9.25344C5.9632 9.60211 5.76315 8.2177 5.4759 7.3074" />
      <path d="M10.8828 2.534C11.0336 4.55885 9.98289 5.91595 12.5998 6.3478C14.7127 6.69647 14.5127 5.31206 14.2254 4.40176" />
      <path d="M3.8016 15.4331C4.49502 17.6306 7.91985 19.8874 10.5985 20.5275C12.8356 21.062 14.8102 20.1991 16.8721 19.007C18.5191 16.6939 21.3843 14.0382 18.9299 8.22679" />
    </svg>
  );
};

export default SmileFace;
