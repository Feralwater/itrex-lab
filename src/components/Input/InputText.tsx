import React, {ChangeEvent} from 'react'
import {StyledInput} from './Input.styles'
import {InputTextPropsType} from "./Input.types";
import {useDispatch} from "react-redux";

const InputText: React.VFC<InputTextPropsType> = (
    {
        onEnter,
        error,
        placeholder,
        addActionCreator,
        ...restProps
    }
) => {
    const dispatch = useDispatch();

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addActionCreator(e.currentTarget.value))
    }

    return (
        <>
            <StyledInput
                addActionCreator={addActionCreator}
                type={'text'}
                placeholder={placeholder}
                onChange={onChangeCallback}
                {...restProps}
            />
            {error && <span>{error}</span>}
        </>
    )
}

export default InputText
