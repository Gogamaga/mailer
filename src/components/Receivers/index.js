import React, { Component } from "react";
import receiverRequest from "../../requests/receiver";
import "./style.css";
import TableReceiver from "./TableReceiver";

export default class Receivers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            receivers: []
        };
    }
    componentDidMount() {
        receiverRequest.getAllReceiver().then(({ data }) => {
            this.setState({ receivers: data });
        });
    }
    render() {
        const { receivers } = this.state;
        return (
            <div className="receivers-wrap">
                <TableReceiver receivers={receivers} />
            </div>
        );
    }
}
