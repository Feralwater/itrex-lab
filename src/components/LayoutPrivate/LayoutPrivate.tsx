import React from 'react';
import { Header } from '../Header';
import { Body, BodyDoctorView, Patients } from './LayoutPrivate.styles';

export const LayoutPrivate: React.FC = ({ children }) => (
  <>
    <Header />
    <Body>
      <BodyDoctorView>
        <Patients>
          {children}
        </Patients>
      </BodyDoctorView>
    </Body>
  </>
);
