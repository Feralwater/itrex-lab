import React, { memo } from 'react';
import { DisabledLink, LinksContainer, NoUnderlineLink } from 'pages/MakeAppointment/MakeAppointment.styles';
import { PATH } from 'routes/constants';
import { dictionary as pagesDictionary } from 'pages/dictionary/pagesDictionary';
import { ReactComponent as RightArrow } from 'assets/svg/rightArrowGrey-icon.svg';

export const Breadcrumbs:React.VFC = memo(() => (
  <LinksContainer>
    <NoUnderlineLink to={PATH.PATIENT_APPOINTMENTS}>{pagesDictionary.patientPage.buttonAppointments}</NoUnderlineLink>
    <RightArrow />
    <DisabledLink to={PATH.CREATE_APPOINTMENT}>{pagesDictionary.form.makeAppointmentTitle}</DisabledLink>
  </LinksContainer>
));
