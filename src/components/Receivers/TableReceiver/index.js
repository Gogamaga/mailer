import React, { Component } from "react";
import TableReceiverRow from "../TableReceiversRow";
import "./style.css";

export default class TableReceiver extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { receivers, onEdit, onDelete } = this.props;
        return (
            <table className="receiver-table">
                <thead className="receiver-table__thead">
                    <tr>
                        <th>Name</th>
                        <th>e-mail</th>
                        <th>Phone</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {receivers.map(({ name, email, phone, _id }) => {
                        return (
                            <TableReceiverRow
                                key={_id}
                                name={name}
                                email={email}
                                phone={phone}
                                id={_id}
                                onEdit={onEdit}
                                onDelete={onDelete}
                            />
                        );
                    })}
                </tbody>
            </table>
        );
    }
}
