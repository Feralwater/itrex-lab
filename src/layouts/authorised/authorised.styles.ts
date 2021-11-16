import styled from 'styled-components';
import colors from '../../styles/colors';

export const BodyAuth = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100%;
  width: 100%;
  display: flex;
  align-items: stretch;
  background: url("../../img/bg.png") no-repeat 0 0;
  background-size: cover;

  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    background-size: 100vw;
  }
`;

export const FormContainer = styled.div`
  background-color: ${colors.alabaster};
  max-width: 560px;
  margin: 0 0 0 auto;
  min-height: 100vh;
  padding: 6vh 96px 1vh 96px;
  box-sizing: border-box;
  display: grid;
  grid-template-areas: "."
                         "."
                        "form"
                         "."
                        "footer"
                        ".";
  align-items: center;

  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    min-height: calc(100vh - 72px);
    margin: 72px 0 0 0;
    border-radius: 24px 24px 0px 0px;
    padding: 32px 32px 0 32px;
    max-width: none;
    width: 100vw;
    grid-template-areas:
                        "form"
                        "."
                        "footer";
    align-items: start;
  }
`;
