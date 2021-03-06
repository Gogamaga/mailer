import React, { Component } from "react";
import "./style.css";
import Input from "../../../input/index.jsx";
import InputRadio from "../../../inputRadio";
import Button from "../../../button";

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
            onChange,
            units,
            array,
            handlerDeleteLetterItem,
            onChangeInputRadio
        } = this.props;
        return (
            <div className="create-letter__item" data-id={id}>
                {array.length > 1 && (
                    <div>
                        <Button onClick={handlerDeleteLetterItem}>
                            <i className="fas fa-times" />
                        </Button>
                    </div>
                )}

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
                <div className="create-letter__item-input-number-group">
                    <label>
                        Price<Input
                            value={price}
                            type="number"
                            name={"price"}
                            onChange={onChange}
                        />
                    </label>
                    <label>
                        Count<Input
                            value={count}
                            type="number"
                            name={"count"}
                            onChange={onChange}
                        />
                    </label>
                </div>
                <div className="create-letter__item-input-radio-group">
                    <div>
                        <label>
                            <InputRadio
                                name={id}
                                value="од"
                                onChange={onChangeInputRadio}
                                units={units}
                            />
                            unints.
                        </label>
                    </div>
                    <div>
                        <label>
                            <InputRadio
                                name={id}
                                value="кг"
                                onChange={onChangeInputRadio}
                                units={units}
                            />
                            kg.
                        </label>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}
