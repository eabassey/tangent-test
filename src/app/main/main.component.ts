import {
  Component,
  ViewEncapsulation,
  HostListener,
  OnInit
} from '@angular/core';
import { AppSettings } from '../app-settings.model';
import { AppSettingsService } from '../app-settings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  public showMenu = false;

  public settings: AppSettings;
  constructor(
    public appSettingsService: AppSettingsService,
    public router: Router
  ) {
    this.settings = this.appSettingsService.settings;
  }

  ngOnInit() {
    if (window.innerWidth <= 768) {
      this.settings.theme.showMenu = false;
    }
    this.showMenu = this.settings.theme.showMenu;
  }

  @HostListener('window:resize')
  public onWindowResize(): void {
    const showMenu = !this._showMenu();

    if (this.showMenu !== showMenu) {
      this.showMenuStateChange(showMenu);
    }
    this.showMenu = showMenu;
  }

  public showMenuStateChange(showMenu: boolean): void {
    this.settings.theme.showMenu = showMenu;
  }

  private _showMenu(): boolean {
    return window.innerWidth <= 768;
  }
}
