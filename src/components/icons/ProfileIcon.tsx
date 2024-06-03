import React, { ComponentProps } from "react";

const ProfileIcon: React.FC<ComponentProps<"svg">> = ({ fill, style }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 25 20"
      fill={fill ?? "none"}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path d="M11 11C13.9466 11 16.3333 8.61334 16.3333 5.66668C16.3333 2.72001 13.9466 0.333344 11 0.333344C8.05331 0.333344 5.66665 2.72001 5.66665 5.66668C5.66665 8.61334 8.05331 11 11 11ZM11 13.6667C7.43998 13.6667 0.333313 15.4533 0.333313 19V21.6667H21.6666V19C21.6666 15.4533 14.56 13.6667 11 13.6667Z" />
    </svg>
  );
};

export default ProfileIcon;
