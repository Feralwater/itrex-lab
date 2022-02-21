import React from 'react';
import { Link } from 'react-router-dom';
import {
  CustomLink,
  FormTitle,
  FormTitleLeftArrow,
  RestoreMessage,
  RestorePasswordContainer,
} from 'components/AuthForms/AuthForm.styles';
import { dictionary } from 'pages/dictionary/pagesDictionary';
import { PATH } from 'routes/constants';

export const SendEmail: React.VFC = () => (
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
          window.location.href = 'mailto:email@gmail.com';
          e.preventDefault();
        }}
      >
        email@gmail.com
      </CustomLink>
      {'. '}
      {dictionary.authorisedPages.sendEmailMessage2}
    </RestoreMessage>
  </RestorePasswordContainer>
);
