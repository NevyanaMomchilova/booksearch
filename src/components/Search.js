import React from "react";
import { BsSearch } from "react-icons/bs";
import { createRef } from "react";

const Search = ({ handleSearchClick, handleSearchEnter }) => {
    let searchInputRef = createRef();
    return (
        <div className="search-container" >
            <BsSearch 
                className="search-icon" 
                title="search"
                onClick={() => handleSearchClick(searchInputRef)} />
            <input 
                ref={searchInputRef}
                type="text" 
                placeholder="Search for..."
                className="search-input"
                onKeyPress={handleSearchEnter}
                 />
        </div>
    );
};

export default Search;