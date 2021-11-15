import React from 'react';
import SignUpForm from "../forms/SingUpForm";
import {BodyAuth, FormContainer, SignInUpLink, SignInUpMessage} from "../signIn/SignIn.styles";

const SignUp = () => {
    return (
        <BodyAuth>
            <FormContainer>
                <SignUpForm/>
                <SignInUpMessage>
                    Already have an account?
                    <SignInUpLink to={"/sign-in"}>Sign in</SignInUpLink>
                </SignInUpMessage>
            </FormContainer>
        </BodyAuth>
    );
};

export default SignUp;