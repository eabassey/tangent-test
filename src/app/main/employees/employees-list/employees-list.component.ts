import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as employeesActions from '../store/actions/employees.actions';
import { Observable } from 'rxjs/Observable';
import { getEmployees } from '../store/selectors/employees.selectors';
import { NgxSpinnerService } from 'ngx-spinner';
import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeesListComponent implements OnInit, OnDestroy {
  employeesSubscription: Subscription;
  public employees: any[];
  public searchText: string;
  public p: any;

  constructor(private store: Store<any>, private spinner: NgxSpinnerService) {
    store.dispatch(new employeesActions.GetEmployees());
  }

  ngOnInit() {
    this.spinner.show();
    this.employeesSubscription = this.store
      .select(getEmployees)
      .subscribe(employees => {
        this.employees = employees;
        this.spinner.hide();
      });
  }

  ngOnDestroy() {
    this.employeesSubscription.unsubscribe();
  }
}
