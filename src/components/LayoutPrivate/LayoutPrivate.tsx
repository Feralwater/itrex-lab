import React from 'react';
import Header from '../Header/Header';
import { Body, BodyDoctorView, Patients } from './LayoutPrivate.styles';

const LayoutPrivate: React.FC = ({ children }) => (
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

export default LayoutPrivate;
