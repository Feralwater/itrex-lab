import instance from '../../services/api/api';
import { SpecializationsResponse } from './occupations.types';
import { SPECIALIZATIONS_API } from './constants';

const occupations = {
  async getOccupations() {
    return instance.get<SpecializationsResponse>(SPECIALIZATIONS_API.specializations());
  },
};

export default occupations;
