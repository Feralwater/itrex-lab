import styled from 'styled-components';
import { colors } from '../CommonStyles';

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
  box-shadow: 0px 4px 32px ${colors.link_water['032']};
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
    background: ${colors.lavender_pinocchio['030']};
    border-radius: 8px;
  }

  & ::-webkit-scrollbar-thumb {
    background: ${colors.platinum['050']};
    border-radius: 8px;
  }

  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
`;
