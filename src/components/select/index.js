import React, { Component } from "react";
import Select, { Option } from "rc-select";
import "rc-select/assets/index.css";

function SelectRC({
    placeholder,
    value,
    onChange,
    options = [],
    style = {},
    className = "",
    allowClear = false
}) {
    return (
        <Select
            value={value}
            placeholder="placeholder"
            dropdownMenuStyle={{ maxHeight: 200 }}
            style={style}
            allowClear={allowClear}
            optionLabelProp="children"
            optionFilterProp="text"
            onChange={onChange}
            firstActiveValue="2"
            backfill
            className={className}
        >
            {options.map((option, index) => {
                return (
                    <Option key={index} value={option} text={option}>
                        {option}
                    </Option>
                );
            })}
        </Select>
    );
}
export { SelectRC as Select };
