import { User } from '../users/user.model';
export class Subject{
  constructor(
    public name: string,
    public active: boolean,
    public id?: string
  ) {}
}
