import styled from 'styled-components';
import { borders, colors, shadows } from '../CommonStyles';

export const TimeSlotsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 104px);
  grid-template-rows: repeat(40px);
  grid-gap: 16px;
  min-height: 152px;
  max-width: 464px;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

export const TimeSlotContainer = styled.input`
  display: none;

  &:checked {
    & + label {
      color: ${colors.cornflower_blue};
      border: ${borders.cornflower_border};
    }
  }

  &:disabled {
    & + label {
      background: ${colors.link_water['1']};
      color: ${colors.alabaster};
      pointer-events: none;
      border: none;
    }
  }
`;

export const TimeSlotLabel = styled.label`
  display: inline-flex;
  background: ${colors.white};
  color: ${colors.dark_jungle_green};
  border: ${borders.transparent_border};
  box-shadow: ${shadows.link_water024_shadow};
  border-radius: 8px;
  padding: 8px 0;
  font-weight: 600;
  font-size: 15px;
  line-height: 130%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  min-width: 104px;
  box-sizing: border-box;
  transition: all .1s ease-out;

  &:hover {
    border-color: ${colors.cornflower_blue};
    color: ${colors.cornflower_blue};
  }
`;
