import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { AppSettings } from './app-settings.model';
import { Store } from '@ngrx/store';
import { AuthService } from './auth/services/auth.service';
import * as fromLoginActions from './auth/store/actions/login.actions';
import { Router } from '@angular/router';
import { getAppSettings } from './store/selectors/app-settings.selectors';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {
  settings;
  settingsSubscription: Subscription;
  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<any>
  ) {}

  ngOnInit() {
    this.settingsSubscription = this.store
      .select(getAppSettings)
      .subscribe(settings => (this.settings = settings));

    if (!!this.authService.token) {
      this.store.dispatch(
        new fromLoginActions.UseTokenToAccess(this.authService.token)
      );
    } else {
      this.router.navigate(['/auth']);
    }
  }

  ngOnDestroy() {
    this.settingsSubscription.unsubscribe();
  }
}
