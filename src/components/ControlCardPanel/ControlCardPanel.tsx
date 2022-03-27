import React, { useCallback, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { dictionary } from 'pages';
import { appointmentsForDoctorSlice, selectAppointmentsForDoctor } from 'redux/reducers';
import { ControlCardPanelProps } from './ControlCardPanel.types';
import { ModalWindow, OpenCloseHandle } from '../Modal';
import { CardControlList } from '..';
import { ResolutionModal } from './ResolutionModal';
import { ResolutionModalButtons } from './ResolutionModalButtons';

export const ControlCardPanel: React.VFC<ControlCardPanelProps> = ({
  appointmentID,
  setIsMenuOpen,
  resolutionID,
}) => {
  const dispatch = useAppDispatch();
  const [resolutionText, setResolutionText] = useState<string>('');
  const { appointments } = useAppSelector(selectAppointmentsForDoctor);
  const editResolutionInitialText = appointments?.find((appointment) => appointment.resolution?.appointment_id === appointmentID)?.resolution?.resolution;
  const [editResolutionText, setEditResolutionText] = useState<string>(editResolutionInitialText || '');

  const saveHandler = useCallback(() => {
    dispatch(appointmentsForDoctorSlice.actions.createResolutionPending({
      resolution: resolutionText,
      appointmentID,
    }));

    setIsMenuOpen(false);
  }, [resolutionText, appointmentID]);
  const editHandler = useCallback(() => {
    dispatch(appointmentsForDoctorSlice.actions.editResolutionPending({
      resolution: editResolutionText,
      resolutionID,
    }));

    setIsMenuOpen(false);
  }, [editResolutionText, resolutionID]);
  const cancelHandler = () => {
    setIsMenuOpen(false);
  };
  const createModal = useRef<OpenCloseHandle>(null);
  const editModal = useRef<OpenCloseHandle>(null);

  const openCreateModalHandler = () => createModal.current?.open();
  const openEditModalHandler = () => editModal.current?.open();

  return (
    <>
      <CardControlList
        openCreateModalHandler={openCreateModalHandler}
        appointmentID={appointmentID}
        openEditModalHandler={openEditModalHandler}
      />
      <ModalWindow ref={createModal}>
        <>
          <ResolutionModal
            resolutionText={resolutionText}
            setResolutionText={setResolutionText}
            appointmentID={appointmentID}
            resolutionModalTitle={dictionary.resolutionModal.createResolutionTitle}
          />
          <ResolutionModalButtons
            disabled={resolutionText.length < 2}
            activeButtonType="button"
            cancelHandler={cancelHandler}
            saveHandler={saveHandler}
            passiveButtonText={dictionary.resolutionModal.cancelButtonText}
            activeButtonText={dictionary.resolutionModal.createButtonText}
            activeButtonIcon="/svg/board-icon.svg"
            passiveButtonIcon="/svg/close-icon.svg"
          />
        </>
      </ModalWindow>
      <ModalWindow ref={editModal}>
        <>
          <ResolutionModal
            resolutionText={editResolutionText}
            setResolutionText={setEditResolutionText}
            appointmentID={appointmentID}
            resolutionModalTitle={dictionary.resolutionModal.editResolutionTitle}
          />
          <ResolutionModalButtons
            disabled={editResolutionText.length < 2}
            activeButtonType="button"
            cancelHandler={cancelHandler}
            saveHandler={editHandler}
            passiveButtonText={dictionary.resolutionModal.cancelButtonText}
            activeButtonText={dictionary.resolutionModal.saveButtonText}
            activeButtonIcon="/svg/save-icon.svg"
            passiveButtonIcon="/svg/close-icon.svg"
          />
        </>
      </ModalWindow>
    </>
  );
};
