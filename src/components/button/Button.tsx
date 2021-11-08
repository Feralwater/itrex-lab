import React from 'react';
import styled from "styled-components";

type ButtonPropsType = {
    type: "button" | "submit" | "reset" | undefined
    disabled?: boolean
    onClick?: (e?: any) => void
    styledComponent: any
}

const Button: React.FC<ButtonPropsType> = ({
                                               children,
                                               type,
                                               disabled,
                                               onClick,
                                               styledComponent
                                           }) => {
    const StyledButton = styled(styledComponent)``;
    return (
        <StyledButton type={type}
                      disabled={disabled}
                      onClick={onClick}
        >{children}</StyledButton>
    );
};

export default Button;