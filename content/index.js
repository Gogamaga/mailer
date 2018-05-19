import React, { Component } from "react";
import Container from "./container";
import "./style.css";

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: "mailing"
        };
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (
            <main className="content">
                <nav className="content__nav">
                    <ul className="content__list">
                        <li className="content__list-item">
                            <a href="#" name="mailing" onClick={this.handleClick}>
                                Mailing
                            </a>
                        </li>
                        <li className="content__list-item">
                            <a href="#" name="letterList" onClick={this.handleClick}>
                                Letter
                            </a>
                        </li>
                        <li className="content__list-item">
                            <a href="#" name="receiverList" onClick={this.handleClick}>
                                Receiver
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="container">
                    <Container activeLink={this.state.activeLink} />
                </div>
            </main>
        );
    }
    handleClick(e) {
        e.preventDefault();
        this.setState({ activeLink: e.target.name }, () => console.log(this.state.activeLink));
    }
}
