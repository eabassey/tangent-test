import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetEmployees } from '../employees/store/actions/employees.actions';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  drillThroughEmployees$: Observable<any>;
  public modalRef: NgbModalRef;
  public p: any;
  constructor(private store: Store<any>, public modalService: NgbModal) {}

  ngOnInit() {
    this.store.dispatch(new GetEmployees());
  }

  public openModal(modalContent) {
    this.modalRef = this.modalService.open(modalContent, { container: '.app' });
  }

  public closeModal() {
    this.modalRef.close();
  }
}
