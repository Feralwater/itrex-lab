import styled from 'styled-components';
import { Form } from 'formik';
import { Link } from 'react-router-dom';
import { colors, H4 } from '../../components/CommonStyles';

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
  overflow-y: auto;
  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    margin: 0;
    overflow-y: visible;
    & ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const AppointmentStepsContainer = styled.div`
  display: flex;
  gap: 0 95px;
  @media (max-width: 1600px) {
    gap: 0 50px;
  }
  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 1480px) {
    flex-direction: column;
    gap: 50px 0;
    padding: 0 48px;
  }
  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    padding: 0;
  }
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
  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    max-width: 100%;
  }
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
  padding: 40px 10px;
`;

export const NoUnderlineLink = styled(Link)`
  font-size: 17px;
  line-height: 140%;
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
  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    margin: 0 0 46px 0;
  }
`;

export const DisabledLink = styled(Link)`
  font-size: 17px;
  line-height: 240%;
  text-decoration-line: none;
  color: ${colors.rock_blue};
  width: fit-content;
  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    font-size: 15px;
    line-height: 140%;
  }
`;

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
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const StepDescription = styled(H4)`
  color: ${colors.rock_blue};
  margin: 0 0 0 16px;
`;
