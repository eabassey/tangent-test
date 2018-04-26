import { Injectable } from '@angular/core';
import { AppSettings } from './app-settings.model';

@Injectable()
export class AppSettingsService {
  settings = new AppSettings('Main Application Setting Config', {
    showMenu: true,
    skin: 'grey'
  });
}
