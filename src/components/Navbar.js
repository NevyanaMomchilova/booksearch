import "./Navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { BiBookHeart } from "react-icons/bi";
import { RiHeartLine } from "react-icons/ri";

const Navbar = ({ children, wishlistCounter }) => {
	return (
		<header className="navbar">
			<nav className="navbar-items-left">
				<NavLink to="/booklist">
					<div className="logo-container">
						<BiBookHeart className="logo" title="bookstore logo" />
						<p className="logo-text">
							BOOK
							<br />
							SEARCH
						</p>
					</div>
				</NavLink>
				<ul className="navbar-menu">
					<li>
						<NavLink
							to="/wishlist"
							className="navbar-menu-link"
							activeClassName="navbar-menu-link-active"
						>
							Wishlist
						</NavLink>
					</li>
				</ul>
			</nav>
			<div className="navbar-items-right">
				{/* Searct */}
				{children}
				{/* WishList */}
				<NavLink to="/wishlist">
					<div className="wishlist-container">
						<div className="wishlist-bubble">
							<p className="wishlist-number">{wishlistCounter}</p>
						</div>
						<RiHeartLine className="wishlist-icon" />
					</div>
				</NavLink>
			</div>
		</header>
	);
};

export default Navbar;
