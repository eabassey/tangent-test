import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { MenuService } from '../menu.service';
import { Router, NavigationEnd } from '@angular/router';
import { AppSettingsService } from '../../../../app-settings.service';
import { AppSettings } from '../../../../app-settings.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [MenuService],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit, AfterViewInit {
  @Input() menuItems;
  settings: AppSettings;
  constructor(
    private menuService: MenuService,
    private router: Router,
    private elementRef: ElementRef,
    public appSettingsService: AppSettingsService
  ) {
    this.settings = this.appSettingsService.settings;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
        const activeLink = this.menuService.getActiveLink(this.menuItems);
        this.menuService.setActiveLink(this.menuItems, activeLink);
        // jQuery('.tooltip').tooltip('hide');
        if (window.innerWidth <= 768) {
          this.settings.theme.showMenu = false;
        }
      }
    });
  }

  ngOnInit() {
    const menu_wrapper = this.elementRef.nativeElement.children[0];
    this.menuService.createMenu(this.menuItems, menu_wrapper);
  }

  ngAfterViewInit() {
    this.menuService.showActiveSubMenu(this.menuItems);
    const activeLink = this.menuService.getActiveLink(this.menuItems);
    this.menuService.setActiveLink(this.menuItems, activeLink);
  }
}
