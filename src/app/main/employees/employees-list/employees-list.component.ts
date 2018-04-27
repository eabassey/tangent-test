import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import * as employeesActions from '../store/actions/employees.actions';
import { Observable } from 'rxjs/Observable';
import { getEmployees } from '../store/selectors/employees.selectors';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeesListComponent implements OnInit {
  employees$: Observable<any>;
  public employees: any[];
  public searchText: string;
  public p: any;

  constructor(private store: Store<any>) {
    store.dispatch(new employeesActions.GetEmployees());
  }

  ngOnInit() {
    this.employees$ = this.store.select(getEmployees);
  }
}
