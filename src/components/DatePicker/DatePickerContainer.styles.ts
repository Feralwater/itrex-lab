import styled from 'styled-components';
import { colors } from '../CommonStyles';

const ReactCalendarContainer = styled.div`
  & div.react-calendar {
    width: 400px;
    max-width: 100%;
    background: ${colors.white};
    box-shadow: 0px 4px 32px ${colors.link_water['024']};
    border-radius: 12px;
    box-sizing: border-box;
    padding: 0 32px 6px 32px;
  }

  & button {
    margin: 4px 0;
    border: 1px solid transparent;
    outline: none;

    &:enabled:hover {
      cursor: pointer;
    }
  }

  & div.react-calendar__navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${colors.platinum['050']};
    margin: 0 0 30px 0;
    padding: 17px 0;

    & button {
      background: none;
      color: ${colors.black['1']};
      font-weight: 600;
      font-size: 1.7rem;
      line-height: 240%;
    }
  }

  & div.react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 130%;
    color: ${colors.rock_blue};
    margin: 0 0 24px 0;
  }

  & div.react-calendar__month-view__weekdays__weekday {
    padding: 4px;

    & abbr {
      text-decoration: none;
    }
  }

  & button.react-calendar__month-view__days__day--neighboringMonth {
    color: ${colors.link_water['1']};
  }

  & button.react-calendar__tile {
    max-width: 100%;
    text-align: center;
    padding: 14px 8px;
    background: none;
    border-radius: 12px;

    &:enabled:hover,
    &:enabled:focus {
      background: ${colors.cornflower_blue};
      color: ${colors.white};
    }
  }

  &:enabled:hover {
    border: 1px solid ${colors.cornflower_blue};
    background-color: ${colors.white};
    color: ${colors.black};
  }

  &:enabled:focus {
    background: ${colors.cornflower_blue};
    color: ${colors.white};
  }
}

& button.react-calendar__tile--active {
  &:not(:disabled) {
    background: ${colors.cornflower_blue};
    color: ${colors.white};
  }
}

& button.react-calendar__tile--now {
  color: ${colors.cornflower_blue};
  border: 1px solid ${colors.cornflower_blue};
`;

export default ReactCalendarContainer;
