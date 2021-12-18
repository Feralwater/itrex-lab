import styled from 'styled-components';
import { colors, H1 } from '../../components/CommonStyles';

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

export const ErrorMessage = styled(H1)`
  color: ${colors.rock_blue};
`;
