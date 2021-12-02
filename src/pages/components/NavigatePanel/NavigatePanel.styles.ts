import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../../styles/colors';

export const PatientsButtonsContainer = styled.div`
  display: flex;
  margin: 0 0 44px 0;
  gap: 15px;

  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    margin: 0 0 30px 0;
  }
`;

interface PatientsButtonProps {
    color: string
}

export const PatientsButton = styled(Link)<PatientsButtonProps>`
  width: 137px;
  display: inline-flex;
  font-weight: 600;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 10px;
  text-decoration: none;
  color: ${(props) => (props.color === `${colors.cornflower_blue}` ? `${colors.white}` : `${colors.cornflower_blue}`)};
  background-color: ${(props) => (props.color === `${colors.cornflower_blue}` ? `${colors.cornflower_blue}` : `${colors.white}`)};
  box-shadow: ${(props) => (props.color === `${colors.white}` && `0px 4px 32px ${colors.link_water_alfa016}`)};
`;
export const PatientsHeader = styled.div`
  margin: 0 0 18px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
`;

export const PatientsTitle = styled.h1`
  font-weight: 600;
  font-size: 24px;
  color: ${colors.dark_jungle_green};

  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    font-size: 20px;
  }
`;
export const CreateAppointmentButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 15px 16px 15px 48px;
  width: fit-content;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 15px;
  color: ${colors.white};
  cursor: pointer;
  background-color: ${colors.cornflower_blue};
  line-height: 130%;
  text-decoration: none;
  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 768px) {
    width: 20px;
    height: 20px;
    padding: 0;
    background: url("../../svgImages/filter-icon.svg") no-repeat center;
    font-size: 0;
  }
`;

export const ButtonLeftPlusIcon = styled.span`
  width: 16px;
  height: 16px;
  background: url("../../svgImages/plus-icon.svg") no-repeat center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 768px) {
    display: none;
  }
`;
