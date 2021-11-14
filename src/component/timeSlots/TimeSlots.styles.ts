import styled from "styled-components";

export const TimeSlotsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 104px);
  grid-template-rows: repeat(auto-fit, 40px);
  grid-gap: 16px;
  min-height: 152px;
  max-width: 464px;
  overflow: hidden;
  padding: 0;
  margin: 0;
  list-style-type: none;
`

interface TimeSlotType {
    isSelected: boolean
    isAvailableTimeSlot: boolean
}

export const TimeSlot = styled.li<TimeSlotType>`
  background: ${(props) => (props.isAvailableTimeSlot ? "#ffffff" : "#dce0ec")};
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 600;
  font-size: 15px;
  line-height: 130%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.isSelected ? "#7297ff" : props.isAvailableTimeSlot ? "#202225" : "#f9faff")};
  border: ${(props) => (props.isSelected ? "1px solid #7297ff" : "1px solid transparent")};
  pointer-events:  ${(props) => (props.isAvailableTimeSlot ? "all" : "none")};;
  cursor: pointer;
  transition: all .1s ease-out;

  &:hover {
    border-color: #7297ff;
    color: #7297ff;
  }
`