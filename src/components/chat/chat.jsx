import React from "react";
import "./chat.css";
import { NavLink } from "react-router-dom";

const Chat = (props) => {
  return (
    <NavLink to={`/${props.id}`}>
      <div className="chat-item">
        <img className="contact-img" src={props.avatar} alt="avatar" />
        <div className="chat-name-message-wrapper">
          <div className="chat-name">{props.name}</div>
          <div className="chat-message">{props.lastMessage}</div>
        </div>
        <div className="chat-date">{props.date}</div>
      </div>
    </NavLink>
  );
};

export default Chat;
