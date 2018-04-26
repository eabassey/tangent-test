import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppSettings } from '../../../app-settings.model';
import { MenuService } from '../menu/menu.service';
import { AppSettingsService } from '../../../app-settings.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [MenuService],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {
  public settings: AppSettings;
  public menuItems: any[];
  constructor(
    public appSettingsService: AppSettingsService,
    public menuService: MenuService
  ) {
    this.settings = this.appSettingsService.settings;
    this.menuItems = this.menuService.getMenuItems();
  }

  ngOnInit() {}
}
