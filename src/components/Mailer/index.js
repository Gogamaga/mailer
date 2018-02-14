import React, { Component } from "react";
import TableLetter from "./TableLetter";
import "./style.css";
import request from "../../requests";
import Button from "../button";
import CreateLetter from "./CreateLetter";

export default class Mailer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            letters: [],
            createLetter: false,
            editLetterId: null
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
        const { letters, createLetter, editLetterId } = this.state;
        return (
            <div className="mailer-wrap">
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
        const id = +target.closest("tr").dataset.id;
        this.setState(prevState => {
            return { letters: prevState.letters.filter(letter => letter.id !== id) };
        });
    }
    handleCreateLetter() {
        this.setState(({ createLetter }) => {
            return { createLetter: !createLetter, editLetterId: null };
        });
    }
}
