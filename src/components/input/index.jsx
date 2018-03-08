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
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.value !== this.props.value || nextState.focus !== this.state.focus;
    }

    render() {
        const { type, name, onChange, placeholder, dataId, value, onBlur } = this.props;
        console.log("input");
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
    handleBlur(e) {
        this.setState({ focus: false });
        this.props.onBlur&&this.props.onBlur(e)
    }
}
