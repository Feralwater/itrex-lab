import React from 'react';
import Header from '../../components/Header/Header';
import { Body, BodyDoctorView, Patients } from './Privat.styles';

const Privat: React.FC = ({ children }) => (
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

export default Privat;
