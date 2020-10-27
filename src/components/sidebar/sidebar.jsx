import React from "react";
import Chats from "../chats/chats";
import Header from "../header/header";
import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
          <Header />
          <Chats />
    </div>
  );
};

export default Sidebar;
