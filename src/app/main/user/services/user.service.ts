import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}

  // getCurrentUser(): Observable<any> {
  //   return this.httpClient.get<any>(environment.urls.userinfo_endpoint);
  // }

  getUserProfile(): Observable<any> {
    return this.httpClient.get<any>(
      environment.urls.employee_profile_api_endpoint
    );
  }

  get isAuthenticated(): boolean {
    return true;
  }
}
