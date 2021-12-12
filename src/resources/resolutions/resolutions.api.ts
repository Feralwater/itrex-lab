import instance from '../../services/api/api';
import {
  EditResolutionData, EditResolutionResponse, ResolutionData, ResolutionResponse, ResolutionsForPatientResponse,
} from './resolutions.types';

const resolutionsAPI = {
  async createResolution(data: ResolutionData) {
    return instance.post<ResolutionResponse>('resolutions', data);
  },
  async editResolution({ resolution, resolutionID }: EditResolutionData) {
    return instance.patch<EditResolutionResponse>(`resolutions/${resolutionID}`, { resolution });
  },
  async getResolutions(offset: number, limit:number) {
    return instance.get<ResolutionResponse>('resolutions/doctor/me', {
      params: {
        offset,
        limit,
      },
    });
  },
  async getResolutionsForPatient(offset: number, limit:number) {
    return instance.get<ResolutionsForPatientResponse>('resolutions/patient/me', {
      params: {
        offset,
        limit,
      },
    });
  },
};

export default resolutionsAPI;
