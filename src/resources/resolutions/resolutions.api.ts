import instance from '../../services/api/api';
import {
  EditResolutionData, EditResolutionResponse, ResolutionData, ResolutionResponse, ResolutionsForPatientResponse,
} from './resolutions.types';
import { RESOLUTIONS_API } from './constants';

const resolutionsAPI = {
  async createResolution(data: ResolutionData) {
    return instance.post<ResolutionResponse>(RESOLUTIONS_API.resolutions(), data);
  },
  async editResolution({ resolution, resolutionID }: EditResolutionData) {
    return instance.patch<EditResolutionResponse>(RESOLUTIONS_API.resolutionsByResolutionID(resolutionID), { resolution });
  },
  async fetchResolutions(offset: number, limit:number) {
    return instance.get<ResolutionResponse>(RESOLUTIONS_API.resolutionsDoctorMe(), {
      params: {
        offset,
        limit,
      },
    });
  },
  async fetchResolutionsForPatient(offset: number, limit:number) {
    return instance.get<ResolutionsForPatientResponse>(RESOLUTIONS_API.resolutionsPatientMe(), {
      params: {
        offset,
        limit,
      },
    });
  },
};

export default resolutionsAPI;
