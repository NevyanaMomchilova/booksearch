import "./Button.css";
import React from "react";

const Button = ({ children, className, handleFunction }) => {
    return (
        <button className={className} onClick={handleFunction} >{ children }</button>
    );
}

export default Button;