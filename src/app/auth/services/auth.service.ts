import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  tokenKey = 'token';
  constructor(private httpClient: HttpClient) {}

  get token(): string {
    return localStorage.getItem(this.tokenKey);
  }

  set token(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.httpClient
      .post(environment.urls.token_endpoint, credentials)
      .pipe(tap(res => (this.token = res.token)));
  }

  getCurrentUser(): Observable<any> {
    return this.httpClient.get<any>(environment.urls.userinfo_endpoint);
  }

  get isAuthenticated(): boolean {
    return !!this.token;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}