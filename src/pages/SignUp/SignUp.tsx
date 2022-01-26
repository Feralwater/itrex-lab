import React from 'react';
import { SignInUpLink, SignInUpMessage } from '../SignIn/SignIn.styles';
import { dictionary } from '../dictionary/pagesDictionary';
import { PATH } from '../../routes/constants';
import { SignUpFormContainer } from '../../components';

export const SignUp = () => (
  <>
    <SignUpFormContainer />
    <SignInUpMessage>
      {dictionary.authorisedPages.signInQuestion}
      <SignInUpLink to={PATH.SIGN_IN}>{dictionary.authorisedPages.signIn}</SignInUpLink>
    </SignInUpMessage>
  </>
);
