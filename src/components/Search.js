import "./Search.css";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { createRef } from "react";
import { NavLink } from "react-router-dom";

const Search = ({ handleSearchClick, handleSearchEnter }) => {
    let searchInputRef = createRef();
    return (
        <NavLink to="/search" >
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
        </NavLink>
    );
};

export default Search;