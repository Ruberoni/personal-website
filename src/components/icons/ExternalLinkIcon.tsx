import React from "react";

const ExternalLinkIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="#455D77"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M10.6026 2.46997L13.241 5.10834L7.63257 10.7168L8.76547 11.8497L14.3739 6.24124L17.0123 8.87961V2.46997H10.6026Z" />
      <path d="M15.4099 15.2892H4.19302V4.07238H9.80145L8.19904 2.46997H4.19302C3.30929 2.46997 2.59061 3.18865 2.59061 4.07238V15.2892C2.59061 16.173 3.30929 16.8917 4.19302 16.8917H15.4099C16.2936 16.8917 17.0123 16.173 17.0123 15.2892V11.2832L15.4099 9.68081V15.2892Z" />
    </svg>
  );
};

export default ExternalLinkIcon;
