import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'review', pure: false })
export class ReviewPipe implements PipeTransform {
  transform(value, args?): string {
    switch (value) {
      case 'P':
        return 'Performance Increase';
      case 'S':
        return 'Starting Salary';
      case 'A':
        return 'Annual Increase';
      case 'E':
        return 'Expectation Review';
    }
  }
}
