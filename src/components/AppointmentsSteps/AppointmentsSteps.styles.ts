import styled from 'styled-components';
import { colors, H4 } from '../CommonStyles';

export const Step = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const StepNumber = styled(H4)`
  width: 32px;
  height: 32px;
  border: 1px solid ${colors.rock_blue};
  border-radius: 100%;
  justify-content: center;
  color: ${colors.rock_blue};
  flex-shrink: 0;
`;

export const StepDescription = styled(H4)`
  color: ${colors.rock_blue};
  margin: 0 0 0 16px;
`;
