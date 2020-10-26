import React from "react";
import Contact from "../contact/contact";
import MessageInput from "../messageInput/messageInput";
import Messages from "../messages/messages";

const Dialog = () => {
    return (
        <div>
            <Contact />
            <Messages />
            <MessageInput />
        </div>
    )
}

export default Dialog;