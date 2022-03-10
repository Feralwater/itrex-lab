export const PATIENTS_API = {
  allPatients: () => 'admin/patients',
  updatePatient: (id:string) => `admin/patients/${id}`,
  deletePatient: (id:string) => `admin/patients/${id}`,
  createPatient: () => 'admin/patients/',
};
