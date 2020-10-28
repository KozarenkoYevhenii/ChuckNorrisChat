import React from "react";
import Avatar from "../avatar/avatar";
import "./message.css";

const Message = (props) => {
  return (
    <div className="message-wrapper">
      <Avatar avatar={props.avatar}/>
      <div className="message">
        <div className="message-text">{props.text}</div>
        <div className="message-date">{props.date}, {props.time}</div>
      </div>
    </div>
  );
};

export default Message;
