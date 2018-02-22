import React, { Component } from "react";
import Mailer from "../Mailer";
import "./style.css";
import Receivers from "../Receivers";
import Viber from "../Viber";

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.pages = {
            mailing: <Mailer />,
            receivers: <Receivers />,
            viber: <Viber />
        };
    }
    render() {
        const { activeLink, onClick } = this.props;
        return <main className="main">{this.pages[activeLink]}</main>;
    }
}
