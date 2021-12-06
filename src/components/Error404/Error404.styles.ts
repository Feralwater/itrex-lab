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
  color: ${colors.radical_red};
  font-size: 130px;
  font-weight: bold;
`;

export const ErrorMessage = styled.div`
  text-transform: uppercase;
  font-size: 18px;
`;
