import { StylesConfig } from 'react-select';
import { Options } from './Select.types';
import colors from '../../styles/colors';

const SelectStyles: StylesConfig<Array<Options>> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: `${colors.white}`,
    border: `1px solid ${colors.link_water}`,
    boxSizing: 'border-box',
    boxShadow: `0px 4px 32px ${colors.link_water_alfa016}`,
    borderRadius: '8px',
    padding: '9px 17px',
    fontSize: '17px',
    lineHeight: '24px',
    cursor: 'pointer',
    ':hover': {
      border: `1px solid ${colors.cornflower_blue}`,
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

export default SelectStyles;
