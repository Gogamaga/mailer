import React, { Component } from "react";
import shortId from "short-id";
import "./style.css";
import Button from "../../../button";
import LetterItem from "../letterItem";
import reduce from "../../../../app/state";

export default class CreateLetter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            active: true
        };
        this.addItem = this.addItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.goReceiverList = this.goReceiverList.bind(this);
    }

    render() {
        return (
            <div className="create-letter">
                <Button onClick={this.addItem}>Add Item</Button>
                <Button onClick={this.goReceiverList}>Go Receivers List</Button>
                <h2>Create Letter</h2>
                <div className={this.state.active ? "container-letter" : "container-letter active"}>
                    {this.state.items.map((item, index) => {
                        return (
                            <LetterItem
                                letterNumber={index + 1}
                                key={item.id}
                                onChange={this.handleChange}
                                dataId={item.id}
                                href={item.href}
                                nameItem={item.nameItem}
                                brandImage={item.brandImage}
                                itemImage={item.itemImage}
                                brandName={item.brandName}
                                price={item.price}
                                count={item.count}
                            />
                        );
                    })}
                    {this.state.items.length > 0 && (
                        <Button onClick={this.saveLetter.bind(this)}>Save letter</Button>
                    )}
                </div>
                <div
                    className={
                        this.state.active ? "container-receiver active" : "container-receiver "
                    }
                />
            </div>
        );
    }
    addItem() {
        this.setState(
            prevState => {
                return {
                    items: [
                        ...prevState.items,
                        {
                            id: shortId.generate(),
                            href: "",
                            nameItem: "",
                            brandImage: "",
                            itemImage: "",
                            brandName: "",
                            price: 0,
                            count: 0
                        }
                    ]
                };
            },
            () => console.log(this.state.items)
        );
    }
    goReceiverList() {
        this.setState(prevState => {
            return { active: !prevState.active };
        });
    }
    handleValue(id, name) {
        return this.state.items.reduce((value, item) => {
            if (item.id === id) {
                value = value + item[name];
            }
            return value;
        }, "");
    }
    handleChange(e) {
        const id = e.target.parentNode.parentNode.dataset.id;
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevState => {
            const newState = prevState.items.map(item => {
                if (item.id === id) {
                    item[name] = value;
                }
                return item;
            });
            // reduce.setState(newState);
            return { items: newState };
        });
    }
    saveLetter() {
        console.log(this.state);
    }
}
