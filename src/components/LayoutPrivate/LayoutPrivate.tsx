import React from 'react';
import { HeaderContainer } from '../Header';
import { Body, BodyDoctorView, Patients } from './LayoutPrivate.styles';

export const LayoutPrivate: React.FC = ({ children }) => (
  <>
    <HeaderContainer />
    <Body>
      <BodyDoctorView>
        <Patients>
          {children}
        </Patients>
      </BodyDoctorView>
    </Body>
  </>
);
