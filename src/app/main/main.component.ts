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

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit, OnDestroy {
  public showMenu = false;
  settingsSubscription: Subscription;
  constructor(public router: Router, private store: Store<any>) {}

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
