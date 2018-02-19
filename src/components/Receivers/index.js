import React, { Component } from "react";
import receiverRequest from "../../requests/receiver";
import "./style.css";
import TableReceiver from "./TableReceiver";
import Button from "../button";
import Receiver from "./Receiver";
import Tooltip from "../tooltip";
import utils from "../../utils";
import request from "../../requests/receiver";

export default class Receivers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            receivers: [],
            createReceiver: false,
            editReceiver_Id: null,
            tooltipText: null,
            statusResponse: false
        };
        this.handleCreateReceiver = this.handleCreateReceiver.bind(this);
        this.handleEditReceiver = this.handleEditReceiver.bind(this);
        this.handleDeleteReceiver = this.handleDeleteReceiver.bind(this);
        this.hideTooltip = utils.hideTooltip.bind(this);
    }
    componentDidMount() {
        receiverRequest.getAllReceiver().then(({ data }) => {
            this.setState({ receivers: data });
        });
    }
    render() {
        const {
            receivers,
            createReceiver,
            editReceiver_Id,
            statusResponse,
            tooltipText
        } = this.state;
        return (
            <div className="receivers-wrap">
                <Tooltip
                    className={statusResponse ? "tooltip tooltip_visible" : "tooltip tooltip_hide"}
                >
                    {tooltipText}
                </Tooltip>
                <Button onClick={this.handleCreateReceiver}>
                    {!createReceiver ? "Create Receiver" : "Back to list"}
                </Button>
                {!createReceiver ? (
                    <TableReceiver
                        receivers={receivers}
                        onEdit={this.handleEditReceiver}
                        onDelete={this.handleDeleteReceiver}
                    />
                ) : (
                    <Receiver id={editReceiver_Id} />
                )}
            </div>
        );
    }

    handleCreateReceiver() {
        this.setState(({ createReceiver }) => {
            return { createReceiver: !createReceiver, editReceiver_Id: null };
        });
    }
    handleEditReceiver({ target }) {
        const id = target.closest("tr").dataset.id;
        this.setState({ createReceiver: true, editReceiver_Id: id });
    }
    handleDeleteReceiver({ target }) {
        const id = target.closest("tr").dataset.id;
        request.deleteReceiver(id).then(({ data }) => {
            this.setState(prevState => {
                const { receivers, statusResponse, tooltipText } = prevState;
                return {
                    receivers: data.n
                        ? receivers.filter(receiver => receiver._id !== id)
                        : receivers,
                    statusResponse: true,
                    tooltipText: data.n ? "Receiver Deleted" : "Data Base Error"
                };
            }, this.hideTooltip({ statusResponse: false }, 3000));
        });
    }
}
