import React from "react";
import "./messageInput.css";

const MessageInput = () => {
    return (
        <div className="message-input">
            <div className="message-input-wrapper"> 
            <input className="message-input-field" placeholder="  Type your message" />
            <button className="message-button" type="submit">
                <img className="message-img" src="data:image/svg+xml;base64,
            PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxM
            iIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMD
            AwL3N2ZyI+PGc+PHBhdGggZD0ibTQ5OS4zOTQgMjM3LjM2NC00NzEuOTgyLTE4Ny40MWMtMTYuMzA2LTYuNDc
            0LTMyLjQ4OSA5LjgzLTI1LjkwNyAyNi4xNDlsNTYuNDY1IDEzOS45NTVjMi4wNTEgNS4wODMgNi4wOSA5LjEw
            MiAxMS4xNzUgMTEuMTIxbDcyLjU4MSAyOC44Mi03Mi41ODEgMjguODJjLTUuMDg2IDIuMDE5LTkuMTI1IDYuM
            DM4LTExLjE3NSAxMS4xMjFsLTU2LjQ2NiAxMzkuOTU1Yy02LjU2OSAxNi4yODYgOS41NjYgMzIuNjM3IDI1Lj
            kwNyAyNi4xNDlsNDcxLjk4Mi0xODcuNDFjMTYuNzc0LTYuNjYxIDE2Ljg0NC0zMC41ODIuMDAxLTM3LjI3em0
            tNDQzLjMwNCAxNzAuMTczIDM1Ljc1LTg4LjYxMSAxMTEuNTUtNDQuMjkyYzE2Ljc3MS02LjY2IDE2Ljg0MS0z
            MC41ODIgMC0zNy4yN2wtMTExLjU1LTQ0LjI5My0zNS43NS04OC42MTEgMzgxLjY0MSAxNTEuNTM4eiIvPjwvZ
            z48L3N2Zz4=" alt="Send" />
            </button>
            </div>

        </div>
    )
}

export default MessageInput;