import "./Button.css";
import React from "react";
import { FiHeart } from "react-icons/fi";

const Button = ({ children, className }) => {
    return (
        <button className={className} ><FiHeart className="btn-icon" />{ children }</button>
    );
}

export default Button;