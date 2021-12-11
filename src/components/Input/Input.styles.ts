import styled, { css } from 'styled-components';
import { colors } from '../CommonStyles/theme';
import { InputProps } from './Input.types';

export const InputContainer = styled.div<InputProps>`
  position: relative;
  margin: 0 0 26px 0;

  &:before {
    content: "";
    width: 20px;
    height: 20px;
    background-size: contain;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 26px;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${(props) => (props.icon === 'default' ? 'none' : `url(${props.iconURL})`)};
    @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
    (max-device-width: 767px) {
      left: 18px;
    }
  }

  & label {
    font-weight: 500;
    font-size: 13px;
    line-height: 130%;
    color: ${colors.black};
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export const StyledInput = styled.input<InputProps>`
  background: #ffffff;
  border: ${(props) => (props.isError ? `1px solid ${colors.radical_red}` : `1px solid ${colors.link_water['1']}`)};
  box-sizing: border-box;
  box-shadow: 0px 4px 32px ${colors.link_water['016']};
  border-radius: 8px;
  outline: none;
  max-width: 100%;
  font-size: ${(props) => (props.inputSize === 'large' ? '17px' : '15px')};
  line-height: ${(props) => (props.inputSize === 'large' ? '240%' : '140%')};

  ${(props) => props.icon === 'default' && props.inputSize === 'large' && css`
    padding: 16px 24px;
  `}
  ${(props) => props.icon === 'default' && props.inputSize === 'small' && css`
    padding: 10px 18px;
  `}
  ${(props) => props.icon === 'left' && props.inputSize === 'large' && css`
    padding: 16px 24px 16px 64px;
  `}
  ${(props) => props.icon === 'left' && props.inputSize === 'small' && css`
    padding: 10px 48px;
  `}
  &::placeholder {
    color: ${colors.rock_blue};
  }

  &:focus {
    box-shadow: 0px 4px 32px ${colors.link_water['024']};
    border: 1px solid ${colors.cornflower_blue};
  }
`;

interface InputPasswordIconProps {
  isVisible: boolean;
}

export const InputPasswordIcon = styled.i<InputPasswordIconProps>`
  width: 22px;
  height: 22px;
  background-size: contain;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 18px;
  cursor: pointer;
  -webkit-tap-highlight-color: ${colors.transparent};
  background: ${(props) => (props.isVisible ? 'url("../../svgImages/eye-off-icon.svg") no-repeat' : 'url("../../svgImages/eye-icon.svg") no-repeat')};
`;

export const InputErrorMessage = styled.div`
  display: inline-block;
  font-weight: 400;
  font-size: 11px;
  letter-spacing: -0.24px;
  color: ${colors.brink_pink};
  margin: 8px 0 0 0;
  position: absolute;
  top: 90%;
  left: 0;
`;

export const SearchContainer = styled(InputContainer)`
  margin: 0;

  & input {
    border: none;
    max-width: 130px;
    background-color: ${colors.alabaster};
    padding: 10px 10px 10px 58px;
    box-shadow: none;
  }
`;
