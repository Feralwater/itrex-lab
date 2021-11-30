import styled from 'styled-components';
import colors from '../../styles/colors';

interface InputProps {
  icon: 'default' | 'left';
  iconURL?: string;
  isError?: boolean
}

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
`;

export const StyledInput = styled.input<InputProps>`
  background: #ffffff;
  border:${(props) => (props.isError ? `1px solid ${colors.radical_red}` : `1px solid ${colors.link_water}`)};
  box-sizing: border-box;
  box-shadow: 0px 4px 32px ${colors.link_water_alfa016};
  border-radius: 8px;
  padding: ${(props) => (props.icon === 'default' ? '16px 24px' : '16px 24px 16px 64px')};
  font-size: 17px;
  line-height: 24px;
  outline: none;
  max-width: 100%;

  &::placeholder {
    color: ${colors.rock_blue};
  }

  &:focus {
    box-shadow: 0px 4px 32px ${colors.link_water_alfa024};
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
