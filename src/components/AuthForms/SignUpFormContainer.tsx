import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { SignUpData } from '../../resources/auth/auth.types';
import { registration } from '../../redux/actions';
import { PATH } from '../../routes/constants';
import { SignUpForm } from './singUpForm';

export const SignUpFormContainer:React.VFC = () => {
  const history = useNavigate();
  const dispatch = useAppDispatch();
  const handleSubmitForm = ({
    userName, password, firstName, lastName,
  }: SignUpData) => {
    dispatch(registration.pending({
      userName, password, firstName, lastName,
    }));
    history(PATH.APPOINTMENTS);
  };
  return (<SignUpForm handleSubmitForm={handleSubmitForm} />);
};
