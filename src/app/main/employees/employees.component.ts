import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
