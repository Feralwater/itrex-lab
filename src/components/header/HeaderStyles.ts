import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  box-sizing: border-box;
  margin: 0;
  background-color: #e4ebff;
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

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoText = styled.span`
  text-transform: uppercase;
  color: #202225;
  font-weight: 500;
  margin: 0 0 0 14px;
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
  width: 40px;
  height: 40px;
  position: relative;
`;

export const UserImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  object-fit: contain;
`;

interface NetworkStatusProps {
    isOnline: boolean
}

export const NetworkStatus = styled.span<NetworkStatusProps>`
  display: ${(props) => (props.isOnline ? "inline-block" : "none")};
  width: 8px;
  height: 8px;
  border-radius: 100%;
  border: 3px solid #e4Ebff;
  background-color: #34c197;
  position: absolute;
  top: -1px;
  right: -3px;
`;

export const UserName = styled.p`
  font-weight: 600;
  font-size: 15px;
  color: #202225;
  text-transform: capitalize;
  margin: 0 0 4px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 130px;
`;

export const UserRole = styled.p`
  font-weight: 500;
  font-size: 13px;
  color: #A1ABC9;
  text-transform: capitalize;
  margin: 0;
`;

