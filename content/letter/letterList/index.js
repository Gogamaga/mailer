import React, { Component } from "react";
import "./style.css";
import Button from "../../../button";
import CreateLetter from "../createLetter";

export default class LetterList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            createLetter: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div>
                {!this.state.createLetter && (
                    <Button onClick={this.handleClick}>Create Letter</Button>
                )}
                {this.state.createLetter && <CreateLetter />}
            </div>
        );
    }
    handleClick() {
        this.setState({ createLetter: true });
    }
}
