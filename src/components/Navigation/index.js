import React, { Component } from "react";
import "./style.css";

export default class Navigator extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { onClick, activeLink } = this.props;
        return (
            <ul className="navigator-list">
                <li className="navigator-list__item">
                    <a
                        href="#"
                        className={
                            activeLink === "mailing"
                                ? "navigator-list__item-link active"
                                : "navigator-list__item-link"
                        }
                        onClick={onClick}
                        name="mailing"
                    >
                        Mailing
                    </a>
                </li>
                <li className="navigator-list__item">
                    <a
                        href="#"
                        className={
                            activeLink === "viber"
                                ? "navigator-list__item-link active"
                                : "navigator-list__item-link"
                        }
                        onClick={onClick}
                        name="viber"
                    >
                        Viber
                    </a>
                </li>
                <li className="navigator-list__item">
                    <a
                        href="#"
                        className={
                            activeLink === "receivers"
                                ? "navigator-list__item-link active"
                                : "navigator-list__item-link"
                        }
                        onClick={onClick}
                        name="receivers"
                    >
                        Receivers
                    </a>
                </li>
            </ul>
        );
    }
}
