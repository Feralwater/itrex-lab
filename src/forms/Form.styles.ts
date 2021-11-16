import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import colors from '../styles/colors';

export const InputContainer = styled.div`
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
    @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
    (max-device-width: 767px) {
      left: 18px;
    }
  }
`;

export const InputNameContainer = styled(InputContainer)`
  &:before {
    background-image: url("../../assets/svgImages/user.svg");
  }
`;

export const InputEmailContainer = styled(InputContainer)`
  &:before {
    background-image: url("../../assets/svgImages/email.svg");
  }
`;

export const InputPasswordContainer = styled(InputContainer)`
  &:before {
    background-image: url("../../assets/svgImages/lock.svg");
  }
`;

export const InputConfirmPasswordContainer = styled(InputContainer)`
  &:before {
    background-image: url("../../assets/svgImages/check-mark.svg");
  }
`;

interface InputPasswordIconProps {
    isVisible: boolean
}

export const InputPasswordIcon = styled.i<InputPasswordIconProps>`
  content: "";
  width: 22px;
  height: 22px;
  background-size: contain;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 26px;
  cursor: pointer;
  -webkit-tap-highlight-color: ${colors.transparent};
  background: ${(props) => (props.isVisible ? 'url("../../svgImages/eye-off-icon.svg") no-repeat' : 'url("../../svgImages/eye-icon.svg") no-repeat')};
`;

export const ButtonWrapper = styled.div`
  position: relative;
  width: fit-content;
  margin: 0 33px 0 0;
`;

export const ButtonRightArrow = styled.span`
  width: 8px;
  height: 14px;
  background: url("../../assets/svgImages/right-arrow.svg") no-repeat center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 30px;
  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    right: 23px;
  }
`;

export const CustomForm = styled(Form)`
  width: 368px;
  display: flex;
  flex-direction: column;
  grid-area: form;
  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    width: 100%;
  }
`;

export const RestorePasswordContainer = styled(CustomForm).attrs({
  as: 'div',
})``;

export const FormTitle = styled.div`
  font-family: inherit;
  font-weight: 600;
  font-size: 24px;
  color: ${colors.dark_jungle_green};
  margin: 0 0 4vh 0;
  text-decoration: none;
  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    font-size: 20px;
    margin: 0 0 27px 0;
  }
`;

export const FormTitleLeftArrow = styled.span`
  width: 8px;
  height: 14px;
  background: url("../../assets/svgImages/left-arrow.svg") no-repeat center;
  display: inline-block;
  margin: 0 24px 2px 0;
`;

export const RestoreMessage = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 130%;
  color: ${colors.rock_blue};
  margin: 0 0 40px 0;
`;

interface CustomFieldProps {
    isError: boolean
}

export const CustomField = styled(Field)<CustomFieldProps>`
  border: ${(props) => (props.isError ? `1px solid ${colors.radical_red}` : `1px solid ${colors.link_water}`)};
  box-sizing: border-box;
  box-shadow: 0px 4px 32px ${colors.link_water_alfa016};
  border-radius: 8px;
  width: 100%;
  padding: 16px 64px;
  font-weight: 400;
  font-size: 17px;
  outline: none;
  background-color: ${colors.alabaster};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  line-height: 1.25;
  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    padding: 10px 48px;
    font-size: 15px;
  }

  &:focus {
    border: 1px solid ${colors.cornflower_blue};
    box-shadow: 0px 4px 32px ${colors.link_water_alfa024};
    background: ${colors.white};
  }

  &::placeholder {
    color: ${colors.rock_blue};
  }
`;

export const CustomErrorMessage = styled(ErrorMessage)`
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

export const CustomLink = styled(Link)`
  font-weight: 500;
  font-size: 15px;
  text-decoration-line: underline;
  color: ${colors.cornflower_blue};
  margin: 32px 0px;
  width: fit-content;
`;
