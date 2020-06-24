import { User } from '../users/user.model';
export class Subject{
  constructor(
    public name: string,
    public period: number,
    public capacity: number,
    public active: boolean,
    public id?: string
  ) {}
}
