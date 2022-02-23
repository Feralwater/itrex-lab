import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, H6, SubTitle } from '../CommonStyles';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  box-sizing: border-box;
  margin: 0;
  background-color: ${colors.blue_chalk};
`;

export const HeaderContainer = styled.div`
  max-width: 1792px;
  margin: 0 auto;
  height: 100%;
  padding: 0 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    padding: 0 24px;
  }
`;

export const HeaderLogo = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;

export const LogoText = styled.span`
  text-transform: uppercase;
  color: ${colors.dark_jungle_green};
  font-weight: 500;
  margin: 0 0 0 14px;
  user-select: none;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    display: none;
  }
`;

export const UserImageContainer = styled.div`
  margin: 0 0 0 16px;
  width: 50px;
  height: 50px;
  position: relative;
  background-color: ${colors.white};
  border-radius: 100%;
`;

export const UserImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  object-fit: cover;
`;

export const NetworkStatus = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  border: 3px solid ${colors.blue_chalk};
  background-color: ${colors.greenish_teal};
  position: absolute;
  top: -1px;
  right: -3px;
`;

export const UserName = styled(H6)`
  text-transform: capitalize;
  margin: 0 0 4px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 150px;
`;

export const UserRole = styled(SubTitle)`
  color: ${colors.rock_blue};
  text-transform: capitalize;
  margin: 0;
`;
