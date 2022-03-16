import React from "react";

function Search({ onSearchChange }) {

  function handleSearchChange(event) {
    console.log(event.target.value)
    onSearchChange(event.target.value);
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={(event) => handleSearchChange(event)}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
