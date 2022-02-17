import styled from 'styled-components';

export const AppointmentsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc(25% - 18px), calc(25% - 18px)));
  grid-template-rows: minmax(217px, 264px);
  gap: 25px 24px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 32px 0 0;
  @media only screen and (max-device-width: 1050px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    grid-template-columns: repeat(auto-fit, minmax(272px, 1fr));
    grid-template-rows: repeat(auto-fit, 305px);
    gap: 15px;
    padding: 0;
  }
`;
