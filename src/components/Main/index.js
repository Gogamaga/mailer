import React, { Component } from "react";
import Mailer from "../Mailer";
import "./style.css";

export default class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { activeLink, onClick } = this.props;
        return (
            <main className="main">
                <Mailer />
            </main>
        );
    }
}
