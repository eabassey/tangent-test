import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { AuthGuard } from '../auth/guards/auth.guard';

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
        data: { breadcrumb: 'Dashboard' },
        canActivate: [AuthGuard]
      },
      {
        path: 'employees',
        component: EmployeesComponent,
        data: { breadcrumb: 'Employees' },
        canActivate: [AuthGuard],
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
        component: UserComponent,
        data: { breadcrumb: 'user' },
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            redirectTo: 'profile',
            pathMatch: 'prefix'
          },
          {
            path: 'profile',
            component: UserProfileComponent,
            data: { breadcrumb: 'profile' }
          }
        ]
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
