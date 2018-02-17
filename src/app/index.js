import React, { Component } from "react";
import Header from "../components/Header";
import Main from "../components/Main";

import "./style.css";
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: "mailing"
        };

        this.handlerClick = this.handlerClick.bind(this);
    }
    render() {
        const { activeLink } = this.state;
        return (
            <div className="container">
                <Header activeLink={activeLink} onClick={this.handlerClick} />
                <Main activeLink={activeLink} />
            </div>
        );
    }
    handlerClick({ target }) {
        this.setState({ activeLink: target.name });
    }
}
