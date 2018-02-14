import React, { Component } from "react";
import "./style.css";
import Navigator from "../Navigation";
export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { activeLink, onClick } = this.props;
        return (
            <header className="header">
                <Navigator onClick={onClick} activeLink={activeLink} />
            </header>
        );
    }
}
