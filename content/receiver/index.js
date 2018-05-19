import React, { Component } from "react";

export default class Receiver extends Component {
    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this)
    }

    render() {
        const { name, email, phone, id, checked } = this.props;
        return (
            <tr>
                <th>
                    <input
                        type="checkbox"
                        onChange={this.handleChange.bind(this)}
                        checked={checked}
                    />
                </th>
                <th>{name}</th>
                <th>{email}</th>
                <th>{phone}</th>
            </tr>
        );
    }
    handleChange(e) {
        this.props.checkedReceiver(this.props.id);
    }
}
