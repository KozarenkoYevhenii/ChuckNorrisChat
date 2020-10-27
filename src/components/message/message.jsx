import React from "react";
import Avatar from "../avatar/avatar";
import "./message.css";

const Message = () => {
  return (
    <div className="message-wrapper">
      <Avatar />
      <div className="message">
        <div className="message-text">Message text</div>
        <div className="message-date">dd/mm/yyyy, time</div>
      </div>
    </div>
  );
};

export default Message;
