import React from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { SignInData } from 'resources/auth/auth.types';
import { loginSlice, selectProfile } from 'redux/reducers';
import { useLocation, useNavigate } from 'react-router-dom';
import { PATH } from 'routes/constants';
import { SignInForm } from './SignInForm';

export const SignInFormContainer:React.VFC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { status } = useAppSelector(selectProfile);
  const from = location.state?.from?.pathname || PATH.DEFAULT;
  const handleSubmitForm = ({ userName, password } : SignInData) => {
    dispatch(loginSlice.actions.pending({ userName, password }));
    navigate(from, { replace: true });
  };

  return (<SignInForm handleSubmitForm={handleSubmitForm} status={status} />);
};
