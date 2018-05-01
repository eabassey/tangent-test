import {
  Component,
  ViewEncapsulation,
  HostListener,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { HideMenu, ShowMenu } from '../store/actions/app-settings.actions';
import { getShowMenu } from '../store/selectors/app-settings.selectors';
import { Subscription } from 'rxjs/Subscription';
import { GetEmployees } from './employees/store/actions/employees.actions';
import { GetUserProfile } from './user/store/actions/user-profile.actions';

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit, OnDestroy {
  public showMenu = false;
  settingsSubscription: Subscription;
  constructor(public router: Router, private store: Store<any>) {
    store.dispatch(new GetEmployees());
    store.dispatch(new GetUserProfile());
  }

  ngOnInit() {
    if (window.innerWidth <= 768) {
      this.store.dispatch(new HideMenu());
    }
    this.settingsSubscription = this.store
      .select(getShowMenu)
      .subscribe(showMenu => (this.showMenu = showMenu));
  }

  @HostListener('window:resize')
  public onWindowResize(): void {
    if (window.innerWidth <= 768) {
      this.store.dispatch(new HideMenu());
    } else {
      this.store.dispatch(new ShowMenu());
    }
  }

  ngOnDestroy() {
    this.settingsSubscription.unsubscribe();
  }
}
