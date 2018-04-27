import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'gender', pure: false })
export class GenderPipe implements PipeTransform {
  transform(value, args?): string {
    switch (value) {
      case 'M':
        return 'Male';
      case 'F':
        return 'Female';
    }
  }
}
