import React, { Component } from "react";
import Button from "../../button";
import "./style.css";

export default function TableLetterRow({ name, subject, date, onSend, onDelete, onEdit, id }) {
    return (
        <tr className="mailer-table__tbody-row" data-id={id}>
            <th>{name}</th>
            <th>{subject}</th>
            <th>{date}</th>
            <th>
                <Button onClick={onSend}>
                    <i className="far fa-share-square" /> Send
                </Button>
            </th>
            <th>
                <Button onClick={onEdit} style={{ backgroundColor: "#28a745" }}>
                    <i className="fas fa-pen-square" /> Edit
                </Button>
            </th>
            <th>
                <Button onClick={onDelete} style={{ backgroundColor: "#ff0000" }}>
                    <i className="far fa-trash-alt" /> Delete
                </Button>
            </th>
        </tr>
    );
}
