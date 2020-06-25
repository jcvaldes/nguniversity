export class Calification{
  constructor(
    public StudentId: number,
    public CourseId: number,
    public TeacherId: number,
    public note: number,
    public id?: string
  ) {}
}
