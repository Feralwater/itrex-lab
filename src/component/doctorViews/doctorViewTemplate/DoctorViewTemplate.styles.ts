import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Body = styled.div`
  padding: 80px 0 0 0;
`;

export const BodyDoctorView = styled.main`
  background-color: ${colors.blue_chalk};
  margin: 0;
  padding: 0 64px 48px;
  height: calc(100vh - 128px);

  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    padding: 0;
    height: calc(100vh - 80px);
  }
`;

export const Patients = styled.div`
  max-width: 1792px;
  height: 100%;
  padding: 40px 16px 0 48px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: ${colors.alabaster};
  box-shadow: 0px 4px 32px ${colors.link_water_alfa032};
  border-radius: 16px;
  box-sizing: border-box;
  overflow: hidden;

  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    padding: 33px 24px 0;
    height: 100%;
    overflow: auto;
    border-radius: 16px 16px 0 0;
  }

  & ::-webkit-scrollbar {
    width: 12px;
  }

  & ::-webkit-scrollbar-track {
    background: ${colors.lavender_pinocchio_alfa030};
    border-radius: 8px;
  }

  & ::-webkit-scrollbar-thumb {
    background: ${colors.platinum_alfa050};
    border-radius: 8px;
  }

  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
`;

interface PatientsContainerProps {
    patientsLength: number
}

export const PatientsContainer = styled.div<PatientsContainerProps>`
  display: ${(props) => (props.patientsLength > 0 ? 'grid' : 'flex')};
  height: ${(props) => (props?.patientsLength === 0 && '68vh')};
  justify-content: ${(props) => (props?.patientsLength === 0 && 'center')};
  align-items: ${(props) => (props?.patientsLength === 0 && 'center')};
  grid-template-columns: repeat(auto-fit, minmax(400px, 400px));
  grid-template-rows: repeat(auto-fit, 264px);
  gap: 25px 24px;
  overflow: auto;
  padding: 0 32px 0 0;
  @media only screen and (max-device-width: 1050px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    grid-template-columns: repeat(auto-fit, minmax(272px, 1fr));
    grid-template-rows: repeat(auto-fit, 305px);
    gap: 15px;
    padding: 0;
  }
`;
