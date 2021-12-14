import React from 'react';
import { SelectProps } from './Select.types';
import { CustomSelect } from './Select';

export const SelectForSortContainer: React.VFC<SelectProps> = ({
  ...props
}) => (<CustomSelect {...props} />);
