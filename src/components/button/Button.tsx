import React from 'react';
import style from './Button.module.scss'

type ButtonPropsType = {
    type: "button" | "submit" | "reset" | undefined
    disabled?: boolean
    onClick: () => void
    className: string
}

const Button: React.FC<ButtonPropsType> = ({
                                               children,
                                               type,
                                               disabled,
                                               onClick,
                                               className
                                           }) => {
    return (
        <button type={type}
                disabled={disabled}
                onClick={onClick}
                className={style[className]}
        >{children}</button>
    );
};

export default Button;