import instance from '../../services/api/api';
import { ResolutionData, ResolutionResponse } from './resolutions.types';

const resolutionsAPI = {
  async createResolution(data: ResolutionData) {
    return instance.post<ResolutionResponse>('resolutions', data);
  },
  async getResolutions(offset: number, limit:number) {
    return instance.get<ResolutionResponse>(`resolutions/doctor/me?offset=${offset}&limit=${limit}`);
  },
};

export default resolutionsAPI;
