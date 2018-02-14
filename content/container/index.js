import React, { Component } from "react";
import ReceiverList from "../receiverList";
import LetterList from "../letter/letterList";
import Mailing from "../mailing";

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.activeWindow = {
            receiverList: <ReceiverList />,
            letterList: <LetterList />,
            mailing: <Mailing />
        };
    }

    render() {
        return <div>{this.activeWindow[this.props.activeLink]}</div>;
    }
}
