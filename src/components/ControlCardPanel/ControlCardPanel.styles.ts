import styled from 'styled-components';
import {
  borders, colors, H2, shadows,
} from '../CommonStyles';

export const CommandsList = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  background: ${colors.white};
  border-radius: 8px;
  width: 272px;
  padding: 4px;
  position: absolute;
  top: 72px;
  right: 16px;
  box-shadow: ${shadows.link_water032_shadow};
`;

export const ControlCommand = styled.li`
  color: ${colors.dark_jungle_green};
  font-size: 1.5rem;
  line-height: 140%;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 6px;

  &:last-child {
    color: ${colors.radical_red};
  }

  &:hover {
    background: ${colors.alabaster};
  }
`;

export const SelectedPatientImage = styled.img`
  margin: 0 18px 0 0;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  object-fit: contain;
`;

export const ResolutionModalTitle = styled(H2)`
  margin: 0 0 24px 0;
`;

export const SelectedPatientInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 26px 0;
`;

export const ResolutionTextareaTitle = styled.label`
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 130%;
  color: ${colors.rock_blue};
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ResolutionModalBody = styled.div`
  padding: 40px;
`;

export const ResolutionModalFooter = styled.div`
  padding: 31px 40px 32px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${colors.alabaster};
  border-radius: 0 0 16px 16px;
`;

export const ModalErrorMessage = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  color: ${colors.brink_pink};
  position: absolute;
  top: 70%;
  left: 10%;
`;

export const ResolutionModalTextArea = styled.textarea`
  background: ${colors.white};
  border: ${borders.link_water1_border};
  box-sizing: border-box;
  box-shadow: ${shadows.link_water016_shadow};
  border-radius: 8px;
  overflow-y: auto;
  width: 100%;
  height: 160px;
  resize: none;
  outline: none;
  font-size: 1.5rem;
  line-height: 140%;
  color: ${colors.dark_jungle_green};
  padding: 16px 28px 18px 24px;

  &:focus {
    border: ${borders.cornflower_border};
  }
`;
