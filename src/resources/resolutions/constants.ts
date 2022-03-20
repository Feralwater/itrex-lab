export const RESOLUTIONS_API = {
  resolutions: () => 'resolutions',
  resolutionsByResolutionID: (resolutionID?:string) => `resolutions/${resolutionID}`,
  resolutionsDoctorMe: () => 'resolutions/doctor/me',
  resolutionsPatientMe: () => 'resolutions/patient/me',
  resolutionsDoctorSpecialization: (specializationID:string) => `resolutions/doctor/specialization/${specializationID}`,
};
