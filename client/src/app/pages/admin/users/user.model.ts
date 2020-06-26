

export interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmpassword?: string;
  roles?: any[];
  img?: string;
  id?: string;
}
export class User implements IUser{
  constructor(
    public firstname: string,
    public lastname: string,
    public email: string,
    public password: string,
    public confirmpassword?: string,
    public roles?: any[],
    public img?: string,
    public id?: string
  ) {}
}
