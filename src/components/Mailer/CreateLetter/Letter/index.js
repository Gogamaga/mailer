import React, { Component } from "react";
import "./style.css";
import Input from "../../../input";

export default class Letter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            id,
            itemName,
            hrefItem,
            imageItem,
            brandName,
            imageBrand,
            price,
            count,
            onChange
        } = this.props;
        return (
            <div className="create-letter__item" data-id={id}>
                <label>
                    Href Item<Input value={hrefItem} name={"hrefItem"} onChange={onChange} />
                </label>
                <label>
                    Name Item<Input value={itemName} name={"itemName"} onChange={onChange} />
                </label>
                <label>
                    Item image<Input value={imageItem} name={"imageItem"} onChange={onChange} />
                </label>
                <label>
                    Name Brand<Input value={brandName} name={"brandName"} onChange={onChange} />
                </label>
                <label>
                    Brand Image<Input value={imageBrand} name={"imageBrand"} onChange={onChange} />
                </label>
                <label>
                    Price<Input value={price} type="number" name={"price"} onChange={onChange} />
                </label>
                <label>
                    Count<Input value={count} type="number" name={"count"} onChange={onChange} />
                </label>
                <hr />
            </div>
        );
    }
}