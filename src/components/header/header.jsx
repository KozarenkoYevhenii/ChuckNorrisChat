import React from "react";
import Avatar from "../avatar/avatar";
import SearchField from "../searchField/searchField";
import "./header.css";

const Header = () => {
    return (
        <div className="header">
            <Avatar />
            <SearchField />
        </div>
    )
}

export default Header;