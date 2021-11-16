import React from 'react';
import SignInForm from '../forms/SignInForm';
import {
  BodyAuth, FormContainer, SignInUpLink, SignInUpMessage,
} from './SignIn.styles';

const SignIn = () => (
  <BodyAuth>
    <FormContainer>
      <SignInForm />
      <SignInUpMessage>
        Don&apost have an account?
        <SignInUpLink to="/sign-up">Sign up</SignInUpLink>
      </SignInUpMessage>
    </FormContainer>
  </BodyAuth>
);

export default SignIn;
