import React from 'react';
import { SignUpForm } from 'components/AuthForms/singUpForm';
import { SignInUpLink, SignInUpMessage } from '../SignIn/SignIn.styles';
import dictionary from '../dictionary/pagesDictionary';
import { PATH } from '../../routes/constants';

export const SignUp = () => (
  <>
    <SignUpForm />
    <SignInUpMessage>
      {dictionary.authorisedPages.signInQuestion}
      <SignInUpLink to={PATH.SIGN_IN}>{dictionary.authorisedPages.signIn}</SignInUpLink>
    </SignInUpMessage>
  </>
);
