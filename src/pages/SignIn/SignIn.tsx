import React from 'react';
import dictionary from '../dictionary/pagesDictionary';
import { SignInUpLink, SignInUpMessage } from './SignIn.styles';
import { PATH } from '../../routes/constants';
import SignInFormContainer from '../../components/AuthForms/SignInFormContainer';

export const SignIn:React.VFC = () => (
  <>
    <SignInFormContainer />
    <SignInUpMessage>
      {dictionary.authorisedPages.signUpQuestion}
      <SignInUpLink to={PATH.SIGN_UP}>{dictionary.authorisedPages.signUp}</SignInUpLink>
    </SignInUpMessage>
  </>
);
