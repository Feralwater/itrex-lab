import React from 'react';
import dictionary from '../dictionary/pagesDictionary';
import { SignInUpLink, SignInUpMessage } from './SignIn.styles';
import { SignInForm } from '../../components';
import { PATH } from '../../routes/constants';

export const SignIn:React.VFC = () => (
  <>
    <SignInForm />
    <SignInUpMessage>
      {dictionary.authorisedPages.signUpQuestion}
      <SignInUpLink to={PATH.SIGN_UP}>{dictionary.authorisedPages.signUp}</SignInUpLink>
    </SignInUpMessage>
  </>
);
