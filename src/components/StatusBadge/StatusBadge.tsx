import React from "react";
import "./StatusBadge.scss";
import { RadioTower, RefreshCw, WifiOff } from "lucide-react";

export interface StatusBadgeProps {
  style: "live" | "rediff" | "offline";
}

const StatusBadge = (props: StatusBadgeProps) => {
  return (
    <span data-style={props.style} className="badge-container">
      {props.style === "live" ? (
        <>
          <RadioTower className="icon" />
          <span className="content">on air</span>
        </>
      ) : props.style === "rediff" ? (
        <>
          <RefreshCw className="icon" />
          <span className="content">rediff</span>
        </>
      ) : (
        <>
          <WifiOff className="icon" />
          <span className="content">offline</span>
        </>
      )}
    </span>
  );
};

export default StatusBadge;
