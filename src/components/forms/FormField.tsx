import React from 'react';
import {Field} from "formik";

type FieldPropsType = {
    name: string
    placeholder: string
    onChange:  any
    onBlur: any
    value: string
}

const FormField: React.VFC<FieldPropsType> = ({
                                                  name,
                                                  placeholder,
                                                  onChange,
                                                  onBlur,
                                                  value,
                                              }) => {
    return (
        <Field
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
        />
    );
};

export default FormField;