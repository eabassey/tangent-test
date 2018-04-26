import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'race', pure: false })
export class RacePipe implements PipeTransform {
  transform(value, args?): string {
    switch (value) {
      case 'B':
        return 'Black African';
      case 'C':
        return 'Coloured';
      case 'I':
        return 'Indian';
      case 'W':
        return 'White';
      case 'N':
        return 'None Dominant';
    }
  }
}
