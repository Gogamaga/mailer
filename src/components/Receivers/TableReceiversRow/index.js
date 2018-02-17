import React, { Component } from "react";
import Button from "../../button";
import "./style.css";

export default function TableReceiverRow({ name, email, date, phone, onDelete, onEdit, id }) {
    return (
        <tr className="receiver-table__tbody-row" data-id={id}>
            <th>{name}</th>
            <th>{email}</th>
            <th>{phone}</th>
            {/* <th>{date}</th> */}
            <th>
                <Button onClick={onEdit} backgroundColor={"#28a745"}>
                    <i className="fas fa-pen-square" /> Edit
                </Button>
            </th>
            <th>
                <Button backgroundColor={"#ff0000"} onClick={onDelete}>
                    <i className="far fa-trash-alt" /> Delete
                </Button>
            </th>
        </tr>
    );
}
