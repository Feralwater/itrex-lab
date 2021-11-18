export type Options = {
    value: string
    label: string
}

export type CustomSelectPropsType = {
    labelText: string
    id: string
    name: string
    options:{
        value: string
        label: string
    }
    placeholder: string
    [x:string]: any;
}

export type LabelType={
    label: string
}

export type InputValueType={
    inputValue: string
}
