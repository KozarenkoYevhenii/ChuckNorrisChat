import React from "react";
import Chat from "../chat/chat";

const Chats = () => {
    return (
        <div>
            <span>Chats</span>
            <div>
                <Chat />
                <Chat />
                <Chat />
            </div>
        </div>
    )
}

export default Chats;