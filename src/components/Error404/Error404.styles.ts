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
  background: url("../../img/404.png") no-repeat center center/contain;
  width: 800px;
  height: 300px;
  margin: 0 0 90px 0;
`;

export const ErrorMessage = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 110%;
  color: ${colors.rock_blue};
`;
