import styled from 'styled-components';
import { colors } from '../../components';

export const TitlePanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 40px;
`;

export const InfoContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const ImageContainer = styled.div`
  width: 136px;
  height: 136px;
  background: ${colors.cloud};
  border-radius: 16px;

  & img {
    width: 100%;
    height: 100%;
  }
`;
