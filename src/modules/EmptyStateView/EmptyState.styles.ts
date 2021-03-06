import styled from 'styled-components';
import { colors, Title } from 'components/CommonStyles';

export const MedicalHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 461px;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 40px;
  margin: auto;
`;
export const MedicalHistoryText = styled(Title)`
  color: ${colors.rock_blue};
  display: flex;
  flex-direction: column;
`;
