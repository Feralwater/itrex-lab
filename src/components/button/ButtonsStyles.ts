import styled from 'styled-components';

export const FormSubmitButton = styled.button`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 16px 57px 16px 24px;
  width: fit-content;
  height: 56px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 17px;
  color: #FFFFFF;
  cursor: pointer;
  background-color: #7297ff;
  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    padding: 12px 49px 12px 16px;
    height: 48px;
    font-size: 15px;
    background-position: 90px;
  }
`;