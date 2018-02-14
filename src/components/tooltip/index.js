import React from "react";
import "./style.css";

export default function Tooltip({ children, className }) {
    return <span className={className}>{children}</span>;
}
