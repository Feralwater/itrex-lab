import React from 'react';
import { ModalProps } from './Modal.types';
import { Modal, ModalContent } from './Modal.styles';

const ModalWindow: React.FC<ModalProps> = (
  { activeModal, setActiveModal, children },
) => (
  <Modal onClick={() => setActiveModal(false)} isActive={activeModal}>
    <ModalContent onClick={((event) => event.stopPropagation())} isActive={activeModal}>
      {children}
    </ModalContent>
  </Modal>
);

export default ModalWindow;
