import React from "react";
import Contact from "../contact/contact";
import MessageInput from "../messageInput/messageInput";
import Messages from "../messages/messages";
import "./dialog.css"

const Dialog = () => {
    return (
        <div className="dialog">
            <Contact />
            <Messages />
            <MessageInput />
        </div>
    )
}

export default Dialog;