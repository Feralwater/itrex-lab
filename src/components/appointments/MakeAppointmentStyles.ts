import styled from "styled-components";
import {FormSubmitButton} from "../button/ButtonsStyles";

export const AppointmentStepsNumbers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 32px 40px 0;
`

export const AppointmentStepsContainer = styled.div`
  display: flex;
  //align-items: center;
  justify-content: space-between;
  gap: 0 104px;
  margin: 0 33px 0 0;
`

export const ChooseDayStep = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`

export const SelectTimeslotStep = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 464px;
`

export const SelectDoctorStep = styled.div`
  display: flex;
  flex-direction: column;
`

export const SubmitButton = styled(FormSubmitButton)`
  padding: 16px 40px;
`

