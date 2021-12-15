import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { SignUpData } from '../../resources/auth/auth.types';
import { registration } from '../../redux/actions';
import { PATH } from '../../routes/constants';
import { SignUpForm } from './singUpForm';

const SignUpFormContainer:React.VFC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const handleSubmitForm = ({
    userName, password, firstName, lastName,
  }: SignUpData) => {
    dispatch(registration.pending({
      userName, password, firstName, lastName,
    }));
    history.push(PATH.APPOINTMENTS);
  };
  return (<SignUpForm handleSubmitForm={handleSubmitForm} />);
};

export default SignUpFormContainer;
