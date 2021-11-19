import instance from '../../services/api/api';
import { SpecializationsResponseType } from './occupations.types';

const occupations = {
  async getOccupations() {
    return instance.get<SpecializationsResponseType>('specializations');
  },
};

export default occupations;
