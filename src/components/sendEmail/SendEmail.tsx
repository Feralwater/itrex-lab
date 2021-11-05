import React from 'react';
import {
    CustomLink,
    FormTitle,
    FormTitleLeftArrow,
    RestoreMessage,
    RestorePasswordContainer
} from "../forms/FormStyles";
import {BodyAuth, FormContainer} from "../signIn/SignInStyles";
import {Link} from "react-router-dom";

type SendEmailPropsType = {
    email: string
}

const SendEmail: React.VFC<SendEmailPropsType> = ({email}) => {
    return (
        <BodyAuth>
            <FormContainer>
                <RestorePasswordContainer>
                    <FormTitle as={Link} to={"/restore-password"}>
                        <FormTitleLeftArrow/>
                        Restore Password
                    </FormTitle>
                    <RestoreMessage>
                        An email has been sent to {" "}
                        <CustomLink to={""}>{email}</CustomLink>.
                        Check your inbox, and click the reset link provided.
                    </RestoreMessage>
                </RestorePasswordContainer>
            </FormContainer>
        </BodyAuth>
    );
};

export default SendEmail;