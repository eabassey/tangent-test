import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { getUserInfo } from '../store/selectors/login.selectors';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class NoAuthGuard implements CanActivate {
  constructor(private store: Store<any>, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store
      .select(getUserInfo)
      .pipe(
        map(userInfo => !userInfo),
        tap(() => this.router.navigate(['/main']))
      );
  }
}
