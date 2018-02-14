import React, { Component } from "react";
import TableLetter from "./TableLetter";
import "./style.css";
import request from "../../requests";
import Button from "../button";
import CreateLetter from "./CreateLetter";
import Tooltip from "../tooltip";

export default class Mailer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            letters: [],
            createLetter: false,
            editLetterId: null,
            statusResponse: false,
            statusDataBase: false
        };

        this.handlerSend = this.handlerSend.bind(this);
        this.handlerEdit = this.handlerEdit.bind(this);
        this.handlerDelete = this.handlerDelete.bind(this);
        this.handleCreateLetter = this.handleCreateLetter.bind(this);
    }
    componentDidMount() {
        request.getAllLetters().then(({ data }) => {
            this.setState({ letters: [...data] });
        });
    }
    render() {
        const { activeLink, onClick } = this.props;
        const { letters, createLetter, editLetterId, statusDataBase, statusResponse } = this.state;
        return (
            <div className="mailer-wrap">
                <Tooltip
                    className={statusResponse ? "tooltip tooltip_visible" : "tooltip tooltip_hide"}
                >
                    {statusDataBase ? "Delete Success" : "Error Data Base"}
                </Tooltip>
                {!createLetter ? (
                    <Button
                        backgroundColor={"hsl(206.1, 79.3%, 52.7%)"}
                        onClick={this.handleCreateLetter}
                    >
                        New Letter
                    </Button>
                ) : (
                    <Button
                        backgroundColor={"hsl(206.1, 79.3%, 52.7%)"}
                        onClick={this.handleCreateLetter}
                    >
                        Back to List
                    </Button>
                )}

                {!this.state.createLetter ? (
                    <TableLetter
                        onSend={this.handlerSend}
                        onEdit={this.handlerEdit}
                        onDelete={this.handlerDelete}
                        letters={this.state.letters}
                    />
                ) : (
                    <CreateLetter id={this.state.editLetterId} />
                )}
            </div>
        );
    }
    handlerSend({ target }) {
        console.log(target.closest("tr").dataset.id);
    }
    handlerEdit({ target }) {
        const id = target.closest("tr").dataset.id;
        this.setState({ createLetter: true, editLetterId: id });
    }
    handlerDelete({ target }) {
        const id = target.closest("tr").dataset.id;
        request.deleteLetter(id).then(({ data }) => {
            this.setState(
                prevState => {
                    return {
                        statusResponse: true,
                        statusDataBase: data.n,
                        letters: prevState.letters.filter(letter => letter._id !== id)
                    };
                },
                () => {
                    setTimeout(() => {
                        this.setState({ statusResponse: false });
                    }, 2000);
                }
            );
        });
    }
    handleCreateLetter() {
        this.setState(({ createLetter }) => {
            return { createLetter: !createLetter, editLetterId: null };
        });
    }
}
