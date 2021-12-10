/* eslint-disable no-nested-ternary */
import styled, { css } from 'styled-components';
import { ButtonProps } from './Button.types';
import { colors } from '../CommonStyles/theme';

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  width: fit-content;
  font-weight: 600;
  border-radius: 8px;
  border: ${(props) => (props.isBorder ? `1px solid ${colors.link_water['1']}` : 'none')};
  cursor: pointer;
  text-transform: capitalize;
  ${(props) => props.size === 'large' && css`
    font-size: 17px;
    line-height: 24px;
  `}
  ${(props) => props.variant === 'primary' && css`
    background-color: ${colors.cornflower_blue};
    color: #ffffff;

    &:enabled:hover {
      background-color: ${colors.warm_blue};
      transition: background-color 0.2s ease-out;
    }
  `}
  ${(props) => props.size === 'small' && css`
    font-size: 15px;
    line-height: 20px;
  `}
  ${(props) => props.variant === 'secondary' && css`
    background-color: ${colors.white};
    color: ${colors.rock_blue};

  `}
  ${(props) => (props.icon === 'default'
    ? css`
            padding: 16px 48px;
          `
    : props.icon === 'left'
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
    color: #ffffff;
    background-color: ${colors.link_water['1']};
  `}
`;

export default StyledButton;
