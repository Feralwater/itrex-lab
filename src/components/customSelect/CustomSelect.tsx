import React from 'react';
import Select, {SingleValue} from 'react-select'
import {useDispatch} from "react-redux";
import {addOccupationAC} from "../../redux/reducers/appointmentReducer";
import Highlighter from 'react-highlight-words';

type CustomSelectType = {
    selectStyles: any
}

const CustomSelect: React.VFC<CustomSelectType> = ({selectStyles}) => {
    const dispatch = useDispatch();

    const options = [
        {value: 'cardiologist', label: 'Cardiologist'},
        {value: 'dermatologist', label: 'Dermatologist'},
        {value: 'therapist', label: 'Therapist'},
        {value: 'cardiologist', label: 'Cardiologist'},
        {value: 'dermatologist', label: 'Dermatologist'},
        {value: 'therapist', label: 'Therapist'},
        {value: 'cardiologist', label: 'Cardiologist'},
        {value: 'dermatologist', label: 'Dermatologist'},
        {value: 'therapist', label: 'Therapist'},
        {value: 'cardiologist', label: 'Cardiologist'},
        {value: 'dermatologist', label: 'Dermatologist'},
        {value: 'therapist', label: 'Therapist'},
        {value: 'cardiologist', label: 'Cardiologist'},
        {value: 'dermatologist', label: 'Dermatologist'},
        {value: 'therapist', label: 'Therapist'},
        {value: 'cardiologist', label: 'Cardiologist'},
        {value: 'dermatologist', label: 'Dermatologist'},
        {value: 'therapist', label: 'Therapist'},
        {value: 'cardiologist', label: 'Cardiologist'},
        {value: 'dermatologist', label: 'Dermatologist'},
        {value: 'therapist', label: 'Therapist'},
        {value: 'cardiologist', label: 'Cardiologist'},
        {value: 'dermatologist', label: 'Dermatologist'},
        {value: 'therapist', label: 'Therapist'},
        {value: 'cardiologist', label: 'Cardiologist'},
        {value: 'dermatologist', label: 'Dermatologist'},
        {value: 'therapist', label: 'Therapist'},
    ]


    function formatOptionLabel({label}: any, {inputValue}: any) {
        return (
            <Highlighter
                highlightStyle={{"fontWeight": "bold", "backgroundColor": "transparent"}}
                searchWords={[inputValue]}
                textToHighlight={label}
            />
        );
    }

    const handleChange = (selected: SingleValue<{ value: string; label: string; }>) => {
        dispatch(addOccupationAC(selected))
    }

    return (
        <Select options={options}
                styles={selectStyles}
                placeholder={'Choose an occupation'}
                onChange={(selected) => handleChange(selected)}
                formatOptionLabel={formatOptionLabel}
        />
    );
};

export default CustomSelect;
