import React from 'react';
import { PATH } from 'routes/constants';
import { SignInFormContainer } from 'components';
import { dictionary } from 'pages/dictionary/pagesDictionary';
import { SignInUpLink, SignInUpMessage } from 'pages/auth/SignIn/SignIn.styles';

export const SignIn:React.VFC = () => (
  <>
    <SignInFormContainer />
    <SignInUpMessage>
      {dictionary.authorisedPages.signUpQuestion}
      <SignInUpLink to={PATH.SIGN_UP}>{dictionary.authorisedPages.signUp}</SignInUpLink>
    </SignInUpMessage>
  </>
);
