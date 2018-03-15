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
        const { onClick, children, disabled, style = {} } = this.props;
        return (
            <button onClick={onClick} className="button" disabled={disabled} style={style}>
                {children}
            </button>
        );
    }
}
