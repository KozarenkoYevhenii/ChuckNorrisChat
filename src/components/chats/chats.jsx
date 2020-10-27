import React from "react";
import Chat from "../chat/chat";
import "./chats.css"

const Chats = () => {
    return (
        <div className="chats">
            <div className="chats-title">Chats</div>
            <div className="chats-items">
                <Chat />
                <Chat />
                <Chat />
            </div>
        </div>
    )
}

export default Chats;