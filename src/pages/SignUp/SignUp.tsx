import React from 'react';
import SignUpForm from 'pages/components/AuthForms/singUpForm';
import { SignInUpLink, SignInUpMessage } from '../SignIn/SignIn.styles';
import dictionary from '../dictionary/pagesDictionary';

const SignUp = () => (
  <>
    <SignUpForm />
    <SignInUpMessage>
      {dictionary.authorisedPages.signInQuestion}
      <SignInUpLink to="/sign-in">{dictionary.authorisedPages.signIn}</SignInUpLink>
    </SignInUpMessage>
  </>
);

export default SignUp;
