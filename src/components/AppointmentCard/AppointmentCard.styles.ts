import styled from 'styled-components';
import { colors, H4, SubTitle, Title } from '../CommonStyles';

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.white};
  min-height: 217px;
  box-shadow: 0px 4px 32px ${colors.link_water['024']};
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    height: 305px;
  }
`;

export const UserCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.platinum['050']};
  padding: 24px 31px;
  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    padding: 24px;
    margin: 0;
  }
`;

export const SettingsButton = styled.div`
  width: 40px;
  height: 40px;
  background: url("../../svg/settings-dots.svg") no-repeat center/24px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 6px;

  &:hover {
    background: ${colors.alabaster} url("../../svg/settings-dots-blue.svg") no-repeat center/24px;
  }
`;

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
  line-height: 150%;
`;

export const UserCardBodyTimeText = styled.time`
  font-weight: 600;
  font-size: 15px;
  color: ${colors.dark_jungle_green};
  margin: 0 0 16px 0;
`;

interface UserCardBodyDescriptionProps {
  isDescription: boolean | undefined;
}

export const UserCardBodyDescription = styled(UserCardBodyTime)<UserCardBodyDescriptionProps>`
  display: ${(props) => (props.isDescription ? 'flex' : 'none')};
`;

export const UserCardBodyDescriptionText = styled(Title)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

interface UserCardBodyAppointmentConfirmProps {
  color: string;
}

export const UserCardBodyAppointmentConfirm = styled.div<UserCardBodyAppointmentConfirmProps>`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  margin: 0 8px 0 0;
  flex-shrink: 0;
  background-color: ${(props) => props.color};
`;

export const AppointmentStatus = styled(SubTitle)`
  color: ${colors.rock_blue};
  margin: 0;
`;

export const DoctorSpecializationName = styled(SubTitle)`
  color: ${colors.rock_blue};
  text-transform: capitalize;
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
  line-height: 150%;
`;

export const UserCardImageContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 100%;
`;

export const UserCardName = styled(H4)`
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 200px;
`;
