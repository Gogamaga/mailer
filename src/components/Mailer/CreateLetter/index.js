import React, { Component } from "react";
import request from "../../../requests";
import constants from "../../../constants";
import "./style.css";
import Input from "../../input";
import Button from "../../button";
import Letter from "./Letter";
import Tooltip from "../../tooltip";
import utils from "../../../utils";

export default class CreateLetter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            letter: {},
            statusResponse: false,
            statusDataBase: false,
            disabledButton: false,
            tooltipText: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.addLetterItem = this.addLetterItem.bind(this);
        this.handleSaveLetter = this.handleSaveLetter.bind(this);
        this.handleEditLetter = this.handleEditLetter.bind(this);
        this.hideTooltip = utils.hideTooltip.bind(this);
        // this.validateInput = this.validateInput.bind(this);
    }
    componentDidMount() {
        this.props.id
            ? request.getOneLetter(this.props.id).then(({ data }) => {
                  this.setState({ letter: data });
              })
            : this.setState({ letter: constants.newLetter });
    }
    render() {
        const { letter, statusResponse, statusDataBase, disabledButton, tooltipText } = this.state;
        return (
            <div className="create-letter">
                <Tooltip
                    className={statusResponse ? "tooltip tooltip_visible" : "tooltip tooltip_hide"}
                >
                    {tooltipText}
                </Tooltip>
                <div className="create-letter__info">
                    <label>
                        Letter Name<Input
                            value={
                                this.state.letter.name !== undefined ? this.state.letter.name : ""
                            }
                            onChange={this.handleChange}
                            name="name"
                        />
                    </label>
                    <label>
                        Subject<Input
                            value={
                                this.state.letter.subject !== undefined
                                    ? this.state.letter.subject
                                    : ""
                            }
                            onChange={this.handleChange}
                            name="subject"
                        />
                    </label>
                </div>
                <hr />
                <div className="">
                    {letter.letterItem &&
                        letter.letterItem.map(item => {
                            const {
                                id,
                                itemName,
                                hrefItem,
                                imageItem,
                                brandName,
                                imageBrand,
                                price,
                                count
                            } = item;
                            return (
                                <Letter
                                    key={id}
                                    id={id}
                                    itemName={itemName}
                                    hrefItem={hrefItem}
                                    imageItem={imageItem}
                                    brandName={brandName}
                                    imageBrand={imageBrand}
                                    price={price}
                                    count={count}
                                    onChange={this.handleChange}
                                />
                            );
                        })}
                </div>
                <div className="create-letter__button-group">
                    {this.props.id ? (
                        <Button onClick={this.handleEditLetter}>Edit</Button>
                    ) : (
                        <Button onClick={this.handleSaveLetter} disabled={disabledButton}>
                            Save
                        </Button>
                    )}
                    <Button onClick={this.addLetterItem}>Add Item</Button>
                </div>
            </div>
        );
    }
    handleChange({ target }) {
        const value = target.value.trim();
        const name = target.name;
        this.setState(({ letter }) => {
            if (letter[name] !== undefined) {
                letter[name] = value;
                const newState = letter;
                return { letter: newState };
            } else {
                const id = target.closest(".create-letter__item").dataset.id;
                const newLetterItem = letter.letterItem.map(item => {
                    if (item.id == id) {
                        item[name] = value;
                    }
                    return item;
                });
                letter.letterItem = [...newLetterItem];
                const newState = letter;
                return { letter: newState };
            }
        });
    }
    addLetterItem() {
        this.setState(({ letter }) => {
            const newLetterItem = [...letter.letterItem, constants.newItem];
            letter.letterItem = [...newLetterItem];
            return { letter: letter };
        });
    }
    handleSaveLetter() {
        const { letter } = this.state;
        if (utils.validateInput(letter)) {
            request
                .saveLetter(letter)
                .then(({ data }) => {
                    this.setState({
                        statusDataBase: data.n,
                        statusResponse: true,
                        tooltipText: "Saved Success"
                    });
                    this.hideTooltip({ statusResponse: false }, 2000);
                    // setTimeout(() => {
                    //     this.setState({ statusResponse: false });
                    // }, 2000);
                })
                .catch(result => console.log(result));
        } else {
            console.log("bad");
        }
    }
    handleEditLetter() {
        request
            .updateLetter(this.props.id, this.state.letter)
            .then(({ data }) => {
                console.log(data);
                this.setState({ statusDataBase: data.n, statusResponse: true });
                setTimeout(() => {
                    this.setState({ statusResponse: false });
                }, 2000);
            })
            .catch(result => console.log("error", result));
    }
}
