import React, { Component } from "react";
import "./style.css";

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: false
        };
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handle = this.handle.bind(this);
    }
    handle() {
        return "sdf";
    }

    render() {
        const { type, name, onChange, placeholder, dataId, value } = this.props;

        return (
            <div className="container-input">
                <input
                    className={"container-input__input"}
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                />
                <hr
                    className={
                        this.state.focus
                            ? "container-input__hr container-input__hr_focus"
                            : "container-input__hr"
                    }
                />
            </div>
        );
    }
    handleFocus() {
        this.setState({ focus: true });
    }
    handleBlur() {
        this.setState({ focus: false });
    }
}
