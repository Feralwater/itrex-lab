import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import {StyledButton} from './Button.styles';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export type ButtonPropsType = DefaultButtonPropsType & {}

const Button: React.FC<any> = ({
                                                ...restProps
                                            }) => {

    return (
        <StyledButton {...restProps}/>
    );
};

export default Button;