import React from 'react';
import Header from '../../components/Header/Header';
import { Body, BodyDoctorView, Patients } from './public.styles';

const Public: React.FC = ({ children }) => (
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

export default Public;
