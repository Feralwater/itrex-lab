import React from 'react';
import { BodyAuth, FormContainer } from './LayoutAuthorised.styles';

export const AuthorisedLayout:React.FC = ({ children }) => (
  <BodyAuth>
    <FormContainer>
      {children}
    </FormContainer>
  </BodyAuth>
);
