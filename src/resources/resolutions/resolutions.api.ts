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
  async fetchResolutionsForDoctor(offset: number, limit:number, name?:string) {
    return instance.get<ResolutionResponse>(RESOLUTIONS_API.resolutionsDoctorMe(), {
      params: {
        offset,
        limit,
        name,
      },
    });
  },
  async fetchResolutionsForPatient(offset: number, limit:number, name?:string) {
    return instance.get<ResolutionsForPatientResponse>(RESOLUTIONS_API.resolutionsPatientMe(), {
      params: {
        offset,
        limit,
        name,
      },
    });
  },
};

export default resolutionsAPI;
