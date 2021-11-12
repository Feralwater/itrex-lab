import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import {StyledButton} from './Button.styles';

export type ButtonPropsType = {
    size: "large" | "small"
    variant: "primary" | "secondary"
    icon: "default" | "left" | "right"
    disabled?: boolean
    type: "button" | "submit" | "reset" | undefined
    onClick?: (e?: any) => void
}

const Button: React.FC<ButtonPropsType> = (props) => {

    return (
        <StyledButton {...props}
        />
    );
};

export default Button;