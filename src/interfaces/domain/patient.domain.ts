/*
 * Patient domain
 */

// Patient domain interface
interface IPatient {
  name: string;
  identityNumber: string;
  genre: string;
  nationality: string;
  address: string;
  socialSecurity: string;
  phone: string;
  altPhone?: string | null;
  email: string;
}

// Patient domain class
class Patient implements IPatient {
  name: string;
  identityNumber: string;
  genre: string;
  nationality: string;
  address: string;
  socialSecurity: string;
  phone: string;
  altPhone?: string | null;
  email: string;

  constructor(
    name: string,
    identityNumber: string,
    genre: string,
    nationality: string,
    address: string,
    socialSecurity: string,
    phone: string,
    email: string,
    altPhone?: string | null,
  ) {
    this.name = name;
    this.identityNumber = identityNumber;
    this.genre = genre;
    this.nationality = nationality;
    this.address = address;
    this.socialSecurity = socialSecurity;
    this.phone = phone;
    this.email = email;
    this.altPhone = altPhone;
  }
}

export { Patient };
export type { IPatient };
