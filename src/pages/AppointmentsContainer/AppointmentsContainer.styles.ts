import styled from 'styled-components';

interface AppointmentsWrapperProps {
    patientsLength: number
}

const AppointmentsWrapper = styled.div<AppointmentsWrapperProps>`
  display: ${(props) => (props.patientsLength > 0 ? 'grid' : 'flex')};
  height: ${(props) => (props?.patientsLength === 0 && '68vh')};
  justify-content: ${(props) => (props?.patientsLength === 0 && 'center')};
  align-items: ${(props) => (props?.patientsLength === 0 && 'center')};
  grid-template-columns: repeat(auto-fit, minmax(400px, 400px));
  grid-template-rows: repeat(minmax(185px, 264px));
  gap: 25px 24px;
  overflow: auto;
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

export default AppointmentsWrapper;
