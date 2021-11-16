import React from 'react';
import { BodyAuth, FormContainer } from './authorised.styles';

const AuthorisedLayout:React.FC = ({ children }) => (
  <BodyAuth>
    <FormContainer>
      {children}
    </FormContainer>
  </BodyAuth>
);

export default AuthorisedLayout;
