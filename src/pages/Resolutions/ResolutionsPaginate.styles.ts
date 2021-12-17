import styled from 'styled-components';
import { colors, Title } from '../../components';

export const StyledPaginateContainer = styled.div`
  & ul {
    display: flex;
    list-style-type: none;
    padding-inline-start: 0;
    line-height: 230%;
    margin-right: 19px;
    align-items: center;
    text-align: center;
  }

  & li {
    padding: 5px 10px;
    background: none;
    border-radius: 8px;
    color: ${colors.rock_blue};
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    & a {
      padding: 5px;
      outline: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;

      &:hover {
        color: ${colors.cornflower_blue};
      }
    }

    & svg {
      padding: 5px;

      &:hover > path {
        fill: ${colors.cornflower_blue};
      }
    }
  }

  & li.previous.disabled {

    & svg:hover > path {
      fill: ${colors.rock_blue};
    }

  }

  & li.selected {
    font-weight: 600;
    font-size: 15px;
    line-height: 130%;
    color: ${colors.white};
    background-color: ${colors.cornflower_blue};

    & a {
      &:hover {
        color: ${colors.white};
      }
    }
  }
}
`;

export const Paginate = styled(Title)`
  justify-content: flex-end;
  color: ${colors.rock_blue};
  gap: 64px;
`;
