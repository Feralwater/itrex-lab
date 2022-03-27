import React, {
  useCallback, useEffect, useImperativeHandle, useState,
} from 'react';
import { createPortal } from 'react-dom';
import { ModalProps } from './Modal.types';
import { Modal, ModalContent } from './Modal.styles';

const modalElement = document.getElementById('modal-root');

export const ModalWindow: React.FC<ModalProps> = ({ children, defaultOpened = false }, ref) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpened);

  const close = useCallback(() => setIsOpen(false), []);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close,
  }), [close]);

  const handleEscape = useCallback((event) => {
    if (event.keyCode === 27) close();
  }, [close]);

  useEffect(() => {
    if (isOpen) document.addEventListener('keydown', handleEscape, false);
    return () => {
      document.removeEventListener('keydown', handleEscape, false);
    };
  }, [handleEscape, isOpen]);

  return createPortal(isOpen
    ? (
      <Modal>
        <ModalContent>
          {children}
        </ModalContent>
      </Modal>
    ) : null, modalElement);
};
