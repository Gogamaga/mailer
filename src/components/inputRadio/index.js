import React, { Component } from "react";
import "./style.css";

export default class InputRadio extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { value, onChange, name, units } = this.props;
        return (
            <label className="container-input-radio">
                <span className="container-input-radio__text" />
                <input
                    type="radio"
                    value={value}
                    name={name}
                    onChange={onChange}
                    checked={units === value}
                />
                <span className="checkmark">
                    <span className="checkmark-circle" />
                </span>
            </label>
        );
    }
}
