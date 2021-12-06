import styled from 'styled-components';
import colors from '../../styles/colors';

export const StyledPaginateContainer = styled.div`
  & ul {
    display: flex;
    list-style-type: none;
    padding-inline-start: 0;
    line-height: 23px;
    margin-right: 19px;
    align-items: center;
    text-align: center;
  }

  & li {
    padding: 10px;
    background: none;
    border-radius: 8px;
    color: ${colors.rock_blue};
    cursor: pointer;

    & a {
      padding: 5px;
      outline: none;
    }
  }

  & li.selected {
    font-weight: 600;
    font-size: 15px;
    line-height: 130%;
    color: ${colors.white};
    background-color: ${colors.cornflower_blue};
  }
`;

export const Paginate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 15px;
  line-height: 140%;
  color: ${colors.rock_blue};
  gap: 64px;
`;
