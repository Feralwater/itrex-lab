import styled, { css } from 'styled-components';
import { colors } from '../CommonStyles';
import { InputProps } from './Input.types';

export interface InputContainerProps {
  icon: 'default' | 'left';
  iconURL?: string;
}

export const InputContainer = styled.div<InputContainerProps>`
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
`;

export const StyledInput = styled.input<InputProps>`
  background: ${colors.white};
  border: ${(props) => (props.isError ? `1px solid ${colors.radical_red}` : `1px solid ${colors.link_water['1']}`)};
  box-sizing: border-box;
  box-shadow: 0px 4px 32px ${colors.link_water['016']};
  border-radius: 8px;
  outline: none;
  width: 100%;
  font-size: ${(props) => (props.inputSize === 'large' ? '1.7rem' : '1.5rem')};
  line-height: ${(props) => (props.inputSize === 'large' ? '140%' : '90%')};

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
`;

export const InputPasswordIconNotVisible = styled(InputPasswordIcon)`
  background: url("../../svg/eye-off-icon.svg") no-repeat;
  visibility: ${(props) => (props.isVisible ? 'hidden' : 'visible')};
`;

export const InputPasswordIconVisible = styled(InputPasswordIcon)`
  background: url("../../svg/eye-icon.svg") no-repeat;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
`;

export const InputErrorMessage = styled.div`
  display: inline-block;
  font-weight: 400;
  font-size: 1.1rem;
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

export const Label = styled.label`
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 130%;
  color: ${colors.black['1']};

  & span {
    display: inline-block;
    margin: 0 0 10px 0;
  }
`;
