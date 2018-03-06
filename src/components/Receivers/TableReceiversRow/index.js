import React, { Component } from "react";
import Button from "../../button";
import InputCheckbox from "../../inputCheckbox";
import "./style.css";

export default function TableReceiverRow({
    checkbox = false,
    deleteButton = false,
    editButton = false,
    dateCreate = false,
    name,
    email,
    date,
    phone,
    onDelete,
    onEdit,
    id,
    onChange,
    valueCheckbox,
    checked
}) {
    return (
        <tr className="receiver-table__tbody-row" data-id={id}>
            {checkbox && (
                <th className="receiver-table__tbody-row__th-checkbox">
                    <InputCheckbox onChange={onChange} value={valueCheckbox} checked={checked} />
                </th>
            )}
            <th>{name}</th>
            <th>{email}</th>
            <th>{phone}</th>
            {dateCreate && <th>{date}</th>}
            {editButton && (
                <th>
                    <Button onClick={onEdit} backgroundColor={"#28a745"}>
                        <i className="fas fa-pen-square" /> Edit
                    </Button>
                </th>
            )}
            {deleteButton && (
                <th>
                    <Button backgroundColor={"#ff0000"} onClick={onDelete}>
                        <i className="far fa-trash-alt" /> Delete
                    </Button>
                </th>
            )}
        </tr>
    );
}
