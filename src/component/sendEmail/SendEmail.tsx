import React from 'react';
import { Link } from 'react-router-dom';
import {
  CustomLink,
  FormTitle,
  FormTitleLeftArrow,
  RestoreMessage,
  RestorePasswordContainer,
} from '../forms/Form.styles';
import { BodyAuth, FormContainer } from '../signIn/SignIn.styles';

type SendEmailPropsType = {
    email: string
}

const SendEmail: React.VFC<SendEmailPropsType> = ({ email }) => (
  <BodyAuth>
    <FormContainer>
      <RestorePasswordContainer>
        <FormTitle as={Link} to="/restore-password">
          <FormTitleLeftArrow />
          Restore Password
        </FormTitle>
        <RestoreMessage>
          An email has been sent to
          {' '}
          {' '}
          <CustomLink to="">{email}</CustomLink>
          .
          Check your inbox, and click the reset link provided.
        </RestoreMessage>
      </RestorePasswordContainer>
    </FormContainer>
  </BodyAuth>
);

export default SendEmail;
