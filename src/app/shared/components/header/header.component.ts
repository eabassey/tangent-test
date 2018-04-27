import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppSettingsService } from '../../../app-settings.service';
import { AppSettings } from '../../../app-settings.model';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { getUserInfo } from '../../../auth/store/selectors/login.selectors';

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
    private store: Store<any>
  ) {
    this.settings = this.appSettingsService.settings;
  }

  ngOnInit() {
    this.userInfo$ = this.store.select(getUserInfo);
  }
}
