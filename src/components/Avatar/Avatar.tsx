import React from "react";

import "./Avatar.scss";

import { User2 } from "lucide-react";

export interface AvatarProps {
  src: string;
  size: 16 | 24 | 32 | 48 | 56;
  outline: boolean;
  style?: "live" | "rediff" | "offline";
}

const Avatar = (props: AvatarProps) => {
  return (
    <div
      data-style={props.style}
      style={{
        width: `${props.size || 32}px`,
        height: `${props.size || 32}px`,
      }}
      className={`avatar-container${props.outline ? " outlined" : ""} ${
        props.src ? "" : "generic"
      }`}
    >
      {props.src ? <img draggable="false" src={props.src} /> : <User2 />}
    </div>
  );
};

export default Avatar;
