import styled from 'styled-components';
import { colors } from 'components/CommonStyles';
import { CommandsList } from 'components/ControlCardPanel/ControlCardPanel.styles';

export const TableCell = styled.td`
  padding: 10px 25px 10px 0;
  border-bottom: solid ${colors.link_water['032']};
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:first-child {
    border-radius: 4px 0 0 4px;
    padding: 10px 0 10px 40px;
  }

  &:last-child {
    border-radius: 0 4px 4px 0;
    padding: 10px 12px 10px 0;
  }
`;

interface HeaderCell {
  specializationCell?: boolean
}

export const TableHeaderCell = styled(TableCell)<HeaderCell>`
  width: ${(props) => (props.specializationCell ? '17%' : '20%')};

  &:last-child {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

export const SettingsWrapper = styled.div`
  position: relative;
  overflow: visible;
`;

export const LastAdminTableCell = styled.td`
  border-bottom: 3px solid ${colors.link_water['032']};
  box-sizing: border-box;
  overflow: visible;
  white-space: nowrap;
  border-radius: 0 4px 4px 0;
  padding: 10px 12px 10px 0;
  display: flex;
  justify-content: flex-end;

  & img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }
`;

export const AdminCommandsList = styled(CommandsList)`
  top: 20px;
  right: 40px;
`;

export const AgreeQuestion = styled.div`
  color: ${colors.radical_red};
  font-size: 20px;
  padding: 100px 0;
  text-align: center;
`;

export const PatientData = styled.div`
  padding: 30px;
`;

export const UserRoleAndPhoto = styled.div`
  padding: 0 0 15px 0;
  display: flex;
  align-items: center;
  gap: 15px;
`;
