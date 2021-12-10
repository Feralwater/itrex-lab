import { Dispatch, SetStateAction } from 'react';

export interface ModalProps{
  activeModal: boolean
  setActiveModal: Dispatch<SetStateAction<boolean>>;
}
