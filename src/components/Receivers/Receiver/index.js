import React, { Component } from "react";
import "./style.css";
import Input from "../../input";
import Button from "../../button";
import request from "../../../requests/receiver";
import constants from "../../../constants";

export default class Receiver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            receiver: {
                name: "",
                email: "",
                phone: ""
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleEditReceiver = this.handleEditReceiver.bind(this);
        this.handleSaveReceiver = this.handleSaveReceiver.bind(this);
    }

    componentDidMount() {
        this.props.id &&
            request.getOneReceiver(this.props.id).then(({ data }) => {
                this.setState({ receiver: data });
            });
    }

    render() {
        const { name, email, phone } = this.state.receiver;
        return (
            <div className="create-receiver">
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
            console.log(data);
        });
    }
    handleSaveReceiver() {}
}
