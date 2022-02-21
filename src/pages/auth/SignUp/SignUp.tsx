import React from 'react';
import { PATH } from 'routes/constants';
import { SignUpFormContainer } from 'components';
import { SignInUpLink, SignInUpMessage } from 'pages/auth/SignIn/SignIn.styles';
import { dictionary } from 'pages/dictionary/pagesDictionary';

export const SignUp:React.VFC = () => (
  <>
    <SignUpFormContainer />
    <SignInUpMessage>
      {dictionary.authorisedPages.signInQuestion}
      <SignInUpLink to={PATH.SIGN_IN}>{dictionary.authorisedPages.signIn}</SignInUpLink>
    </SignInUpMessage>
  </>
);
