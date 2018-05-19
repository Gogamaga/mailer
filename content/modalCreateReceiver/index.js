import React, { Component } from "react";
import axios from "axios";
import "./style.css";

export default class ModalCreateReceiver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            email: "",
            resultCreated: {
                className: null,
                text: ""
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
    }

    render() {
        return (
            <div className="create-receiver">
                <span className={this.state.resultCreated.className}>
                    {this.state.resultCreated.text}
                </span>
                <form className="create-receiver__form">
                    <span
                        onClick={this.props.closeModal}
                        className={"create-receiver__button-close"}
                    >
                        x
                    </span>
                    <h2>Create Receiver</h2>
                    <label htmlFor="">
                        Name:<input
                            type="text"
                            name="name"
                            className="create-receiver__form-input"
                            onChange={this.handleChange}
                            value={this.state.name}
                        />
                    </label>
                    <label htmlFor="">
                        Phone:<input
                            type="tel"
                            name="phone"
                            className="create-receiver__form-input"
                            onChange={this.handleChange}
                            value={this.state.phone}
                        />
                    </label>
                    <label htmlFor="">
                        E-mail:<input
                            type="email"
                            name="email"
                            className="create-receiver__form-input"
                            onChange={this.handleChange}
                            value={this.state.email}
                        />
                    </label>
                    <button onClick={this.handlerSubmit}>Create</button>
                </form>
            </div>
        );
    }

    handleChange({ target }) {
        this.setState({ [target.name]: target.value.trim() });
    }

    handlerSubmit(e) {
        axios.post("http://localhost:3000/receiver", this.state).then(({ data }) => {
            if (data.n) {
                this.setState({
                    resultCreated: {
                        className: "create-receiver__status-created_success",
                        text: "Created Success"
                    }
                });
            } else {
                this.setState({
                    resultCreated: {
                        className: "create-receiver__status-created_error",
                        text: "error"
                    }
                });
            }
        });
        setTimeout(() => {
            this.setState({
                resultCreated: {
                    className: null,
                    text: ""
                }
            });
        }, 3000);
        e.preventDefault();
    }
}
