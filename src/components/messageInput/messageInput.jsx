import React from "react";
import "./messageInput.css";

const MessageInput = () => {
    return (
        <div className="message-input">
            <input className="message-input-field" placeholder="  Type your message" />
        </div>
    )
}

export default MessageInput;