import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  tokenKey = 'token';
  constructor(private httpClient: HttpClient, private router: Router) {}

  get headers() {
    return {
      Authorization: `Token ${this.token}`
    };
  }

  get token(): string {
    return localStorage.getItem(this.tokenKey);
  }

  set token(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.httpClient
      .post(environment.urls.token_endpoint, credentials)
      .pipe(map((res: any) => res.token), tap(token => (this.token = token)));
  }

  getLoggedInUserInfo(token: string): Observable<any> {
    const headers = { Authorization: `Token ${token}` };
    return this.httpClient.get<any>(environment.urls.userinfo_endpoint, {
      headers
    });
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['auth']);
  }
}
