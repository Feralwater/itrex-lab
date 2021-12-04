import instance from '../../services/api/api';
import { ResolutionData, ResolutionResponse } from './resolutions.types';

const resolutions = {
  async createResolution(data: ResolutionData) {
    return instance.post<ResolutionResponse>('resolutions', data);
  },
};

export default resolutions;
