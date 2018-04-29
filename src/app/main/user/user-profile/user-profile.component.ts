import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetUserProfile } from '../store/actions/user-profile.actions';
import { Observable } from 'rxjs/Observable';
import { getUserProfile } from '../store/selectors/user-profile.selectors';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserProfileComponent implements OnInit {
  userProfile$: Observable<any>;
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(new GetUserProfile());
    this.userProfile$ = this.store.select(getUserProfile);
  }
}
