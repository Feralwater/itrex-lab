import React from 'react';
import { PATH } from 'routes/constants';
import { SignUpFormContainer } from 'components';
import { SignInUpLink, SignInUpMessage } from '../SignIn/SignIn.styles';
import { dictionary } from '../dictionary/pagesDictionary';

export const SignUp = () => (
  <>
    <SignUpFormContainer />
    <SignInUpMessage>
      {dictionary.authorisedPages.signInQuestion}
      <SignInUpLink to={PATH.SIGN_IN}>{dictionary.authorisedPages.signIn}</SignInUpLink>
    </SignInUpMessage>
  </>
);
