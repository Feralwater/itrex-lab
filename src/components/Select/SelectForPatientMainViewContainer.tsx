import React from 'react';
import { CustomSelectProps, Options } from './Select.types';
import { CustomSelect } from './Select';

export const SelectForPatientMainViewContainer: React.VFC<CustomSelectProps> = ({
  setPageNumber, setFilterQuery, ...props
}) => {
  const onChangeHandler = ({ value } : Options) => {
    if (setFilterQuery && setPageNumber) {
      setPageNumber(1);
      setFilterQuery(value);
    }
  };

  return (<CustomSelect onChangeHandler={onChangeHandler} {...props} />);
};
