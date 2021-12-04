import { Dispatch } from '@reduxjs/toolkit';
import dictionary from '../../../../dictionary/dictionary';
import { deleteAppointment } from '../../../../redux/actions/appointmentsForDoctors.actions';

const controlPanelCommandsList = [
  {
    controlPanelCommand: dictionary.doctorPage.controlCommandCreate,
    onClickAction: () => {},
  },
  {
    controlPanelCommand: dictionary.doctorPage.controlCommandEdit,
    onClickAction: () => {},
  },
  {
    controlPanelCommand: dictionary.doctorPage.controlCommandDelete,
    onClickAction: (dispatch:Dispatch, appointmentID:string) => dispatch(deleteAppointment.pending({ id: appointmentID })),
  },
];

export default controlPanelCommandsList;
