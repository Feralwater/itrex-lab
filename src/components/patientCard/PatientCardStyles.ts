import styled from 'styled-components';

export const UserCard = styled.div`
  display: flex;
  height: 264px;
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
  border-radius: 12px;
  overflow: hidden;
  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    height: 305px;
  }
`;

export const UserCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(220, 224, 236, 0.5);
  padding: 24px 31px;
  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    padding: 24px;
    margin: 0;
  }
`;

export const SettingsButton = styled.button`
  width: 24px;
  height: 24px;
  background: url("../../svgImages/settings-dots.svg") no-repeat center/contain;
  border: none;
  outline: none;
`

export const UserCardBody = styled.div`
  padding: 24px 32px 40px 34px;
  overflow: hidden;

  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    padding: 16px 24px 24px 18px;
  }
`;

export const UserCardBodyTime = styled.div`
  display: flex;
  gap: 18px;
  line-height: 1.5;
`;

export const UserCardBodyTimeText = styled.div`
  font-weight: 600;
  font-size: 15px;
  color: #202225;
  margin: 0 0 16px 0;
`;

interface UserCardBodyDescriptionProps {
    isDescription: boolean
}

export const UserCardBodyDescription = styled(UserCardBodyTime)<UserCardBodyDescriptionProps>`
  display: ${(props) => (props.isDescription ? "flex" : "none")}
`;

export const UserCardBodyDescriptionText = styled.div`
  font-weight: 400;
  font-size: 15px;
  color: #202225;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

interface UserCardBodyAppointmentConfirmProps {
    color: string
}

export const UserCardBodyAppointmentConfirm = styled.div<UserCardBodyAppointmentConfirmProps>`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  margin: 0 8px 0 0;
  flex-shrink: 0;
  background-color: ${(props) => props.color};
`;

export const AppointmentStatus = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 13px;
  color: #A1ABC9;
  margin: 0;
`;

export const UserData = styled.div`
  display: flex;
  align-items: center;
`;

export const UserInformation = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 0 0 16px;
  line-height: 1.5;
`;

export const UserCardImageContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 100%;
`;

export const UserCardName = styled.div`
  font-weight: 600;
  font-size: 17px;
  align-items: center;
  color: #202225;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 130px;
`;
