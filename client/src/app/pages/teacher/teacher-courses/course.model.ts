export class Course{
  constructor(
    public name: string,
    public period: number,
    public capacity: number,
    public active: boolean,
    public select?: boolean,
    public id?: string
  ) {}
}
