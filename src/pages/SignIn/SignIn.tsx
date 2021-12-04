import React from 'react';
import dictionary from '../../dictionary/dictionary';
import { SignInUpLink, SignInUpMessage } from './SignIn.styles';
import SignInForm from '../../forms/authForms/SignInForm';
import { PATH } from '../../routes/constants';

const SignIn:React.VFC = () => (
  <>
    <SignInForm />
    <SignInUpMessage>
      {dictionary.authorisedPages.signUpQuestion}
      <SignInUpLink to={PATH.SIGN_UP}>{dictionary.authorisedPages.signUp}</SignInUpLink>
    </SignInUpMessage>
  </>
);

export default SignIn;