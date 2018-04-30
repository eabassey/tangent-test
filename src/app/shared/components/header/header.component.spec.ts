import test, { App, expectThat, Fixture } from 'ng-test-runner';
import { HeaderComponent } from './header.component';
import { SharedModule } from '../../shared.module';
import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { AuthModule } from '../../../auth/auth.module';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { AppModule } from '../../../app.module';

describe('Header Component', () => {
  let app: App;
  let comp: Fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        RouterTestingModule,
        EffectsModule.forRoot([])
      ]
    });
    app = test(SharedModule, AuthModule);
    comp = app.run(HeaderComponent);
  });

  it('should have a nav element', () => {
    comp.verify(expectThat.element('nav').exists());
  });

  it('should have the user-menu component as child', () => {
    comp.verify(expectThat.element('app-user-menu').exists());
  });

  it('should have an achor element with a Logout text', () => {
    comp.verify(expectThat.textOf('a.mb-1').isEqualTo('Logout'));
  });
});
