import styled from "styled-components";
import {Link} from "react-router-dom";

export const PatientsButtonsContainer = styled.div`
  display: flex;
  margin: 0 0 44px 0;
  gap: 15px;

  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    margin: 0 0 30px 0;
  }
`

interface PatientsButtonProps {
    color: string
}

export const PatientsButton = styled(Link)<PatientsButtonProps>`
  width: 137px;
  display: inline-flex;
  font-weight: 600;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 10px;
  text-decoration: none;
  color: ${(props: any) => (props.color === "blue" ? "#ffffff" : "#7297ff")};
  background-color: ${(props: any) => (props.color === "blue" ? "#7297ff" : "#ffffff")};
  box-shadow: ${(props: any) => (props.color === "white" && "0px 4px 32px rgba(218, 228, 255, 0.16)")};
`
export const PatientsHeader = styled.div`
  margin: 0 0 18px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
`

export const PatientsTitle = styled.h1`
  font-weight: 600;
  font-size: 24px;
  color: #202225;
  text-transform: capitalize;

  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    font-size: 20px;
  }
`