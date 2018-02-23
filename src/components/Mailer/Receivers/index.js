import React, { Component } from "react";
import "./style.css";
import InputCheckbox from "../../inputCheckbox";
import TableReceiverRow from "../../Receivers/TableReceiversRow";

export default class Receivers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checkedAll: false
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            checkedAll: nextProps.receivers.length === nextProps.letterReceivers.length
        });
    }

    render() {
        const { receivers, onChange, letterReceivers, checkedAll } = this.props;
        return (
            <table className="table">
                <thead className="table__thead">
                    <tr>
                        <th>
                            <InputCheckbox onChange={checkedAll} checked={this.state.checkedAll} />
                        </th>
                        <th>Name</th>
                        <th>e-mail</th>
                        <th>Phone</th>
                    </tr>
                </thead>

                <tbody>
                    {receivers.map(({ name, email, phone, _id }) => {
                        return (
                            <TableReceiverRow
                                key={_id}
                                checkbox={true}
                                name={name}
                                email={email}
                                phone={phone}
                                id={_id}
                                onChange={onChange}
                                valueCheckbox={email}
                                checked={letterReceivers.some(receiver => receiver === email)}
                            />
                        );
                    })}
                </tbody>
            </table>
        );
    }
}
