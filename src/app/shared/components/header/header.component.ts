import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { getUserInfo } from '../../../auth/store/selectors/login.selectors';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { getAppSettings } from '../../../store/selectors/app-settings.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit, OnDestroy {
  userInfo$: Observable<any>;
  showInfoContent = false;
  settings;
  settingsSubscription: Subscription;
  constructor(
    private store: Store<any>,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.settingsSubscription = this.store
      .select(getAppSettings)
      .subscribe(settings => (this.settings = settings));
    this.userInfo$ = this.store.select(getUserInfo);
  }

  viewProfile() {
    this.router.navigate(['/main/user/profile']);
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.settingsSubscription.unsubscribe();
  }
}
