import styled from 'styled-components';
import { colors } from '../CommonStyles';

interface NotificationBodyType {
  isSuccess: boolean;
}

export const NotificationBody = styled.div<NotificationBodyType>`
  position: absolute;
  left: 32px;
  bottom: 32px;
  z-index: 100;
  background-color: ${(props) => (props.isSuccess ? `${colors.greenish_teal}` : `${colors.radical_red}`)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${colors.white};
  border-radius: 12px;
  width: 457px;
  min-height: 122px;
  padding: 0px 16px 0px 34px;
  box-sizing: border-box;
`;

export const NotificationTitle = styled.div`
  display: flex;
  line-height: 110%;
  margin: 0 0 8px 0;
`;

export const NotificationTitleText = styled.h2`
  font-weight: 600;
  font-size: 17px;
  margin: 0 0 0 18px;
`;

export const NotificationText = styled.div`
  font-weight: 500;
  font-size: 13px;
  line-height: 130%;
  padding: 0 24px 0 40px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CloseButton = styled.div`
  background-color: ${colors.transparent};
  border: none;
  margin: 0 0 0 auto;
  cursor: pointer;
`;
