import React from 'react';
import { BodyAuth, FormContainer } from './Authorised.styles';

const AuthorisedLayout:React.FC = ({ children }) => (
  <BodyAuth>
    <FormContainer>
      {children}
    </FormContainer>
  </BodyAuth>
);

export default AuthorisedLayout;
