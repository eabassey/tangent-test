import { Component, DoCheck, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopPanelComponent {
  public allEmployees = [{ name: 'All Employees', value: 21 }];
  public allEmployeesBgColor = { domain: ['#F47B00'] };

  public staffEmployees = [{ name: 'Staff Employees', value: 789 }];
  public staffEmployeesBgColor = { domain: ['#2F3E9E'] };

  public birthDaysThisMonth = [{ name: 'Birthdays This Month', value: 7 }];
  public birthDaysThisMonthBgColor = { domain: ['#606060'] };

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
