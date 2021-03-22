export interface AuthModel {
  token: string;
  expired: number;
  roles: string[];
  expiresDate: Date;
}

export class UserGoogle {
  name: string;
  photoUrl: string;
  email: string;
  constructor(name: string, photoUrl: string, email: string) {
    this.name = name;
    this.photoUrl = photoUrl;
    this.email = email;
  }
}
