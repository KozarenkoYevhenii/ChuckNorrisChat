import React from "react";
import "./searchField.css";

const SearchField = () => {
  return (
    <div className="search-field">
      <input className="search-field-input" placeholder=" Search or start new chat" type="text" />
    </div>
  );
};

export default SearchField;
