import React from "react";
import Contact from "../contact/contact";
import MessageInput from "../messageInput/messageInput";
import Messages from "../messages/messages";
import "./dialog.css"

const Dialog = (props) => {

    return (
        <div className="dialog">
            <Contact name={props.dialog.contact} avatar={props.dialog.avatar}/>
            <Messages dialog={props.dialog}/>
            <MessageInput />
        </div>
    )
}

export default Dialog;