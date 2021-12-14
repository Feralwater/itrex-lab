import styled from 'styled-components';
import { Form } from 'formik';
import { Link } from 'react-router-dom';
import { colors } from '../CommonStyles';

export const AppointmentStepsNumbers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 32px 40px 0;
`;

export const AppointmentFormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 38px 33px 0 0;
`;

export const AppointmentStepsContainer = styled.div`
  display: flex;
  gap: 0 95px;
`;

export const ChooseDayStep = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  gap: 40px;
`;

export const SelectTimeslotStep = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 464px;
  gap: 40px;
`;

export const SelectDoctorStep = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
`;

export const MakeAppointmentButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const NoUnderlineLink = styled(Link)`
  font-size: 17px;
  line-height: 240%;
  text-decoration-line: none;
  color: ${colors.cornflower_blue};
  width: fit-content;
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 0 0 67px 0;
  width: fit-content;
`;

export const DisabledLink = styled(Link)`
  font-size: 17px;
  line-height: 240%;
  text-decoration-line: none;
  color: ${colors.rock_blue};
  width: fit-content;
`;
