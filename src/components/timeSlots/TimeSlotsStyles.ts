import styled from "styled-components";

export const TimeSlotsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 104px);
  grid-template-rows: repeat(auto-fit, 40px);
  grid-gap: 16px;
  max-height: 152px;
  width: 464px;
  overflow: hidden;
  padding: 0;
  margin: 0;
  list-style-type: none;
`

interface TimeSlot {
    // isDisabled: boolean
}

export const TimeSlot = styled.li<TimeSlot>`
  background: #ffffff;
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 600;
  font-size: 15px;
  line-height: 130%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #202225;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all .3s ease-out;

  &:hover {
    border-color: #7297ff;
    color: #7297ff;
  }
`