import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as fromProfileActions from '../actions/user-profile.actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserProfileEffects {
  constructor(private action: Actions, private userService: UserService) {}

  @Effect()
  getUserInfo$ = this.action.ofType(fromProfileActions.GET_USER_PROFILE).pipe(
    switchMap(() => {
      return this.userService.getUserProfile();
    }),
    map(profile => new fromProfileActions.GetUserProfileSuccess(profile)),
    catchError(error => of(new fromProfileActions.GetUserProfileFail(error)))
  );
}
