import styled from 'styled-components';
import { colors } from '../CommonStyles/theme';

export const Step = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const StepNumber = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid ${colors.rock_blue};
  border-radius: 100%;
  font-size: 17px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.rock_blue};
  flex-shrink: 0;
`;

export const StepDescription = styled.div`
  font-size: 17px;
  line-height: 24px;
  color: ${colors.rock_blue};
  margin: 0 0 0 16px;
`;
