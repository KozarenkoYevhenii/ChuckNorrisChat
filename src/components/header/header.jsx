import React from "react";
import Avatar from "../avatar/avatar";
import SearchField from "../searchField/searchField";
import "./header.css";


const Header = (props) => {
  return (
    <div className="header">
      <Avatar avatar={props.myAvatar} />
      <SearchField />
    </div>
  );
};

export default Header;
