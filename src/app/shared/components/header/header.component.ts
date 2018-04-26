import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppSettingsService } from '../../../app-settings.service';
import { AppSettings } from '../../../app-settings.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  showInfoContent = false;
  settings: AppSettings;
  constructor(public appSettingsService: AppSettingsService) {
    this.settings = this.appSettingsService.settings;
  }

  ngOnInit() {}
}
