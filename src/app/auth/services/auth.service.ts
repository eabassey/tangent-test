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

  /** A getter for the required header to be sent with requests. */
  get headers() {
    return {
      Authorization: `Token ${this.token}`
    };
  }

  /** A getter for the access token from local storage */
  get token(): string {
    return localStorage.getItem(this.tokenKey);
  }

  /** A setter of the access token to local storage
   * @param {string} token The token to store in local storage
   */
  set token(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  /** Main login functionality to retrieve token
   * @param {any} credentials An object containing username and password of the user
   */
  login(credentials: { username: string; password: string }): Observable<any> {
    return this.httpClient
      .post(environment.urls.token_endpoint, credentials)
      .pipe(map((res: any) => res.token), tap(token => (this.token = token)));
  }

  /** Getting the basic user information of the current user
   * @param {string} token The token to authorize retrieving the information
   */
  getLoggedInUserInfo(token: string): Observable<any> {
    const headers = { Authorization: `Token ${token}` };
    return this.httpClient.get<any>(environment.urls.userinfo_endpoint, {
      headers
    });
  }

  /** Logging out of the application */
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/auth']);
  }
}
