import React from 'react';
import Select from 'react-select';
import { useField } from 'formik';
import Highlighter from 'react-highlight-words';
import colors from '../../styles/colors';
import SelectStyles from './Select.styles';
import { InputValueType, LabelType } from './Select.types';

const CustomSelect:React.VFC = ({
  labelText, id, name, options, placeholder, ...props
}: any) => {
  const [, , { setValue }] = useField(props.field);

  function formatOptionLabel({ label }:LabelType, { inputValue }:InputValueType) {
    return (
      <Highlighter
        highlightStyle={{
          fontWeight: 'bold',
          backgroundColor: `${colors.transparent}`,
        }}
        searchWords={[inputValue]}
        textToHighlight={label}
      />
    );
  }

  return (
    <label htmlFor={id}>
      {labelText}
      <Select
        {...props}
        id={id}
        placeholder={placeholder}
        formatOptionLabel={formatOptionLabel}
        styles={SelectStyles}
        options={options}
        onChange={setValue}
      />
    </label>
  );
};

export default CustomSelect;
