import styled from 'styled-components';
import { colors } from 'components/CommonStyles';

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
  @media (max-width: 465px) {
    gap: 20px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const EditButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  @media (max-width: 465px) {
    gap: 12px;
  }
`;

export const EditImage = styled.input`
  opacity: 0;
`;

export interface EditImageContainerProps {
  profilePhoto: string;
}

export const EditImageContainer = styled.div<EditImageContainerProps>`
  width: 136px;
  height: 136px;
  background: ${(props) => (props.profilePhoto && `linear-gradient(0deg, ${colors.black['040']}, ${colors.black['040']}), url(${props.profilePhoto}) no-repeat center center/cover`)};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:before {
    content: '';
    background: url("/svg/camera.svg");
    width: 27px;
    height: 23px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ImageContainer = styled.div`
  width: 136px;
  height: 136px;
  background: ${colors.cloud};
  border-radius: 16px;

  & img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    object-fit: cover;
  }
`;

export const EditFormElements = styled.div`
  display: flex;
  align-items: end;
  gap: 32px;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const InputContainer = styled.div`
  @media (max-width: 767px) {
    width: 100%
  }

  & > div {
    margin: 0;
  }
`;
