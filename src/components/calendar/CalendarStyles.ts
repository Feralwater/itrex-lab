import styled from "styled-components";

export const CalendarContainer = styled.div`
  width: 400px;
  background: #ffffff;
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
  border-radius: 12px;
`

export const DatePickerContainer = styled.div`
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000000;
  border-bottom: 1px solid rgba(220, 224, 236, .5);
  margin: 0 0 16px 0;
  padding: 32px 37px;
  box-sizing: border-box;
`

export const CalendarBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 32px 32px 32px;
`

export const WeekdaysContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 16px 32px;
`

export const Week = styled.div`
  display: flex;
  justify-content: space-between;
`

interface DayNumber {
    today: boolean
    selected: boolean
}

export const DayNumber = styled.div<DayNumber>`
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  color: ${(props) => (props.today ? "#ffffff" : props.selected ? "#7297ff" : "#202225")};
  background: ${(props) => (props.today ? "#7297FF" : "transparent")};
  border-radius: 12px;
  cursor: pointer;
  border: ${(props) => (props.selected ? "1px solid #7297ff" : "none")};
  width: 48px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`
export const Weekday = styled.div`
  font-weight: 500;
  font-size: 13px;
  line-height: 130%;
  color: #A1ABC9;
`

export const CalendarArrow = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`
export const CalendarHeader = styled.span`
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  color: #000000;
`