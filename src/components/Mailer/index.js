import React, { Component } from "react";
import TableLetter from "./TableLetter";
import "./style.css";
import requestLetter from "../../requests";
import Button from "../button";
import CreateLetter from "./CreateLetter";
import Tooltip from "../tooltip";
import Receivers from "./Receivers";
import { ProgressBar } from "../progressBar";
import utils from "../../utils";

export default class Mailer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            letters: [],
            createLetter: false,
            editLetterId: null,
            statusResponse: false,
            statusDataBase: false,
            xhrStatus: false
        };

        this.handlerSend = this.handlerSend.bind(this);
        this.handlerEdit = this.handlerEdit.bind(this);
        this.handlerDelete = this.handlerDelete.bind(this);
        this.handleCreateLetter = this.handleCreateLetter.bind(this);
        this.hideTooltip = utils.hideTooltip.bind(this);
    }
    componentDidMount() {
        requestLetter
            .getAllLetters()
            .then(({ data }) => {
                this.setState({ letters: data, xhrStatus: true });
            })
            .catch(e => (e.message ? false : console.log(e)));
    }
    componentWillUnmount() {
        requestLetter.cancel(true);
    }
    render() {
        const { activeLink, onClick } = this.props;
        const {
            letters,
            createLetter,
            editLetterId,
            statusDataBase,
            statusResponse,
            xhrStatus
        } = this.state;
        return (
            <div className="mailer-wrap">
                <Tooltip
                    className={statusResponse ? "tooltip tooltip_visible" : "tooltip tooltip_hide"}
                >
                    {statusDataBase ? "Delete Success" : "Error Data Base"}
                </Tooltip>
                {!createLetter ? (
                    <Button
                        style={{ backgroundColor: "hsl(206.1, 79.3%, 52.7%)" }}
                        onClick={this.handleCreateLetter}
                    >
                        New Letter
                    </Button>
                ) : (
                    <Button
                        style={{ backgroundColor: "hsl(206.1, 79.3%, 52.7%)" }}
                        onClick={this.handleCreateLetter}
                    >
                        Back to List
                    </Button>
                )}

                {!this.state.createLetter ? (
                    xhrStatus ? (
                        <TableLetter
                            onSend={this.handlerSend}
                            onEdit={this.handlerEdit}
                            onDelete={this.handlerDelete}
                            letters={this.state.letters}
                        />
                    ) : (
                        <ProgressBar />
                    )
                ) : (
                    <CreateLetter id={this.state.editLetterId} />
                )}
            </div>
        );
    }
    handlerSend({ target }) {
        const id = target.closest("tr").dataset.id;
        requestLetter.sendLetter(id);
    }
    handlerEdit({ target }) {
        const id = target.closest("tr").dataset.id;
        this.setState({ createLetter: true, editLetterId: id });
    }
    handlerDelete({ target }) {
        const id = target.closest("tr").dataset.id;
        requestLetter.deleteLetter(id).then(({ data }) => {
            this.setState(prevState => {
                return {
                    statusResponse: true,
                    statusDataBase: data.n,
                    letters: prevState.letters.filter(letter => letter._id !== id)
                };
            }, this.hideTooltip({ statusResponse: false }, 3000));
        });
    }
    handleCreateLetter() {
        this.setState(({ createLetter }) => {
            return { createLetter: !createLetter, editLetterId: null };
        });
    }
}
