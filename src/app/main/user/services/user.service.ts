import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../auth/services/auth.service';

@Injectable()
export class UserService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  getUserProfile(): Observable<any> {
    const headers = this.authService.headers;
    return this.httpClient.get<any>(
      environment.urls.employee_profile_api_endpoint,
      { headers }
    );
  }

}
