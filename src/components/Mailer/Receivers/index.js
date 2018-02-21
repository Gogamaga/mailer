import React, { Component } from "react";
import "./style.css";
import InputCheckbox from "../../inputCheckbox";
import TableReceiverRow from "../../Receivers/TableReceiversRow";

export default class Receivers extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { receivers, onChange, letterReceivers } = this.props;
        return (
            <table className="receiver-table">
                <thead className="receiver-table__thead">
                    <tr>
                        <th>
                            <InputCheckbox />
                        </th>
                        <th>Name</th>
                        <th>e-mail</th>
                        <th>Phone</th>
                    </tr>
                </thead>

                <tbody>
                    {receivers.map(({ name, email, phone, _id }) => {
                        return (
                            <TableReceiverRow
                                key={_id}
                                checkbox={true}
                                name={name}
                                email={email}
                                phone={phone}
                                id={_id}
                                onChange={onChange}
                                valueCheckbox={email}
                                checked={letterReceivers.some(receiver => receiver === email)}
                            />
                        );
                    })}
                </tbody>
            </table>
        );
    }
}
