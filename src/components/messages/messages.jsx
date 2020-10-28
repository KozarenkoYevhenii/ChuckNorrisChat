import React from "react";
import Message from "../message/message";
import "./messages.css";

const Messages = (props) => {
    return (
        <div className="messages">
            {props.dialog.messages.map(message => {
                return <Message text={message.text} date={message.date} time={message.time} avatar={props.dialog.avatar}/>
            })}
        </div> 
    )
}

export default Messages;