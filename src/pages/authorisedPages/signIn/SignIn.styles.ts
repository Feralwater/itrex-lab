import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../../styles/colors';

export const SignInUpMessage = styled.div`
  font-weight: 400;
  font-size: 15px;
  display: flex;
  align-items: center;
  color: ${colors.rock_blue};
  grid-area: footer;
  margin: 20px 0 0 0;
  align-self: end;
  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 0 0 48px 0;
    padding: 15px 0 0 0;
  }
`;

export const SignInUpLink = styled(Link)`
  margin: 0 12px;
  font-size: 15px;
  color: ${colors.cornflower_blue};
  font-weight: 600;
  text-decoration: underline;

  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    margin: 0;
  }
`;
