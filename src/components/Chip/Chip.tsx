import React from 'react';

import './Chip.scss';

import {LucideIcon} from "lucide-react";

export interface ChipProps {
  label: string;
  icon: LucideIcon;
}

const Chip = (props: ChipProps) => {
  return (
    <div className="chip">
      {props.icon && <props.icon className="icon" size={16} />}
      <span className="text">{props.label}</span>
    </div>
  );
};

export default Chip;