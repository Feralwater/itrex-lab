import React from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { SignInData } from 'resources/auth/auth.types';
import { loginSlice, selectProfile } from 'redux/reducers';
import { SignInForm } from './SignInForm';

export const SignInFormContainer:React.VFC = () => {
  const dispatch = useAppDispatch();
  const handleSubmitForm = ({ userName, password } : SignInData) => {
    dispatch(loginSlice.actions.pending({ userName, password }));
  };
  const { status } = useAppSelector(selectProfile);
  return (<SignInForm handleSubmitForm={handleSubmitForm} status={status} />);
};
