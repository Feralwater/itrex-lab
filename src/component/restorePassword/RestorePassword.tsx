import React from 'react';
import RestorePasswordForm from '../forms/RestorePasswordForm';
import { BodyAuth, FormContainer } from '../signIn/SignIn.styles';

const RestorePassword = () => (
  <BodyAuth>
    <FormContainer>
      <RestorePasswordForm />
    </FormContainer>
  </BodyAuth>
);

export default RestorePassword;
