import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calification'
})
export class CalificationPipe implements PipeTransform {
  transform(note: number): string {
    if (note >= 4 && note <= 6) {
      return 'aprobado';
    } else if (note < 4) {
      return 'desaprobado';
    } else {
      return 'promocionado';
    }
  }
}
