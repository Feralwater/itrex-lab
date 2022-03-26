import React, { useCallback } from 'react';
import { useAppDispatch } from 'hooks';
import { SignUpData } from 'resources/auth/auth.types';
import { registrationSlice } from 'redux/reducers';
import { SignUpForm } from './singUpForm';

export const SignUpFormContainer:React.VFC = () => {
  const dispatch = useAppDispatch();
  const handleSubmitForm = useCallback(({
    userName, password, firstName, lastName,
  }: SignUpData) => {
    dispatch(registrationSlice.actions.pending({
      userName, password, firstName, lastName,
    }));
  }, [dispatch]);
  return (<SignUpForm handleSubmitForm={handleSubmitForm} />);
};
