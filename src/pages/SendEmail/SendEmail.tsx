import React from 'react';
import { Link } from 'react-router-dom';
import {
  CustomLink,
  FormTitle,
  FormTitleLeftArrow,
  RestoreMessage,
  RestorePasswordContainer,
} from '../../components/AuthForms/AuthForm.styles';
import dictionary from '../dictionary/pagesDictionary';
import { SendEmailProps } from './SendEmail.types';
import { PATH } from '../../routes/constants';

export const SendEmail: React.VFC<SendEmailProps> = ({ email }) => (
  <RestorePasswordContainer>
    <FormTitle as={Link} to={PATH.RESTORE_PASSWORD}>
      <FormTitleLeftArrow />
      {dictionary.form.restoreTitle}
    </FormTitle>
    <RestoreMessage>
      {dictionary.authorisedPages.sendEmailMessage1}
      {' '}
      <CustomLink
        to="#"
        onClick={(e) => {
          window.location.href = `mailto:${email}`;
          e.preventDefault();
        }}
      >
        {email}
      </CustomLink>
      {'. '}
      {dictionary.authorisedPages.sendEmailMessage2}
    </RestoreMessage>
  </RestorePasswordContainer>
);
