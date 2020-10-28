import React from "react";
import "./avatar.css";

const Avatar = (props) => {
    return (
        <div className="avatar">
<img className="avatar-img" src={props.avatar} alt="avatar"/>
        </div>
    )
}

export default Avatar;