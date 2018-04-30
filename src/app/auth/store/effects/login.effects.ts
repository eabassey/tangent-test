import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import * as fromActions from '../actions/login.actions';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Injectable()
export class LoginEffects {
  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router,
    private spinner: Ng4LoadingSpinnerService
  ) {}

  @Effect()
  login$ = this.actions.ofType(fromActions.LOGIN).pipe(
    switchMap((action: fromActions.Login) => {
      this.spinner.show();
      const { username, password } = action.payload;
      return this.authService.login({ username, password });
    }),
    map(token => {
      this.spinner.hide();
      return new fromActions.UseTokenToAccess(token);
    })
  );

  @Effect()
  useTokenToAccess$ = this.actions
    .ofType(fromActions.USE_TOKEN_TO_ACCCESS)
    .pipe(
      switchMap((action: fromActions.UseTokenToAccess) => {
        this.spinner.show();
        const token = action.payload;
        return this.authService.getLoggedInUserInfo(token);
      }),
      tap(() => {
        this.spinner.hide();
        this.router.navigate(['/main']);
      }),
      map(userInfo => new fromActions.LoginSuccess(userInfo)),
      catchError(error => of(new fromActions.LoginFail(error)))
    );
}
