import React from "react";
import "./Thumbnail.scss";
import Avatar from "../Avatar";
import { LucideEye, LucideVideo } from "lucide-react";
import StatusBadge from "../StatusBadge";

export interface ThumbnailProps {
  channel_name: string;
  channel_avatar: string;
  title: string;
  viewers: number;
  preview: string;
  type: "live" | "rediff" | "offline";
}

const Thumbnail = (props: ThumbnailProps) => {
  return (
    <div className="external">
      <div className="container">
        <div className="details">
          <span className="avatar-box">
            <Avatar
              style={props.type}
              src={props.channel_avatar}
              outline={true}
              size={56}
            />
          </span>
          <span className="channel-name">{props.channel_name}</span>
          <span className="content-title">{props.title}</span>
        </div>
        {props.preview !== "" ? (
          <img draggable="false" className="preview" src={props.preview} />
        ) : (
          <div className="preview-blank">
            <LucideVideo />
          </div>
        )}
        <div className="content-status">
          <StatusBadge style={props.type} />
          <span className="content-view-count">
            <LucideEye className="icon" />
            {props.viewers}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
