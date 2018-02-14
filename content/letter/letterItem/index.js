import React, { Component } from "react";
import "./style.css";
import Input from "../../../input";
import reduce from "../../../../app/state";

export default class LetterItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            onChange,
            dataId,
            value,
            letterNumber,
            href,
            nameItem,
            brandImage,
            itemImage,
            brandName,
            price,
            count
        } = this.props;
        return (
            <div data-id={dataId} className="container-letter-item">
                <h2>{letterNumber}</h2>
                <Input
                    type={"text"}
                    name={"href"}
                    placeholder={"Href Item"}
                    onChange={onChange}
                    dataId={dataId}
                    value={href}
                />
                <Input
                    type={"text"}
                    name={"nameItem"}
                    placeholder={"Item Name"}
                    onChange={onChange}
                    value={nameItem}
                />
                <Input
                    type={"text"}
                    name={"brandImage"}
                    placeholder={"Image Brand"}
                    onChange={onChange}
                    value={brandImage}
                />
                <Input
                    type={"text"}
                    name={"itemImage"}
                    placeholder={"Image Item"}
                    onChange={onChange}
                    value={itemImage}
                />
                <Input
                    type={"text"}
                    name={"brandName"}
                    placeholder={"Brand Name"}
                    onChange={onChange}
                    value={brandName}
                />
                <Input
                    type={"number"}
                    name={"price"}
                    placeholder={"Price"}
                    onChange={onChange}
                    value={price}
                />
                <Input
                    type={"number"}
                    name={"count"}
                    placeholder={"Count"}
                    onChange={onChange}
                    value={count}
                />
            </div>
        );
    }
}
