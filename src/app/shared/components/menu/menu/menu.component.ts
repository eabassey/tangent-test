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
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { getAppSettings } from '../../../../store/selectors/app-settings.selectors';
import { OnDestroy } from '@angular/core';
import { HideMenu } from '../../../../store/actions/app-settings.actions';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [MenuService],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() menuItems;
  settings;
  settingsSubscription: Subscription;
  constructor(
    private menuService: MenuService,
    private router: Router,
    private elementRef: ElementRef,
    private store: Store<any>
  ) {
    this.settingsSubscription = this.store
      .select(getAppSettings)
      .subscribe(settings => (this.settings = settings));

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
        const activeLink = this.menuService.getActiveLink(this.menuItems);
        this.menuService.setActiveLink(this.menuItems, activeLink);
        if (window.innerWidth <= 768) {
          this.store.dispatch(new HideMenu());
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

  ngOnDestroy() {
    this.settingsSubscription.unsubscribe();
  }
}
