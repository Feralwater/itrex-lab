import styled from "styled-components";
import {colors} from "../../styles/colors";

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
  background: ${(props) => (props.isAvailableTimeSlot ? `${colors.white}` : `${colors.link_water}`)};
  box-shadow: 0px 4px 32px ${colors.link_water_alfa024};
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 600;
  font-size: 15px;
  line-height: 130%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.isSelected ? `${colors.cornflower_blue}` : props.isAvailableTimeSlot ? `${colors.dark_jungle_green}` : `${colors.alabaster}`)};
  border: ${(props) => (props.isSelected ? `1px solid ${colors.cornflower_blue}` : `1px solid ${colors.transparent}`)};
  pointer-events: ${(props) => (props.isAvailableTimeSlot ? "all" : "none")};;
  cursor: pointer;
  transition: all .1s ease-out;

  &:hover {
    border-color: ${colors.cornflower_blue};
    color: ${colors.cornflower_blue};
  }
`