import React from "react";
import Message from "../message/message";
import "./messages.css";

const Messages = () => {
    return (
        <div className="messages">
            <Message />
            <Message />
            <Message />
        </div> 
    )
}

export default Messages;