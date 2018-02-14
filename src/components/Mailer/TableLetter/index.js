import React, { Component } from "react";
import TableLetterRow from "../TableLetterRow";
import "./style.css";

export default class TableLetter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { letters, onSend, onEdit, onDelete } = this.props;
        return (
            <table className="mailer-table">
                <thead className="mailer-table__thead">
                    <tr>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>Date</th>
                        <th>Send</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {letters.map(letter => {
                        return (
                            <TableLetterRow
                                key={letter._id}
                                id={letter._id}
                                name={letter.name}
                                subject={letter.subject}
                                date={letter.dateCreate}
                                onSend={onSend}
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
