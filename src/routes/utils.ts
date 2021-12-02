import {
  DEFAULT_PATH, ROLES, ROLES_ACCESS, PATH,
} from './constants';
import { RoleName } from '../redux/reducers/reducers.types';

const legalPaths = new Set(Object.values(PATH));

const checkUserRole = (history: import('history').History, apiRoleName: RoleName, path: string) => {
  const currentUserRoleAvailablePatches = ROLES_ACCESS[apiRoleName || 'PUBLIC'] || ROLES_ACCESS[ROLES.PUBLIC];
  const allow = currentUserRoleAvailablePatches.has(path);
  if (!allow && legalPaths.has(path)) {
    history.push(DEFAULT_PATH[apiRoleName || 'PUBLIC']);
  }
};
export default checkUserRole;
