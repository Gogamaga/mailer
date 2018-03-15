import React, { Component } from "react";

import TableReceiver from "./TableReceiver";
import Button from "../button";
import Receiver from "./Receiver";
import Tooltip from "../tooltip";
import Input from "../input/index.jsx";
import { Select } from "../select";

import utils from "../../utils";
import request from "../../requests/receiver";
import receiverRequest from "../../requests/receiver";

import "./style.css";

export default class Receivers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            receivers: [],
            createReceiver: false,
            editReceiver_Id: null,
            tooltipText: null,
            statusResponse: false,
            visibleProgressBar: true,
            selectOptionValue: "name",
            searching: false,
            searchValue: ""
        };
        this.limit = {
            from: 0,
            to: 10,
            step: 10
        };
        this.receiverCount = 0;

        this.handleCreateReceiver = this.handleCreateReceiver.bind(this);
        this.handleEditReceiver = this.handleEditReceiver.bind(this);
        this.handleDeleteReceiver = this.handleDeleteReceiver.bind(this);
        this.hideTooltip = utils.hideTooltip.bind(this);
        this.hahdneChangeSelect = ::this.hahdneChangeSelect;
        this.handlerInputSearch = ::this.handlerInputSearch;
        this.handleGoSearching = ::this.handleGoSearching;
    }
    componentDidMount() {
        receiverRequest.getLimitReceivers(this.limit).then(({ data }) => {
            this.receiverCount = data.receiverCount;
            this.setState({ receivers: data.limitReceivers, visibleProgressBar: false });
        });
        document.querySelector(".main").addEventListener("scroll", this.handlerScroll);
    }
    componentWillUnmount() {
        document.querySelector(".main").removeEventListener("scroll", this.handlerScroll);
    }
    handlerScroll = ({ target }) => {
        const scrollTop = target.scrollTop;
        const innerHeightTarget =
            target.clientHeight -
            (utils.getComputedStyle(target, "padding-top") +
                utils.getComputedStyle(target, "padding-bottom"));
        const { from, to, step } = this.limit;
        if (
            this.state.receivers.length < this.receiverCount &&
            scrollTop === this.receiverWrap.offsetHeight - innerHeightTarget
        ) {
            this.setState({ visibleProgressBar: true });
            this.limit = Object.assign({}, { from: from + step, to: to + step, step });
            this.state.searching
                ? this.getSearchingReceiver(this.state, this.limit).then(({ data }) => {
                      this.setState(prevState => {
                          return {
                              receivers: [...prevState.receivers, ...data.limitReceivers],
                              visibleProgressBar: false
                          };
                      });
                  })
                : receiverRequest.getLimitReceivers(this.limit).then(({ data }) => {
                      this.setState(prevState => {
                          return {
                              receivers: [...prevState.receivers, ...data.limitReceivers],
                              visibleProgressBar: false
                          };
                      });
                  });
        }
    };

    render() {
        const {
            receivers,
            createReceiver,
            editReceiver_Id,
            statusResponse,
            tooltipText,
            visibleProgressBar,
            selectOptionValue,
            searchValue
        } = this.state;
        return (
            <div className="receivers-wrap" ref={c => (this.receiverWrap = c)}>
                <Tooltip
                    className={statusResponse ? "tooltip tooltip_visible" : "tooltip tooltip_hide"}
                >
                    {tooltipText}
                </Tooltip>
                <Button onClick={this.handleCreateReceiver}>
                    {!createReceiver ? "Create Receiver" : "Back to list"}
                </Button>
                <div className="receiver__input-search">
                    <Select
                        options={["name", "email", "phone"]}
                        onChange={this.hahdneChangeSelect}
                        value={selectOptionValue}
                        style={{ width: "30%", color: "black" }}
                        className={"receiver__input-search-select"}
                    />
                    <Input
                        onChange={this.handlerInputSearch}
                        value={searchValue}
                        onKeyPress={this.handleGoSearching}
                    />
                    <Button style={{ height: 50 }} onClick={this.handleGoSearching}>
                        <i className="fas fa-search" />
                    </Button>
                </div>
                {!createReceiver ? (
                    <TableReceiver
                        receivers={receivers}
                        onEdit={this.handleEditReceiver}
                        onDelete={this.handleDeleteReceiver}
                        visibleProgressBar={visibleProgressBar}
                        endScroll={receivers.length < this.receiverCount}
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
    hahdneChangeSelect(value) {
        this.setState({ selectOptionValue: value });
    }
    handlerInputSearch(e) {
        this.setState({ searchValue: e.target.value });
    }
    handleGoSearching(e) {
        if (e.key === "Enter" || e.type === "click") {
            this.limit = Object.assign({}, this.limit, { from: 0, to: 10 });
            this.setState({ visibleProgressBar: true, searching: true });
            this.getSearchingReceiver(this.state, this.limit).then(({ data }) => {
                this.receiverCount = data.receiverCount;
                this.setState({ receivers: data.limitReceivers, visibleProgressBar: false });
            });
        }
    }
    getSearchingReceiver({ searchValue, selectOptionValue }, limit) {
        const searchingReceiver = { field: selectOptionValue, searchValue };
        return receiverRequest.searchReceiver(searchingReceiver, limit);
    }
}
