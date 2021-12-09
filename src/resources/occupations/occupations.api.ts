import instance from '../../services/api/api';
import { SpecializationsResponse } from './occupations.types';

const occupations = {
  async getOccupations() {
    return instance.get<SpecializationsResponse>('specializations');
  },
};

export default occupations;
