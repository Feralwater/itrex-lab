import React from 'react';
import { SelectForPatientMailView } from 'components/Select/SelectForPatientMailView.styles';
import { CustomSelectProps, Options } from './Select.types';
import { CustomSelect } from './Select';

export const SelectForMainViewContainer: React.VFC<CustomSelectProps> = ({
  setPageNumber, setFilterQuery, ...props
}) => {
  const onChangeHandler = ({ value } : Options) => {
    if (setFilterQuery && setPageNumber) {
      setPageNumber(1);
      setFilterQuery(value);
    }
  };

  return (
    <CustomSelect
      onChangeHandler={onChangeHandler}
      styles={SelectForPatientMailView}
      labelPosition="inline"
      {...props}
    />
  );
};
