import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as employeesActions from '../store/actions/employees.actions';
import { Observable } from 'rxjs/Observable';
import { getEmployees } from '../store/selectors/employees.selectors';
import { Subscription } from 'rxjs/Subscription';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeesListComponent implements OnInit, OnDestroy {
  employeesSubscription: Subscription;
  public employees: any[];
  public employee;
  public form: FormGroup;
  public modalRef: NgbModalRef;
  public searchText: string;
  public p: any;

  constructor(
    private store: Store<any>,
    public modalService: NgbModal,
    public spinner: Ng4LoadingSpinnerService
  ) {
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

  public openModal(modalContent, employee) {
    this.employee = employee;
    this.modalRef = this.modalService.open(modalContent, { container: '.app' });
  }

  public closeModal() {
    this.modalRef.close();
  }

  ngOnDestroy() {
    this.employeesSubscription.unsubscribe();
  }
}
