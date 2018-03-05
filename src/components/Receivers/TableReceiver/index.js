import React, { Component } from "react";

import TableReceiverRow from "../TableReceiversRow";
import { ProgressBar } from "../../progressBar";

import "./style.css";

export default class TableReceiver extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { receivers, onEdit, onDelete, visibleProgressBar } = this.props;
        return (
            <div className="receiver-table__wrap">
                <table className="receiver-table">
                    <thead className="receiver-table__thead">
                        <tr>
                            <th>Name</th>
                            <th>e-mail</th>
                            <th>Phone</th>
                            <th>Date</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {receivers.map(({ name, email, phone, _id, dateCreate }) => {
                            return (
                                <TableReceiverRow
                                    key={_id}
                                    deleteButton={true}
                                    editButton={true}
                                    dateCreate={true}
                                    date={dateCreate}
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
                {visibleProgressBar && <ProgressBar />}
            </div>
        );
    }
}
