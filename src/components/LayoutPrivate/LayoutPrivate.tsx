import React from 'react';
import { MemoHeaderContainer } from '../Header';
import { Body, BodyView, Patients } from './LayoutPrivate.styles';

export const LayoutPrivate: React.FC = ({ children }) => (
  <>
    <MemoHeaderContainer />
    <Body>
      <BodyView>
        <Patients>
          {children}
        </Patients>
      </BodyView>
    </Body>
  </>
);
