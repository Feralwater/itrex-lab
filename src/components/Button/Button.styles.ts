/* eslint-disable no-nested-ternary */
import styled, { css } from 'styled-components';
import { ButtonProps } from './Button.types';
import { colors } from '../CommonStyles';

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  width: fit-content;
  font-weight: 600;
  border-radius: 8px;
  border: ${(props) => (props.isBorder ? `1px solid ${colors.link_water['1']}` : 'none')};
  cursor: pointer;
  text-transform: capitalize;
  @media (max-width: 465px) {
    font-size: 12px;
  }
  ${(props) => props.size === 'large' && css`
    font-size: 1.7rem;
    line-height: 120%;
  `}
  ${(props) => props.variant === 'primary' && css`
    background-color: ${colors.cornflower_blue};
    color: ${colors.white};

    &:enabled:hover {
      background-color: ${colors.warm_blue};
      transition: background-color 0.2s ease-out;
    }
  `}
  ${(props) => props.size === 'small' && css`
    font-size: 1.5rem;
    line-height: 120%;
  `}
  ${(props) => props.variant === 'secondary' && css`
    background-color: ${colors.white};
    color: ${colors.rock_blue};
    &:enabled:hover {
      background-color: ${colors.alabaster};
      transition: background-color 0.2s ease-out;
    }
  `}
  ${(props) => (props.icon === 'default'
    ? css`
            padding: 16px 48px;
          `
    : props.icon === 'left'
      ? css`
                    padding: 16px 24px 16px 57px;
                    background-image: url("./svg/right-arrow.svg");
                    background-repeat: no-repeat;
                    background-position: 25px 50%;
                    @media (max-width: 465px) {
                      padding: 10px 14px 10px 45px;
                      background-position: 10px 50%;
                    }
                  `
      : css`
                    padding: 16px 57px 16px 24px;
                    background-image: url("./svg/right-arrow.svg");
                    background-repeat: no-repeat;
                    background-position: 80% 50%;
                  `)
}
  ${(props) => (props.iconUrl && (props.icon === 'left'
    ? css`
      background-image: url(${props.iconUrl});
                  `
    : css`
       background-image: url(${props.iconUrl});
                  `))
}
  ${(props) => props.disabled && css`
    color: ${colors.white};
    background-color: ${colors.link_water['1']};
  `}
`;

export default StyledButton;
