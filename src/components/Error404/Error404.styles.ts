import styled from 'styled-components';
import { colors } from '../CommonStyles/theme';

export const Error = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const ErrorNumber = styled.div`
  background: url("../../img/bg.png") no-repeat center center;
  background-size: 100%;
  font-size: 300px;
  font-weight: 900;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  text-align: center;
  text-transform: uppercase;
`;

export const ErrorMessage = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 110%;
  color: ${colors.rock_blue};
`;
