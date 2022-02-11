import { NavigateFunction } from 'react-router';
import { RoleName } from 'redux/reducers/reducers.types';
import {
  DEFAULT_PATH, ROLES, ROLES_ACCESS, PATH,
} from './constants';

const legalPaths = new Set(Object.values(PATH));

const checkUserRole = (history:NavigateFunction, apiRoleName: RoleName, path: string) => {
  const currentUserRoleAvailablePatches = ROLES_ACCESS[apiRoleName || ROLES.PUBLIC] || ROLES_ACCESS[ROLES.PUBLIC];
  const allow = currentUserRoleAvailablePatches.has(path);
  if (!allow && legalPaths.has(path)) {
    history(DEFAULT_PATH[apiRoleName || ROLES.PUBLIC]);
  }
};
export default checkUserRole;
