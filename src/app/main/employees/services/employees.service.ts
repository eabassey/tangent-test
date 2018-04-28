import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../../auth/services/auth.service';

@Injectable()
export class EmployeesService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  getEmployees(): Observable<any> {
    const headers = this.authService.headers;
    return this.httpClient.get<any>(environment.urls.employees_api_endpoint, {
      headers
    });
  }
}
