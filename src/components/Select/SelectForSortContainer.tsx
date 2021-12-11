import React from 'react';
import { CustomSelectPropsType } from './Select.types';
import CustomSelect from './Select';

const SelectForSortContainer: React.VFC<CustomSelectPropsType> = ({
  ...props
}) => (<CustomSelect {...props} />);

export default SelectForSortContainer;
