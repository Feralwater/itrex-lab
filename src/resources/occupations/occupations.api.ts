import instance from '../../services/api/api';
import { OccupationsResponse } from './occupations.types';
import { OCCUPATIONS_API } from './constants';

const occupations = {
  async fetchOccupations() {
    return instance.get<OccupationsResponse>(OCCUPATIONS_API.occupations());
  },
};

export default occupations;
