import React from 'react';
import { HeaderContainer } from '../Header';
import { Body, BodyView, Patients } from './LayoutPrivate.styles';

export const LayoutPrivate: React.FC = ({ children }) => (
  <>
    <HeaderContainer />
    <Body>
      <BodyView>
        <Patients>
          {children}
        </Patients>
      </BodyView>
    </Body>
  </>
);
