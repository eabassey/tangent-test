import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeesListComponent implements OnInit {
  public employees: any[];
  public searchText: string;

  constructor() {}

  ngOnInit() {
    this.employees = this.getEmployees();
  }

  getEmployees() {
    return [
      {
        first_name: 'Kim',
        last_name: 'Jonyung',
        is_active: true,
        position: {
          name: 'Software Tester',
          level: 'Senior'
        },
        email: 'kim@gmail.com',
        gender: 'M',
        race: 'B'
      },
      {
        first_name: 'Donald',
        last_name: 'Trump',
        is_active: true,
        position: {
          name: 'Software Architect',
          level: 'Senior'
        },
        email: 'donald@gmail.com',
        gender: 'M',
        race: 'W'
      }
    ];
  }
}
