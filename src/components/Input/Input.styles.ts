import styled from 'styled-components';
import { InputTextPropsType } from './Input.types';
import colors from '../../styles/colors';

const StyledInput = styled.input<InputTextPropsType>`
  background: #ffffff;
  border: 1px solid ${colors.link_water};
  box-sizing: border-box;
  box-shadow: 0px 4px 32px ${colors.link_water_alfa016};
  border-radius: 8px;
  padding: 16px 24px;
  font-size: 17px;
  line-height: 24px;
  outline: none;

  &::placeholder {
    color: ${colors.rock_blue};
  }

  &:focus {
    box-shadow: 0px 4px 32px ${colors.link_water_alfa024};
    border: 1px solid ${colors.cornflower_blue};
  }
`;

export default StyledInput;
