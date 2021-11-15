import React from 'react';
import Select, {SingleValue} from 'react-select'
import {useDispatch} from "react-redux";
import Highlighter from 'react-highlight-words';
import {SelectStyles} from './Select.styles'
import {CustomSelectPropsType} from "./Select.types";

const CustomSelect: React.VFC<CustomSelectPropsType> = ({
                                                            valuesForSelect,
                                                            placeholder,
                                                            addActionCreator,
                                                            id,
                                                            label
                                                        }) => {
    const dispatch = useDispatch();

    const options: any = valuesForSelect.map((v) => ({value: v.doctorID, label: v.selectedValue}))

    function formatOptionLabel({label}: any, {inputValue}: any) {
        return (
            <Highlighter
                highlightStyle={{"fontWeight": "bold", "backgroundColor": "${colors.transparent}"}}
                searchWords={[inputValue]}
                textToHighlight={label}
            />
        );
    }

    const handleChange = (selected: SingleValue<{ value: string; label: string; }>): void => {
        dispatch(addActionCreator(selected))
    }

    return (<>
            <label htmlFor={id}>{label}</label>
            <Select options={options}
                    styles={SelectStyles}
                    placeholder={placeholder}
                    onChange={(selected: any) => handleChange(selected)}
                    formatOptionLabel={formatOptionLabel}
                    id={id}
            />
        </>
    );
};

export default CustomSelect;
