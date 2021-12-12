import React from 'react';
import { CustomSelectPropsType } from './Select.types';
import { CustomSelect } from './Select';

export const SelectForSortContainer: React.VFC<CustomSelectPropsType> = ({
  ...props
}) => (<CustomSelect {...props} />);
