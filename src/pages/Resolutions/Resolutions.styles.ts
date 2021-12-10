import styled from 'styled-components';
import { colors } from '../../components/CommonStyles/theme';

export const ResolutionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  text-align: left;
  border-spacing: 0 4px;
`;

export const ResolutionsTableHead = styled.tr`
  font-size: 15px;
  line-height: 240%;
  color: ${colors.rock_blue};
  background-color: ${colors.white};
  box-shadow: 0px 4px 32px ${colors.link_water['024']};
`;

export const ResolutionsTableCell = styled.td`
  padding: 10px 0 10px 0;
  border-bottom: solid ${colors.link_water['032']};
  box-sizing: border-box;

  &:first-child {
    border-radius: 4px 0 0 4px;
    padding: 10px 0 10px 40px;
  }

  &:last-child {
    border-radius: 0 4px 4px 0;
    padding: 10px 12px 10px 0;
    display: flex;
    justify-content: flex-end;
  }
`;

export const ResolutionsTableHeaderCell = styled(ResolutionsTableCell)`

  &:nth-child(1) {
    width: 18%;
  }

  &:nth-child(2) {
    width: 18%;
  }

  &:nth-child(3) {
    width: 35%;
  }

  &:nth-child(4) {
    width: 12%;
  }

  &:nth-child(5) {
    width: 12%;
  }

  &:nth-child(6) {
    padding: 10px 24px 10px 0;
  }
`;

export const ResolutionsTableRow = styled.tr`
  font-size: 17px;
  line-height: 240%;
  color: ${colors.dark_jungle_green};
  background-color: ${colors.white};
  box-shadow: 0px 4px 32px ${colors.link_water['024']};

  &:last-child {
    border-bottom: none;
  }
`;
