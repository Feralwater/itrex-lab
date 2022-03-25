export const DOCTORS_API = {
  doctorsSpecializationById: (id:string) => `doctors/specialization/${id}`,
  allDoctors: () => 'admin/doctors',
  updateDoctor: (id:string) => `admin/doctors/${id}`,
  deleteDoctor: (id:string) => `admin/doctors/${id}`,
  createDoctor: () => 'admin/doctors',
};
