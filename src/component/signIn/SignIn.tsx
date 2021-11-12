import React from 'react';
import {Link} from 'react-router-dom';
import SignInForm from "../forms/SignInForm";
import {BodyAuth, FormContainer, SignInUpLink, SignInUpMessage} from "./SignInStyles";

const SignIn = () => {
    return (
        <BodyAuth>
            <FormContainer>
                <SignInForm/>
                <SignInUpMessage>
                    Don't have an account?
                    <SignInUpLink to={"/sign-up"}>Sign up</SignInUpLink>
                </SignInUpMessage>
            </FormContainer>
        </BodyAuth>
    );
};

export default SignIn;