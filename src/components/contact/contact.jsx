import React from "react";
import Avatar from "../avatar/avatar"
import "./contact.css"

const Contact = (props) => {
    
    return (
        <div className="contact">
            <Avatar avatar={props.avatar} />
           <div>{props.name}</div> 
        </div>
    )
}

export default Contact;