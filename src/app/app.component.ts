import { Component, ViewEncapsulation } from '@angular/core';
import { AppSettings } from './app-settings.model';
import { Router } from '@angular/router';
import { AppSettingsService } from './app-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public settings: AppSettings;
  constructor(
    public appSettingsService: AppSettingsService,
    private router: Router
  ) {
    this.settings = this.appSettingsService.settings;
  }
}
