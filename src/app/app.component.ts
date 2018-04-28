import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AppSettings } from './app-settings.model';
import { AppSettingsService } from './app-settings.service';
import { Store } from '@ngrx/store';
import { AuthService } from './auth/services/auth.service';
import * as fromLoginActions from './auth/store/actions/login.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  public settings: AppSettings;
  constructor(
    public appSettingsService: AppSettingsService,
    private authService: AuthService,
    private router: Router,
    private store: Store<any>
  ) {
    this.settings = this.appSettingsService.settings;
  }

  ngOnInit() {
    if (!!this.authService.token) {
      this.store.dispatch(
        new fromLoginActions.UseTokenToAccess(this.authService.token)
      );
    } else {
      this.router.navigate(['/auth']);
    }
  }
}
