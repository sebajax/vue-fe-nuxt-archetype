interface PatientForm {
  name: string;
  rut: string | unknown;
  genre: string;
  nationality: string;
  address: string;
  socialSecurity: string;
  phone: string | unknown;
  altPhone?: string | null;
  email: string;
}

export type { PatientForm };
