import React from 'react';
import { CreateResolutionModalProps } from './CreateResolutionModal.types';
import { Modal, ModalContent } from './CreateResolutionModal.styles';

const CreateResolutionModal: React.FC<CreateResolutionModalProps> = (
  { activeModal, setActiveModal, children },
) => (
  <Modal onClick={() => setActiveModal(false)} isActive={activeModal}>
    <ModalContent onClick={((event) => event.stopPropagation())} isActive={activeModal}>
      {children}
    </ModalContent>
  </Modal>
);

export default CreateResolutionModal;
