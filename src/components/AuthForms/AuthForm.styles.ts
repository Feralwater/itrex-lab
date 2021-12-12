import styled from 'styled-components';
import { Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { colors } from '../CommonStyles';

export const ButtonWrapper = styled.div`
  position: relative;
  width: fit-content;
  margin: 0 33px 0 0;
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
  background: url("../../svg/left-arrow.svg") no-repeat center;
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
    error: boolean
}

export const CustomField = styled(Field)<CustomFieldProps>`
  border: ${(props) => (props.error ? `1px solid ${colors.radical_red}` : `1px solid ${colors.link_water['1']}`)};
  box-sizing: border-box;
  box-shadow: 0px 4px 32px ${colors.link_water['016']};
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
  line-height: 125%;
  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    padding: 10px 48px;
    font-size: 15px;
  }

  &:focus {
    border: 1px solid ${colors.cornflower_blue};
    box-shadow: 0px 4px 32px ${colors.link_water['024']};
    background: ${colors.white};
  }

  &::placeholder {
    color: ${colors.rock_blue};
  }
`;

export const CustomLink = styled(Link)`
  font-weight: 500;
  font-size: 15px;
  text-decoration-line: underline;
  color: ${colors.cornflower_blue};
  margin: 32px 0px;
  width: fit-content;
`;
