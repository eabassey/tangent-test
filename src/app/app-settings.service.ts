import { Injectable } from '@angular/core';
import { AppSettings } from './app-settings.model';

@Injectable()
export class AppSettingsService {
  settings = new AppSettings(
    'Employees App',
    'Main Application Setting Config',
    {
      showMenu: true,
      skin: 'grey'
    }
  );
}
