import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { breadcrumb: 'Dashboard' }
      },
      {
        path: 'employees',
        component: EmployeesComponent,
        data: { breadcrumb: 'Employees' },
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'prefix'
          },
          {
            path: 'list',
            component: EmployeesListComponent,
            data: { breadcrumb: 'list' }
          }
        ]
      },
      {
        path: 'user',
        component: UserComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
