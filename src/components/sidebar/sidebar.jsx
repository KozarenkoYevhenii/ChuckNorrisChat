import React from "react";
import Chats from "../chats/chats";
import Header from "../header/header";
import "./sidebar.css"

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <Header myAvatar={props.myAvatar} />
          <Chats />
    </div>
  );
};

export default Sidebar;
