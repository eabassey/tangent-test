import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { getUserInfo } from '../store/selectors/login.selectors';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

/** A guard to prevent unauthenticated people from access certain areas of the application */
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store<any>,
    private router: Router,
    private authService: AuthService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.select(getUserInfo).pipe(
      map(userInfo => {
        if (!this.authService.token) {
          this.router.navigate(['/auth']);
        }
        return !!userInfo || !!this.authService.token;
      })
    );
  }
}
