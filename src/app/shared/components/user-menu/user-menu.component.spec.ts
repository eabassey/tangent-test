import test, { App, expectThat, Fixture } from 'ng-test-runner';
import { UserMenuComponent } from './user-menu.component';
import { SharedModule } from '../../shared.module';
import { TestBed } from '@angular/core/testing';
import { AppSettingsService } from '../../../app-settings.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserMenu Component', () => {
  let app: App;
  let comp: Fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AppSettingsService]
    });
    app = test(SharedModule);
    comp = app.run(UserMenuComponent, {
      userInfo: { first_name: 'Danny', last_name: 'Wane' }
    });
  });

  it('should exist', () => {
    comp.verify(expectThat.element('div.d-inline-block').exists());
  });

  it('should display full name of user', () => {
    comp.verify(expectThat.textOf('div a').isEqualTo('Danny Wane'));
  });
});
