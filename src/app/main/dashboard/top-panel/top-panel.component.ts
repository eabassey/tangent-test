import { Component, DoCheck, ViewEncapsulation, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  geAllEmployeesCount,
  geStaffEmployeesCount,
  geBirthdayEmployeesCount,
  getDrillThroughFromTopPanel
} from '../store/selectors/top-panel.selectors';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { race } from 'rxjs/observable/race';
import {
  DrillToAllEmployees,
  DrillToStaffEmployees,
  DrillToBirthdayEmployees
} from '../store/actions/top-panel.actions';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopPanelComponent implements OnInit {
  allEmployees$;
  allEmployeesBgColor = { domain: ['#F47B00'] };

  staffEmployees$;
  staffEmployeesBgColor = { domain: ['#2F3E9E'] };

  birthDaysThisMonth$;
  birthDaysThisMonthBgColor = { domain: ['#606060'] };

  drillThroughEmployees$: Observable<any>;
  drillThroughTitle: string;
  public modalRef: NgbModalRef;
  public p: any;

  constructor(private store: Store<any>, public modalService: NgbModal) {}
  ngOnInit() {
    this.drillThroughEmployees$ = this.store.select(
      getDrillThroughFromTopPanel
    );

    this.allEmployees$ = this.store
      .select(geAllEmployeesCount)
      .pipe(map(num => [{ name: 'All Employees', value: num }]));

    this.staffEmployees$ = this.store
      .select(geStaffEmployeesCount)
      .pipe(map(num => [{ name: 'Staff Employees', value: num }]));

    this.birthDaysThisMonth$ = this.store
      .select(geBirthdayEmployeesCount)
      .pipe(map(num => [{ name: 'Birthdays This Month', value: num }]));
  }

  infoLabelFormat(c): string {
    switch (c.data.name) {
      case 'All Employees':
        return `<i class="fa fa-users mr-2"></i>${c.label}`;
      case 'Staff Employees':
        return `<i class="fa fa-user mr-2"></i>${c.label}`;
      case 'Birthdays This Month':
        return `<i class="fa fa-birthday-cake mr-2"></i>${c.label}`;
      default:
        return c.label;
    }
  }

  public openModal(modalContent) {
    this.modalRef = this.modalService.open(modalContent, { container: '.app' });
  }

  public closeModal() {
    this.modalRef.close();
  }

  onSelect(event) {
    console.log(event);
  }

  displayAllEmployees(modalContent, event) {
    this.drillThroughTitle = event.name;
    this.store.dispatch(new DrillToAllEmployees());
    this.openModal(modalContent);
  }

  displayStaffEmployees(modalContent, event) {
    this.drillThroughTitle = event.name;
    this.store.dispatch(new DrillToStaffEmployees());
    this.openModal(modalContent);
  }

  displayBirthdayEmployees(modalContent, event) {
    this.drillThroughTitle = event.name;
    this.store.dispatch(new DrillToBirthdayEmployees());
    this.openModal(modalContent);
  }
}
