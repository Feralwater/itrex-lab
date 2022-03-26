import styled from 'styled-components';
import { colors } from 'components/CommonStyles';

export const TableCell = styled.td`
  padding: 10px 25px 10px 0;
  border-bottom: solid ${colors.link_water['032']};
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
  }
`;

export const TableHeaderCell = styled(TableCell)`
  width: 20%;

  &:last-child {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;
