import styled from 'styled-components';
import colors from '../../../styles/colors';

export const CommandsList = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  background: ${colors.white};
  border-radius: 8px;
  width: 272px;
  padding: 4px;
  position: absolute;
  top: 72px;
  right: 16px;
  box-shadow: 0px 4px 32px ${colors.link_water_alfa032};
`;

export const ControlCommand = styled.li`
  color: ${colors.dark_jungle_green};
  font-size: 15px;
  line-height: 140%;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 6px;

  &:last-child {
    color: ${colors.radical_red};
  }

  &:hover {
    background: ${colors.alabaster};
  }
`;
