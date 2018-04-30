import { Component, DoCheck, ViewEncapsulation, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  geAllEmployeesCount,
  geStaffEmployeesCount,
  geBirthdayEmployeesCount
} from '../store/selectors/top-panel.selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopPanelComponent implements OnInit {
  public allEmployees$;
  public allEmployeesBgColor = { domain: ['#F47B00'] };

  public staffEmployees$;
  public staffEmployeesBgColor = { domain: ['#2F3E9E'] };

  public birthDaysThisMonth$;
  public birthDaysThisMonthBgColor = { domain: ['#606060'] };
  constructor(private store: Store<any>) {}
  ngOnInit() {
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

  public infoLabelFormat(c): string {
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

  public onSelect(event) {
    console.log(event);
  }
}
