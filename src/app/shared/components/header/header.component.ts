import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppSettingsService } from '../../../app-settings.service';
import { AppSettings } from '../../../app-settings.model';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { getUserInfo } from '../../../auth/store/selectors/login.selectors';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  userInfo$: Observable<any>;
  showInfoContent = false;
  settings: AppSettings;
  constructor(
    public appSettingsService: AppSettingsService,
    private store: Store<any>,
    private authService: AuthService,
    private router: Router
  ) {
    this.settings = this.appSettingsService.settings;
  }

  ngOnInit() {
    this.userInfo$ = this.store.select(getUserInfo);
  }

  viewProfile() {
    this.router.navigate(['/main/user/profile']);
  }

  logout() {
    this.authService.logout();
  }
}
