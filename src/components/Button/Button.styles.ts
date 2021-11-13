import styled, {css} from "styled-components";
import {ButtonPropsType} from "./Button.types";


export const StyledButton = styled.button<ButtonPropsType>`
  display: inline-flex;
  width: fit-content;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  text-transform: capitalize;
  ${props => props.size === "large" && css`
    font-size: 17px;
  `}
  ${props => props.variant === "primary" && css`
    background-color: #7297ff;
    color: #ffffff;

    &:hover {
      background-color: #476cd3;
      transition: background-color 0.2s ease-out;
    }
  `}
  ${props => props.size === "small" && css`
    font-size: 15px;

  `}
  ${props => props.variant === "secondary" && css`
    background-color: #dce0ec;
    color: #a1abc9;

  `}
  ${props => props.icon === "default"
          ? css`
            padding: 12px 40px;
          `
          : props.icon === "left"
                  ? css`
                    padding: 16px 24px 16px 57px;
                    background-image: url("./svgImages/right-arrow.svg");
                    background-repeat: no-repeat;
                    background-position: 20% 50%;
                  `
                  : css`
                    padding: 16px 57px 16px 24px;
                    background-image: url("./svgImages/right-arrow.svg");
                    background-repeat: no-repeat;
                    background-position: 80% 50%;
                  `
  }
  ${props => props.disabled && css`
    color: #ffffff;
    background-color: #dce0ec;
  `}
`
