import React from 'react';
import SignInForm from '../../../forms/SignInForm';
import { SignInUpLink, SignInUpMessage } from './SignIn.styles';
import dictionary from '../../../dictionary/dictionary';

const SignIn = () => (
  <>
    <SignInForm />
    <SignInUpMessage>
      {dictionary.authorisedPages.signUpQuestion}
      <SignInUpLink to="/sign-up">{dictionary.authorisedPages.signUp}</SignInUpLink>
    </SignInUpMessage>
  </>
);

export default SignIn;
