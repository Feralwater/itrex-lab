/* eslint-disable no-nested-ternary */
import { GroupBase, StylesConfig } from 'react-select';
import styled from 'styled-components';
import { LabelType } from './Select.types';
import { borders, colors } from '../CommonStyles';

export const SelectStyles: StylesConfig<LabelType, false, GroupBase<LabelType>> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: `${colors.white}`,
    border: `${borders.link_water1_border}`,
    boxSizing: 'border-box',
    boxShadow: `0px 4px 32px ${colors.link_water['016']}`,
    borderRadius: '8px',
    padding: '9px 17px',
    fontSize: '17px',
    lineHeight: '24px',
    cursor: 'pointer',
    ':hover': {
      border: `${borders.cornflower_border}`,
    },
  }),
  menu: (styles) => ({
    ...styles,
    padding: '4px',
  }),
  menuList: (styles) => ({
    ...styles,
    padding: '4px',
  }),
  option: (styles, {
    isDisabled, isFocused, isSelected,
  }) => ({
    ...styles,
    borderRadius: '8px',
    padding: '16px 24px',
    textTransform: 'capitalize',
    backgroundColor: isDisabled
      ? undefined
      : isSelected
        ? `${colors.alabaster}`
        : isFocused
          ? `${colors.alabaster}`
          : `${colors.white}`,
    ':active': {
      backgroundColor: `${colors.cornflower_blue}`,
    },
    color: isDisabled
      ? `${colors.pastel_grey}`
      : isSelected
        ? `${colors.dark_jungle_green}`
        : `${colors.dark_jungle_green}`,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
  }),
  noOptionsMessage: (styles) => ({
    ...styles,
    color: `${colors.rock_blue}`,
  }),
  indicatorSeparator: () => ({}),
  dropdownIndicator: (base, state) => ({
    ...base,
    transform: state.selectProps.menuIsOpen
      ? 'rotate(180deg)'
      : undefined,
    color: state.selectProps.menuIsOpen
      ? `${colors.cornflower_blue}`
      : `${colors.rock_blue}`,
    ':hover': {
      color: `${colors.cornflower_blue}`,
    },
    ':active': {
      color: `${colors.cornflower_blue}`,
    },
    transition: 'all .3s ease-out',
  }),
  input: (styles) => ({
    ...styles,
  }),
  placeholder: (styles) => ({
    ...styles,
    fontSize: '17px',
    lineHeight: '24px',
    fontWeight: 400,
    color: `${colors.rock_blue}`,
  }),
};

export const SelectLabel = styled.label`
  font-weight: 500;
  font-size: 13px;
  line-height: 130%;
  color: ${colors.black['1']};
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 0 26px 0;
`;

export const RequireSign = styled.i`
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  color: ${colors.brink_pink};
`;
