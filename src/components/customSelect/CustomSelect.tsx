import React, {useState} from 'react';
import Select from 'react-select'
import {getOccupations} from "../../actions/occupations";

type CustomSelectType = {
    selectStyles: any
}

const CustomSelect: React.VFC<CustomSelectType> = ({selectStyles}) => {
    const [] = useState()

    const options = [
        {value: 'cardiologist', label: 'Cardiologist'},
        {value: 'dermatologist', label: 'Dermatologist'},
        {value: 'therapist', label: 'Therapist'}
    ]
    const getOptions = () => {
        const data = getOccupations();
        const options = data.map((o) => ({
            "value": o.id,
            "label": o.occupation
        }))
    }
    return (
        <Select options={options}
                styles={selectStyles}
                placeholder={'Choose an occupation'}
        />
    );
};

export default CustomSelect;