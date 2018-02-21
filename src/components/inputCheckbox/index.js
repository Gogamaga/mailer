import React, { Component } from "react";

import "./style.css";

export default class InputCheckbox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { value, onChange, checked } = this.props;
        return (
            <label className="container-input-checkbox">
                <input type="checkbox" value={value} onChange={onChange} checked={checked} />
                <span className="container-input-checkbox__checkmark">
                    <span className="container-input-checkbox__checkmark-inside" />
                </span>
            </label>
        );
    }
}
