import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { dictionary } from 'pages';
import { resolutionsOnPage, resolutionsOnPageOffset } from 'pages/Resolutions/constants';
import {
  resolutionSlice, resolutionsSlice, selectAppointmentsForDoctor,
} from 'redux/reducers';
import { editResolutionSlice } from 'redux/reducers/editResolution.reducer';
import { ControlCardPanelProps } from './ControlCardPanel.types';
import { ModalWindow } from '../Modal';
import { CardControlList } from '..';
import { ResolutionModal } from './ResolutionModal';
import { ResolutionModalButtons } from './ResolutionModalButtons';

export const ControlCardPanel: React.VFC<ControlCardPanelProps> = ({
  appointmentID,
  setIsMenuOpen,
  resolutionID,
}) => {
  const dispatch = useAppDispatch();
  const [activeCreateResolutionModal, setActiveCreateResolutionModal] = useState<boolean>(false);
  const [activeEditResolutionModal, setActiveEditResolutionModal] = useState<boolean>(false);
  const [resolutionText, setResolutionText] = useState<string>('');
  const { appointments } = useAppSelector(selectAppointmentsForDoctor);
  const editResolutionInitialText = appointments?.find((appointment) => appointment.resolution?.appointment_id === appointmentID)?.resolution?.resolution;
  const [editResolutionText, setEditResolutionText] = useState<string>(editResolutionInitialText || '');

  const saveHandler = () => {
    dispatch(resolutionSlice.actions.pending({
      resolution: resolutionText,
      appointmentID,
    }));
    setActiveCreateResolutionModal(false);
    setIsMenuOpen(false);
  };
  const editHandler = () => {
    dispatch(editResolutionSlice.actions.pending({
      resolution: editResolutionText,
      resolutionID,
    }));
    dispatch(resolutionsSlice.actions.pending({
      offset: resolutionsOnPageOffset,
      limit: resolutionsOnPage,
    }));
    setActiveEditResolutionModal(false);
    setIsMenuOpen(false);
  };
  const cancelHandler = () => {
    setActiveEditResolutionModal(false);
    setIsMenuOpen(false);
  };

  return (
    <>
      <CardControlList
        setActiveCreateResolutionModal={setActiveCreateResolutionModal}
        appointmentID={appointmentID}
        setActiveEditResolutionModal={setActiveEditResolutionModal}
      />
      <ModalWindow activeModal={activeCreateResolutionModal} setActiveModal={setActiveCreateResolutionModal}>
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
      </ModalWindow>
      <ModalWindow activeModal={activeEditResolutionModal} setActiveModal={setActiveEditResolutionModal}>
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
      </ModalWindow>
    </>
  );
};
