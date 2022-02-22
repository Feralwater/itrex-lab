import React from 'react';
import { CustomSelectProps, Options } from './Select.types';
import { CustomSelect } from './Select';

export const SelectForPatientMainViewContainer: React.VFC<CustomSelectProps> = ({
  ...props
}) => {
  const onChangeHandler = (value: Options) => {

  };

  return (<CustomSelect onChangeHandler={onChangeHandler} {...props} />);
};
