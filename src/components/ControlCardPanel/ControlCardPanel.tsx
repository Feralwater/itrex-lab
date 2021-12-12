import React, { useState } from 'react';
import { ControlCardPanelProps } from './ControlCardPanel.types';
import { useAppDispatch } from '../../hooks';
import dictionary from '../../pages/dictionary/pagesDictionary';
import { editResolution, resolution } from '../../redux/actions';
import ModalWindow from '../Modal/Modal';
import { CardControlList } from '..';
import { ResolutionModal } from './ResolutionModal';
import { ResolutionModalButtons } from './ResolutionModalButtons';

const ControlCardPanel: React.VFC<ControlCardPanelProps> = ({ appointmentID, setIsMenuOpen }) => {
  const dispatch = useAppDispatch();
  const [activeCreateResolutionModal, setActiveCreateResolutionModal] = useState<boolean>(false);
  const [activeEditResolutionModal, setActiveEditResolutionModal] = useState<boolean>(false);
  const [resolutionText, setResolutionText] = useState<string>('');
  const resolutionID = '924b0b40-5b47-11ec-83ad-671076b7e9dc';

  const saveHandler = () => {
    dispatch(resolution.pending({
      resolution: resolutionText,
      appointmentID,
    }));
    setActiveCreateResolutionModal(false);
  };
  const editHandler = () => {
    dispatch(editResolution.pending({
      resolution: resolutionText,
      resolutionID,
    }));
    setActiveEditResolutionModal(false);
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
          cancelHandler={cancelHandler}
          saveHandler={saveHandler}
          passiveButtonText={dictionary.resolutionModal.cancelButtonText}
          activeButtonText={dictionary.resolutionModal.createButtonText}
          activeButtonIcon="./svgImages/board-icon.svg"
          passiveButtonIcon="./svgImages/close-icon.svg"
        />
      </ModalWindow>
      <ModalWindow activeModal={activeEditResolutionModal} setActiveModal={setActiveEditResolutionModal}>
        <ResolutionModal
          resolutionText={resolutionText}
          setResolutionText={setResolutionText}
          appointmentID={appointmentID}
          resolutionModalTitle={dictionary.resolutionModal.editResolutionTitle}
        />
        <ResolutionModalButtons
          cancelHandler={cancelHandler}
          saveHandler={editHandler}
          passiveButtonText={dictionary.resolutionModal.cancelButtonText}
          activeButtonText={dictionary.resolutionModal.saveButtonText}
          activeButtonIcon="./svgImages/save-icon.svg"
          passiveButtonIcon="./svgImages/close-icon.svg"
        />
      </ModalWindow>
    </>
  );
};

export default ControlCardPanel;
