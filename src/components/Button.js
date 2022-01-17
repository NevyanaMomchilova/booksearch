import "./Button.css";
import React from "react";

const Button = ({ children, className, toggleWishlist }) => {
    return (
        <button className={className} onClick={toggleWishlist} >{ children }</button>
    );
}

export default Button;