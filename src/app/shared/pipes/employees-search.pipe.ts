import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'employeesSearch', pure: false })
export class EmployeesSearchPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    const searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(employee => {
        if (employee.first_name || employee.last_name) {
          return (
            employee.first_name.search(searchText) !== -1 ||
            employee.last_name.search(searchText) !== -1
          );
        } else {
          return employee.email.search(searchText) !== -1;
        }
      });
    }
  }
}
