import styled from 'styled-components';
import {InputTextPropsType} from "./Input.types";

export const StyledInput = styled.input<InputTextPropsType>`
  background: #ffffff;
  border: 1px solid #dce0ec;
  box-sizing: border-box;
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.16);
  border-radius: 8px;
  padding: 16px 24px;
  font-size: 17px;
  line-height: 24px;
  outline: none;

  &::placeholder {
    color: #a1abc9;
  }

  &:focus {
    box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
    border: 1px solid #7297ff;
  }
`