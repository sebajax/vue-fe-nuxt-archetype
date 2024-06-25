/*
 * Patient domain
 */

// Patient domain interface
interface IPatient {
  name: string;
  email: string;
}

// Patient domain class
class Patient implements IPatient {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

export { Patient };
export type { IPatient };
