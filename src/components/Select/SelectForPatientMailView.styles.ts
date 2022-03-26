/* eslint-disable no-nested-ternary */
import { GroupBase, StylesConfig } from 'react-select';
import { LabelType } from './Select.types';
import { colors } from '../CommonStyles';

export const SelectForPatientMailView: StylesConfig<LabelType, false, GroupBase<LabelType>> = {
  singleValue: (styles) => ({
    ...styles,
    color: `${colors.cornflower_blue}`,
    marginRight: '0',
  }),
  control: (styles) => ({
    ...styles,
    backgroundColor: `${colors.alabaster}`,
    border: 'none',
    boxShadow: 'none',
    boxSizing: 'border-box',
    fontSize: '15px',
    lineHeight: '21px',
    cursor: 'pointer',
    color: `${colors.rock_blue}`,
  }),
  menu: (styles) => ({
    ...styles,
    width: '150px',
  }),
  menuList: (styles) => ({
    ...styles,
    padding: '4px',
  }),
  option: (styles, {
    isDisabled, isFocused,
  }) => ({
    ...styles,
    borderRadius: '8px',
    padding: '16px 4px',
    textTransform: 'capitalize',
    backgroundColor: isFocused
      ? `${colors.alabaster}`
      : `${colors.white}`,
    ':active': {
      backgroundColor: `${colors.cornflower_blue}`,
    },
    color: `${colors.dark_jungle_green}`,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
  }),
  indicatorSeparator: () => ({}),
  dropdownIndicator: (base, state) => ({
    ...base,
    transform: state.selectProps.menuIsOpen
      ? 'rotate(180deg)'
      : undefined,
    color: `${colors.cornflower_blue}`,
    ':hover': {
      color: `${colors.cornflower_blue}`,
    },
    transition: 'all .3s ease-out',
  }),
  input: (styles) => ({
    ...styles,
    color: `${colors.dark_jungle_green}`,
  }),
  placeholder: (styles) => ({
    ...styles,
    fontSize: '17px',
    lineHeight: '24px',
    fontWeight: 400,
    color: `${colors.cornflower_blue}`,
  }),
};
