import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import StyledInput from './Input.styles';
import { InputTextPropsType } from './Input.types';

const InputText: React.VFC<InputTextPropsType> = (
  {
    error,
    placeholder,
    addActionCreator,
    inputLabel,
  },
) => {
  const dispatch = useDispatch();

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(addActionCreator(e.currentTarget.value));
  };

  return (
    <>
      <label htmlFor="input">{inputLabel}</label>
      <StyledInput
        inputLabel={inputLabel}
        addActionCreator={addActionCreator}
        type="text"
        placeholder={placeholder}
        onChange={onChangeCallback}
      />
      {error && <span>{error}</span>}
    </>
  );
};

export default InputText;
