import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, JSXElementConstructor, KeyboardEvent} from 'react'
import styled from "styled-components";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperInputTextPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    styledComponent: JSXElementConstructor<any>
}

const SuperInputText: React.VFC<SuperInputTextPropsType> = (
    {
        type,
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        styledComponent,
        // spanClassName,
        ...restProps
    }
) => {
    const StyledInput = styled(styledComponent)``;

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);
        onEnter && e.key === 'Enter' && onEnter()
    }

    return (
        <>
            <StyledInput
                type={'text'}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                {...restProps}
            />
            {error && <span>{error}</span>}
        </>
    )
}

export default SuperInputText
