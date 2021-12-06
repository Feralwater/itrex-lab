import React from 'react';
import dictionary from '../dictionary/pagesDictionary';
import { SignInUpLink, SignInUpMessage } from './SignIn.styles';
import SignInForm from '../components/AuthForms/SignInForm';
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
