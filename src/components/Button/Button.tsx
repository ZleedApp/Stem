import React from "react";

import "./Button.scss";

import { Command, LucideIcon } from "lucide-react";

export interface ButtonProps {
  label: string;
  outlined: boolean;
  icon: LucideIcon;
  color: "primary" | "red" | "yellow" | "green" | "blue";
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={props.outlined ? "btn outlined" : "btn"}
      data-color={props.color}
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
