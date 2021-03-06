import styled from 'styled-components';
import { colors, shadows } from 'components/CommonStyles';

export const ResolutionsTableContainer = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  min-width: 100%;
  border-collapse: separate;
  text-align: left;
  border-spacing: 0 4px;
  table-layout: fixed;
`;

export const ResolutionsTableHead = styled.tr`
  font-size: 1.5rem;
  line-height: 140%;
  color: ${colors.rock_blue};
  background-color: ${colors.white};
  box-shadow: ${shadows.link_water024_shadow};
`;

export const ResolutionsTableCell = styled.td`
  padding: 10px 25px 10px 0;
  border-bottom: 0px;
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:first-child {
    border-radius: 4px 0 0 4px;
    padding: 10px 0 10px 40px;
  }

  &:last-child {
    border-radius: 0 4px 4px 0;
    padding: 10px 12px 10px 0;
    display: flex;
    justify-content: flex-end;
    border: none;
  }

  & img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
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
  font-size: 1.7rem;
  line-height: 110%;
  color: ${colors.dark_jungle_green};
  background-color: ${colors.white};
  box-shadow: ${shadows.link_water024_shadow};

  &:last-child {
    border-bottom: none;
  }
`;

export const ResolutionsLoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
