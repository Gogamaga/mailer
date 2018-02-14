import React, { Component } from "react";
import "./style.css";

export default class Button extends Component {
    static defaultProps = {
        backgroundColor: null,
        disabled: false
    };
    constructor(props) {
        super(props);
    }

    render() {
        const  { backgroundColor, onClick, children, disabled } = this.props;
        return (
            <button
                onClick={onClick}
                className="button"
                style={{ backgroundColor: backgroundColor }}
                disabled={disabled}
            >
                {children}
            </button>
        );
    }
}
