import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { SignUpData } from '../../resources/auth/auth.types';
import { PATH } from '../../routes/constants';
import { SignUpForm } from './singUpForm';
import { registrationSlice } from '../../redux/reducers';

export const SignUpFormContainer:React.VFC = () => {
  const history = useNavigate();
  const dispatch = useAppDispatch();
  const handleSubmitForm = ({
    userName, password, firstName, lastName,
  }: SignUpData) => {
    dispatch(registrationSlice.actions.pending({
      userName, password, firstName, lastName,
    }));
    history(PATH.APPOINTMENTS);
  };
  return (<SignUpForm handleSubmitForm={handleSubmitForm} />);
};
