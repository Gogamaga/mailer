import React, { Component } from "react";
import "./style.css";
import Input from "../../input";
import Button from "../../button";
import Tooltip from "../../tooltip";
import request from "../../../requests/receiver";
import constants from "../../../constants";
import utils from "../../../utils";

export default class Receiver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            receiver: {
                name: "",
                email: "",
                phone: ""
            },
            statusResponse: false,
            tooltipText: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleEditReceiver = this.handleEditReceiver.bind(this);
        this.handleSaveReceiver = this.handleSaveReceiver.bind(this);
        this.hideTooltip = utils.hideTooltip.bind(this);
    }

    componentDidMount() {
        this.props.id &&
            request.getOneReceiver(this.props.id).then(({ data }) => {
                this.setState({ receiver: data });
            });
    }

    render() {
        const { statusResponse, tooltipText, receiver: { name, email, phone } } = this.state;
        return (
            <div className="create-receiver">
                <Tooltip
                    className={statusResponse ? "tooltip tooltip_visible" : "tooltip tooltip_hide"}
                >
                    {tooltipText}
                </Tooltip>
                <label>
                    Name:
                    <Input value={name} name={"name"} onChange={this.handleChange} />
                </label>
                <label>
                    E-mail:
                    <Input value={email} name={"email"} onChange={this.handleChange} />
                </label>
                <label>
                    Phone
                    <Input value={phone} name={"phone"} onChange={this.handleChange} />
                </label>
                {this.props.id ? (
                    <Button onClick={this.handleEditReceiver}>Edit</Button>
                ) : (
                    <Button onClick={this.handleSaveReceiver}>Save</Button>
                )}
            </div>
        );
    }

    handleChange({ target }) {
        const name = target.name;
        const value = target.value;
        this.setState(({ receiver }) => {
            receiver[name] = value;
            return { receiver: receiver };
        });
    }

    handleEditReceiver() {
        const { id } = this.props;
        request.updateReceiver(id, this.state.receiver).then(({ data }) => {
            this.setState(
                { statusResponse: true, tooltipText: data.n ? "Edit Success" : "Data Base Error" },
                this.hideTooltip({ statusResponse: false }, 3000)
            );
        });
    }
    handleSaveReceiver() {
        request.saveReceiver(this.state.receiver).then(({ data }) => {
            this.setState(
                { statusResponse: true, tooltipText: data.n ? "Save Success" : "Data Base Error" },
                this.hideTooltip({ statusResponse: false }, 3000)
            );
        });
    }
}
