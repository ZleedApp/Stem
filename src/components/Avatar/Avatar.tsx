import React from "react";

import "./Avatar.scss";

import { User2 } from "lucide-react";

export interface AvatarProps {
  src: string;
  size: 16 | 24 | 32 | 48;
  outline: boolean;
}

const Avatar = (props: AvatarProps) => {
  return (
    <div
      style={{
        width: `${props.size || 32}px`,
        height: `${props.size || 32}px`,
      }}
      className={`container ${props.outline ? "outlined" : ""} ${
        props.src ? "" : "generic"
      }`}
    >
      {props.src ? <img src={props.src} /> : <User2 />}
    </div>
  );
};

export default Avatar;
