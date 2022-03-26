/* eslint-disable no-nested-ternary */
import { GroupBase, StylesConfig } from 'react-select';
import styled from 'styled-components';
import { LabelType } from './Select.types';
import { colors } from '../CommonStyles';

export const SelectForAppointmentFormStyles: StylesConfig<LabelType, false, GroupBase<LabelType>> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: `${colors.white}`,
    border: `1px solid ${colors.link_water['1']}`,
    boxSizing: 'border-box',
    boxShadow: `0px 4px 32px ${colors.link_water['016']}`,
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

interface SelectLabelType {
  labelPosition: 'column' | 'inline';
}

export const SelectLabel = styled.label<SelectLabelType>`
  font-weight: 500;
  font-size: 13px;
  line-height: 130%;
  color: ${(props) => (props.labelPosition === 'column' ? `${colors.black['1']}` : `${colors.rock_blue}`)};
  display: flex;
  flex-direction: ${(props) => (props.labelPosition === 'column' && 'column')};
  gap: 10px;
  margin: ${(props) => (props.labelPosition === 'column' && '0 0 26px 0')};
  align-items: ${(props) => (props.labelPosition === 'inline' && 'center')};
`;

export const RequireSign = styled.i`
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  color: ${colors.brink_pink};
`;
