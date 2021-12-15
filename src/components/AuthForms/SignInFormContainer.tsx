import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SignInData } from '../../resources/auth/auth.types';
import { login } from '../../redux/actions';
import { selectProfile } from '../../redux/reducers';
import { SignInForm } from './SignInForm';

const SignInFormContainer:React.VFC = () => {
  const dispatch = useAppDispatch();
  const handleSubmitForm = ({ userName, password } : SignInData) => {
    dispatch(login.pending({ userName, password }));
  };
  const { status } = useAppSelector(selectProfile);
  return (<SignInForm handleSubmitForm={handleSubmitForm} status={status} />);
};

export default SignInFormContainer;
