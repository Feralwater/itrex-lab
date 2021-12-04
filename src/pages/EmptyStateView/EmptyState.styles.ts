import styled from 'styled-components';
import colors from '../../styles/colors';

export const MedicalHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 461px;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 40px;
`;
export const MedicalHistoryText = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  color: ${colors.rock_blue};
  display: flex;
  flex-direction: column;
`;
