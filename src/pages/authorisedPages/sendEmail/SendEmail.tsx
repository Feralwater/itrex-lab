import React from 'react';
import { Link } from 'react-router-dom';
import {
  CustomLink,
  FormTitle,
  FormTitleLeftArrow,
  RestoreMessage,
  RestorePasswordContainer,
} from '../../../forms/authForms/authForm.styles';
import dictionary from '../../../dictionary/dictionary';

type SendEmailPropsType = {
    email: string
}

const SendEmail: React.VFC<SendEmailPropsType> = ({ email }) => (
  <RestorePasswordContainer>
    <FormTitle as={Link} to="/restore-password">
      <FormTitleLeftArrow />
      Restore Password
    </FormTitle>
    <RestoreMessage>
      {dictionary.authorisedPages.sendEmailMessage}
      {' '}
      <CustomLink to="">{email}</CustomLink>
      .
      {dictionary.authorisedPages.sendEmailMessage}
    </RestoreMessage>
  </RestorePasswordContainer>
);

export default SendEmail;
