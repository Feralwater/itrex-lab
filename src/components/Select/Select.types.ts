import {SingleValue} from "react-select";

export type Options = {
    value?: string
    label: string
}

export type CustomSelectPropsType = {
    valuesForSelect: { selectedValue: string, doctorID: string }[]
    placeholder: string
    addActionCreator: (selected: SingleValue<{ value: string; label: string;}>) => {type: string, label: string}
}