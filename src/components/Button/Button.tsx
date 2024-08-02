import React from "react";

import "./Button.scss";

import { Command, LucideIcon } from "lucide-react";

export interface ButtonProps {
  label: string;
  style: "full" | "outlined";
  icon: LucideIcon;
  iconOnLeft: boolean;
  size: 24 | 32 | 48;
  color: "primary" | "red" | "yellow" | "green" | "blue";
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`btn ${props.style}`}
      data-color={props.color}
      style={{
        fontSize: `${(props.size || 32) / 32}em`,
        flexDirection: props.iconOnLeft ? "row-reverse" : "row"
      }}
    >
      <span className="text">{props.label}</span>
      {props.icon ? (
        <props.icon className="icon" size={16} />
      ) : (
        <Command className="icon" size={16} />
      )}
    </button>
  );
};

export default Button;
