import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import * as fromActions from '../actions/login.actions';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginEffects {
  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  @Effect()
  login$ = this.actions.ofType(fromActions.LOGIN).pipe(
    switchMap((action: fromActions.Login) => {
      const { username, password } = action.payload;
      return this.authService.login({ username, password });
    }),
    switchMap(token => {
      return this.authService.getLoggedInUserInfo(token);
    }),
    tap(() => this.router.navigate(['/main'])),
    map(userInfo => new fromActions.LoginSuccess(userInfo)),
    catchError(error => of(new fromActions.LoginFail(error)))
  );
}
