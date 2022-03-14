import styled from 'styled-components';
import { colors } from '../CommonStyles';

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
  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),
  (max-device-width: 767px) {
    display: flex;
    overflow: auto;
    min-height: 50px;
    max-width: 100%;
  }
`;

export const TimeSlotContainer = styled.input`
  display: none;

  &:checked {
    & + label {
      color: ${colors.cornflower_blue};
      border: 1px solid ${colors.cornflower_blue};
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
  border: 1px solid ${colors.transparent};
  box-shadow: 0px 4px 32px ${colors.link_water['024']};
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
