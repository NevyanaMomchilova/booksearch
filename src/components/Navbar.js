import "./Navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { BiBookHeart, BiMenu } from "react-icons/bi";
import { RiHeartLine } from "react-icons/ri";

const Navbar = ({ children, wishlistCounter }) => {
    return (
        <header className="navbar" >
            <nav className="navbar-items-left" >
                <BiMenu className="hamburger-icon" title="hamburger menu" />
                <NavLink to="/" >
                    <div className="logo-container">
                        <BiBookHeart className="logo" title="bookstore logo" />
                        <p className="logo-text" >BOOK<br/>SEARCH</p>
                    </div>    
                </NavLink>
                <ul className="navbar-menu" >
                    <li>
                        <NavLink to="/categories" className="navbar-menu-link" >Categories</NavLink>
                    </li>
                    <li>
                        <NavLink to="/wishlist" className="navbar-menu-link" >Wishlist</NavLink>
                    </li>
                    <li>
                        <NavLink to="/quotes" className="navbar-menu-link" >Quotes</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="navbar-items-right">
                {/* Searct */}
                { children }
                {/* WishList */}
                <div className="wishlist-container" >
                    <div className="wishlist-bubble" >
                        <p className="wishlist-number" >
                            {wishlistCounter}
                        </p>
                    </div>
                    <RiHeartLine className="wishlist-icon" />
                </div>
            </div>
        </header>
    );
};

export default Navbar; 