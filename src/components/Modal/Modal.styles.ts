import styled from 'styled-components';
import { colors } from '../CommonStyles';

interface ModalProps{
  isActive: boolean
}

export const Modal = styled.div<ModalProps>`
  height: 100vh;
  width: 100vw;
  background-color: ${colors.gravel['060']};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .5s;
  opacity: ${(props) => (props.isActive ? '1' : '0')};
  pointer-events: ${(props) => (props.isActive ? 'all' : 'none')};
  z-index: 1000;
`;

export const ModalContent = styled.div<ModalProps>`
  border-radius: 16px;
  background-color: ${colors.white};
  transform: ${(props) => (props.isActive ? 'scale(1)' : 'scale(.5)')};
  transition: .5s all;
  width: 560px;
  min-height: 467px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
